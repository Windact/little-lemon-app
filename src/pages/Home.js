const Home = () => {
    return ( 
        <div className="home">
            <div className="home-top">
                <div className="home-description">
                <article>
                    <header>
                        <h2> Little Lemon</h2>
                        <h3>Chicago</h3>
                    </header>
                    <section>
                        <p>We are a familiy owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                    </section>
                </article>
                <button> Reserve a table</button>
                </div>
                <img src="public/images/restauranfood.jpg" alt="Home restaurant food" />
            </div>
            <div className="specials-header">
                <h2>This weeks specials!</h2>
                <button>Online Menu</button>
            </div>
        </div>
     );
}
 
export default Home;