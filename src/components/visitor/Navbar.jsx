import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import Logo from "../common/Logo";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-sm">

            <div className="container mx-auto px-8 py-5 flex items-center justify-between">

                {/* Logo */}
                <Logo />

                {/* Menu */}
                <nav className="hidden lg:flex items-center gap-10 text-white font-semibold uppercase text-sm">

                    <a href="#home" className="hover:text-yellow-500 transition">
                        Home
                    </a>

                    <a href="#menu" className="hover:text-yellow-500 transition">
                        Menu
                    </a>

                    <a href="#promo" className="hover:text-yellow-500 transition">
                        Promo
                    </a>

                    <a href="#about" className="hover:text-yellow-500 transition">
                        Tentang
                    </a>

                    <a href="#contact" className="hover:text-yellow-500 transition">
                        Kontak
                    </a>

                </nav>

                {/* Right Button */}
                <div className="flex items-center gap-4">

                    {/* Sign In */}
                    <Link
                        to="/login"
                        className="hidden md:block text-white uppercase text-sm font-semibold hover:text-yellow-500 transition"
                    >
                        Sign In
                    </Link>

                    {/* Sign Up */}
                    <Link
                        to="/register"
                        className="hidden md:block border border-yellow-600 px-6 py-3 text-white uppercase text-sm font-bold hover:bg-yellow-600 transition duration-300"
                    >
                        Sign Up
                    </Link>

                    {/* Mobile Menu */}
                    <button className="text-white">
                        <Menu size={30} />
                    </button>

                </div>

            </div>

        </header>
    );
}