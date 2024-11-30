import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = (props) => {
    const navigate = useNavigate()
    const availableTimes = props.availableTimes
    const submitForm = props.submitForm
    const handlerDateChange = props.handlerDateChange

    const [bookingDate, setBookingDate] = useState(null)
    const [bookingTime, setBookingTime] = useState(null)
    const [numberOfGuests, setNumberOfGuets] = useState()
    const [occasion, setOccasion] = useState("Birthday")

    const handleSubmit = (e) => {
        e.preventDefault()
        const res = submitForm({
            bookingDate: bookingDate,
            bookingTime: bookingTime,
            numberOfGuests:numberOfGuests,
            occasion:occasion,
        })

        if (res === true) {
            navigate("/bookingConfirmation", {
                state: {bookingDate: bookingDate,
                    bookingTime: bookingTime,
                    numberOfGuests:numberOfGuests,
                    occasion:occasion,
                }
            })
        }

    }

    const handleOnDateChange = (e) => {
        setBookingDate(e.target.value)
        handlerDateChange(e.target.value)
    }

    return ( 
        <form role="form" onSubmit={handleSubmit}>
            <label htmlFor="res-date" > Choose a date </label>
            <input type="date" id="res-date" required value={bookingDate} onChange={handleOnDateChange} aria-describedby="Booking date"></input>
            <label htmlFor="res-time">Choose a time</label>
            <select id="res-time" value={bookingTime} required onChange={(e) => setBookingTime(e.target.value)} aria-describedby="Booking times available">
                {availableTimes && availableTimes.map((availableTime) => <option>{availableTime}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" required value={numberOfGuests} onChange={(e) => setNumberOfGuets(e.target.value)} aria-describedby="Number of guests"></input>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} required onChange={(e) => setOccasion(e.target.value)} aria-describedby="Booking occaion">
                <option key={"Birthday"}>Birthday</option>
                <option key={"Anniversary"}>Anniversary</option>
            </select>
            <button aria-label="On Click" aria-describedby="Submit your reservation">Make Your reservation</button>
        </form>


     );
}
 
export default BookingForm;