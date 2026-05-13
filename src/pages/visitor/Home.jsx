import Navbar from "../../components/visitor/Navbar";
import HeroSection from "../../components/visitor/HeroSection";
import AboutSection from "../../components/visitor/AboutSection";
import FavoriteMenu from "../../components/visitor/FavoriteMenu";
import Testimonials from "../../components/visitor/Testimonials";
import Footer from "../../components/visitor/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <FavoriteMenu />
            <Testimonials />
            <Footer />
        </>
    );
}