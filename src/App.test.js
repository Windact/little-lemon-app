import { render, fireEvent, screen } from "@testing-library/react";
import App from './App';
import BookingForm from './components/BookingForm';
import { Reservations, updateTimes } from "./pages/Reservations";
import { MemoryRouter } from "react-router-dom";
import { initializeTimes } from "./pages/Reservations";
import { fetchAPI, submitAPI } from "./api";

jest.mock("./api", () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(formData => true)
}))

test("Check for h1 in Reservations", () => {
  // Given
  render(
    <MemoryRouter>
      <Reservations></Reservations>
    </MemoryRouter>
)

  // When
  const headingElement = screen.getByText("Book a table")

  // Then
  expect(headingElement).toBeInTheDocument()
})

test("User should be able to submit form", () => {
  // Given
  const mockSubmit = jest.fn()

  render(
    <MemoryRouter>
      <Reservations></Reservations>
    </MemoryRouter>
)

  const form = screen.getByRole("form")
  const submitButton = screen.getByRole("button")

  form.addEventListener('submit', mockSubmit)
  // When
  fireEvent.click(submitButton)

  // Then
  expect(mockSubmit).toHaveBeenCalled()
  // expect(headingElement).toBeInTheDocument()
})

test("Renders the BookingForm label", () => {
  // render the BookingForm component
  const availableTimes = ["17:00", "18:00"]
  const handlerDateChange = () => {
    console.log("Simple test")
  }
  render(
    <MemoryRouter>
      <BookingForm availableTimes={availableTimes} handlerDateChange={handlerDateChange}></BookingForm>
    </MemoryRouter>
)
  
  const label = screen.getByText("Choose a date")
  
  expect(label).toHaveTextContent("Choose a date");
});

test("initializeTimes function should return booking times", () => {

  fetchAPI.mockReturnValue(["17:00", "18:00"])

  const actual = initializeTimes()

  expect(actual).toEqual(["17:00", "18:00"])
})

test("initializeTimes returns initial values", () => {
  const initializeTimes = ["17:00", "18:00"]
  const handlerDateChange = () => {
    console.log("Simple test")
  }
  render(
    <MemoryRouter>
      <BookingForm availableTimes={initializeTimes} handlerDateChange={handlerDateChange}></BookingForm>
    </MemoryRouter>
); 
  
  const timeOptions = document.getElementById("res-time").options
  console.log(timeOptions)
  
  expect(timeOptions).toHaveLength(2);

  expect(timeOptions[0]).toHaveValue("17:00")
  expect(timeOptions[1]).toHaveValue("18:00")
})

test("updateTimes should return proper times", () => {
  // Given
  fetchAPI.mockReturnValue(["17:00", "18:00"])
  const availableTimes = ["17:00", "18:00"]
  const action = {
    type: "date_change",
    date: new Date()
  }
  // When
  const actual = updateTimes(availableTimes, action)
  // Then
  expect(actual).toEqual(["17:00", "18:00"])

})

// Forms
test("Check element res-date is of typye date", () => {
  const availableTimes = ["17:00", "18:00"]
  const handlerDateChange = () => {
    console.log("Simple test")
  }
  render(
    <MemoryRouter>
      <BookingForm availableTimes={availableTimes} handlerDateChange={handlerDateChange}></BookingForm>
    </MemoryRouter>
)
  const dateElement = document.getElementById("res-date")


  expect(dateElement.type).toBe("date")
  expect(dateElement).toHaveAttribute("required")

})

test("Check element res-time is of tpye select", () => {
  const availableTimes = ["17:00", "18:00"]
  const handlerDateChange = () => {
    console.log("Simple test")
  }
  render(
    <MemoryRouter>
      <BookingForm availableTimes={availableTimes} handlerDateChange={handlerDateChange}></BookingForm>
    </MemoryRouter>
)
  const timeElement = document.getElementById("res-time")

  expect(timeElement).toHaveAttribute("required")

})

test("Check element guests is of tpye number", () => {
  const availableTimes = ["17:00", "18:00"]
  const handlerDateChange = () => {
    console.log("Simple test")
  }
  render(
    <MemoryRouter>
      <BookingForm availableTimes={availableTimes} handlerDateChange={handlerDateChange}></BookingForm>
    </MemoryRouter>
)
  const numberElement = document.getElementById("guests")

  expect(numberElement).toHaveAttribute("type", "number")
  expect(numberElement).toHaveAttribute("required")

})

test("Check element occasion", () => {
  const availableTimes = ["17:00", "18:00"]
  const handlerDateChange = () => {
    console.log("Simple test")
  }
  render(
    <MemoryRouter>
      <BookingForm availableTimes={availableTimes} handlerDateChange={handlerDateChange}></BookingForm>
    </MemoryRouter>
)
  const occasionElement = document.getElementById("occasion")

  expect(occasionElement).toHaveAttribute("required")

})

test("Check element occasion", () => {
  const availableTimes = ["17:00", "18:00"]
  const handlerDateChange = () => {
    console.log("Simple test")
  }
  render(
    <MemoryRouter>
      <BookingForm availableTimes={availableTimes} handlerDateChange={handlerDateChange}></BookingForm>
    </MemoryRouter>
)
  const occasionElement = document.getElementById("occasion")

  expect(occasionElement).toHaveAttribute("required")

})

test("Form should be invalid when inputs are missing", () => {
  const availableTimes = ["17:00", "18:00"]
  const handlerDateChange = () => {
    console.log("Simple test")
  }
  render(
    <MemoryRouter>
      <BookingForm availableTimes={availableTimes} handlerDateChange={handlerDateChange}></BookingForm>
    </MemoryRouter>
)

  const form = screen.getByRole("form")

  expect(form.checkValidity()).toBe(false)

})

test("Form should be valid when inputs are provided", () => {
  const availableTimes = ["17:00", "18:00"]
  const handlerDateChange = () => {
    console.log("Simple test")
  }
  render(
    <MemoryRouter>
      <BookingForm availableTimes={availableTimes} handlerDateChange={handlerDateChange}></BookingForm>
    </MemoryRouter>
)

  const form = screen.getByRole("form")
  const dateElement = document.getElementById("res-date")
  const timeElement = document.getElementById("res-time")
  const numberElement = document.getElementById("guests")
  const occasionElement = document.getElementById("occasion")

  fireEvent.change(dateElement, {"target": {"value": "2024-11-27"}})
  fireEvent.change(timeElement, {"target": {"value": "17:00"}})
  fireEvent.change(numberElement, {"target": {"value": "2"}})
  fireEvent.change(occasionElement, {"target": {"value": "Birthday"}})

  expect(form.checkValidity()).toBe(true)

})