const Testimonial = (props) => {
    const testimonial = props.testimonial
    return ( 
        <div className="testimonial">
            <h2>{testimonial.rating}</h2>
            <div className="testimonial-avatar">
                <img src={testimonial.avatarPath} alt="User avatar" />
                <h2>{testimonial.userName}</h2>
            </div>
            <p>{testimonial.review}</p>
        </div>

     );
}
 
export default Testimonial;