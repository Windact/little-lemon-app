import { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../api";


export const Reservations = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes,initializeTimes())
    const handlerDateChange = (date) => {
        dispatch({
            type:"date_change",
            date: new Date(date)
        })
    }
    return ( 
        <div className="booking">
            <h1>Book a table</h1>
            <BookingForm availableTimes={availableTimes} handlerDateChange={handlerDateChange} submitForm={submitForm}></BookingForm>
        </div>

     );
}

export const updateTimes = (availableTimes, action) => {
    switch (action.type) {
        case "date_change" : {
            const times = fetchAPI(action.date)
            return times
        }
        default: {
            throw Error("Unknorw action: " + action.type)
        }
    }
}

export const initializeTimes = () => {
    return fetchAPI(new Date())
}
export const submitForm = (formData) => {
    return submitAPI(formData)
}