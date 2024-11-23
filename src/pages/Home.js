import DishCard from "../components/DishCard";
import Testimonial from "../components/Testimonial";

const Home = () => {
    const dishes = [
        {
            imagePath: "/images/greek salad.jpg",
            name: "Greek Salad",
            price: "$ 12.99",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, culpa incidunt ipsum eveniet tempore reiciendis fugiat itaque iure dolor, amet suscipit doloremque maiores soluta dicta in vero optio commodi placeat."
        },
        {
            imagePath: "/images/bruchetta.svg",
            name: "Bruchetta",
            price: "$ 5.99",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, culpa incidunt ipsum eveniet tempore reiciendis fugiat itaque iure dolor, amet suscipit doloremque maiores soluta dicta in vero optio commodi placeat."
        },
        {
            imagePath: "/images/lemon dessert.jpg",
            name: "Lemon Dessert",
            price: "$ 5.00",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, culpa incidunt ipsum eveniet tempore reiciendis fugiat itaque iure dolor, amet suscipit doloremque maiores soluta dicta in vero optio commodi placeat."
        }
    ]
    const testimonials = [
        {
            rating: "4/5",
            avatarPath: "/images/user.png",
            userName: "Marc",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, culpa incidunt ipsum eveniet tempore reiciendis fugiat itaque iure dolor, amet suscipit doloremque maiores soluta dicta in vero optio commodi placeat."
        },
        {
            rating: "4.5/5",
            avatarPath: "/images/woman.png",
            userName: "Aline",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, culpa incidunt ipsum eveniet tempore reiciendis fugiat itaque iure dolor, amet suscipit doloremque maiores soluta dicta in vero optio commodi placeat."
        },
        {
            rating: "5/5",
            avatarPath: "/images/woman_2.png",
            userName: "Delphine",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, culpa incidunt ipsum eveniet tempore reiciendis fugiat itaque iure dolor, amet suscipit doloremque maiores soluta dicta in vero optio commodi placeat."
        },
    ]
    return ( 
        <div className="home">
            <div className="home-top">
                <div className="home-top-container">
                <div className="home-description">
                    <article>
                        <header>
                            <h1 className="brand-name"> Little Lemon</h1>
                            <h2>Chicago</h2>
                        </header>
                        <section>
                            <p>We are a familiy owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        </section>
                    </article>
                    <button> Reserve a table</button>
                </div>
                </div>
                <img src="/images/restauranfood.jpg" alt="Home restaurant food" />
            </div>
            <div className="specials-header">
                {/* <div className="specials"> */}
                <h1>Specials</h1>
                <button>Online Menu</button>
                {/* </div> */}
            </div>
            <div className="dish-list">
            {dishes.map((dish) => <DishCard dish={dish}></DishCard>)}
            </div>
            <div className="testimonials">
                <h1>Testimonials</h1>
                <div className="testimonial-list">
                    {testimonials.map((testimonial) => <Testimonial testimonial={testimonial}></Testimonial>)}
                </div>
            </div>
            <div className="home-bottom">
                <article>
                    <header>
                        <h1 className="brand-name"> Little Lemon</h1>
                        <h2>Chicago</h2>
                    </header>
                    <section>
                        <p>We are a familiy owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    </section>
                </article>
                <div className="restaurant-images">
                    <img src="/images/restaurant.jpg" alt="restaurant" />
                    <img src="/images/restaurantchef.jpg" alt="restaurant chef cooking" />
                </div>
            </div>

            
        </div>
     );
}
 
export default Home;