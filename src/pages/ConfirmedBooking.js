import { Navigate, useLocation } from "react-router-dom";

const ConfirmedBooking = (props) => {
    const location = useLocation()

    const formatDate = (stringDate) => {
        const date = new Date(stringDate)
        return date.toLocaleDateString('en-US', {
    month: 'long', // Full month name
    day: 'numeric', // Day without leading zero
    year: 'numeric', // Four-digit year
  })
    }

    if (location.state === null) {
        return <Navigate to={"/"}></Navigate>
    }
    else {
        const {bookingDate, bookingTime, numberOfGuests, occasion} = location.state
        return ( 
            <div className="booking-confirmation">
                <h1>Booking confirmation</h1>
                <p>Your reservation for <strong>{formatDate(bookingDate)}</strong> at <strong>{bookingTime}</strong> for the <strong>{occasion.toLowerCase()}</strong> of <strong>{numberOfGuests}</strong> has been confirmed.</p>
            </div>
         )
    }
}
 
export default ConfirmedBooking;