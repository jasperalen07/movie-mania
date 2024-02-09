import Header from "../components/Header";
import Footer from "../components/Footer";


function AboutPage() {
    return (
        
        <main>
            <Header />
            <div className="about-container">
            <section className="about-section">
                <h1>About Us</h1>
                
                
                <p>Welcome to MovieSquirel , where cinematic passion meets digital innovation! At MovieSquirel, we are devoted to creating a vibrant community for movie enthusiasts around the globe. Whether you're a casual viewer or a dedicated cinephile, our platform is designed to be your go-to destination for all things film-related.</p>
                <p>
                Immerse yourself in a world of comprehensive movie information, from the latest releases to timeless classics. Our user-friendly interface allows you to explore a vast database of films, TV shows, and documentaries, while our passionate community contributes reviews, ratings, and discussions, fostering a dynamic dialogue about the magic of cinema.
                </p>
                <p>Join us in celebrating the art of storytelling through the lens, and let MovieSquirel be ur ultimate companion on your cinematic journey.</p>
            </section>
            </div>

            <Footer />
        </main>




    )
}

export default AboutPage;