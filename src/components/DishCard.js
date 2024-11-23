import { Link } from 'react-router-dom';
import { MdDeliveryDining } from "react-icons/md";


const DishCard = (props) => {
    const dish = props.dish
    return ( 
        <div className="dish">
            <img src={dish.imagePath} alt="Dish image"></img>
            <div className="dish-heading">
                <p>{dish.name}</p>
                <p>{dish.price}</p>
            </div>
            <div className="dish-description">
            <p>{dish.description}</p>

            </div>
            <Link to="orderOnline">Order a delivery <MdDeliveryDining />
            </Link>
        </div>

     );
}
 
export default DishCard;
