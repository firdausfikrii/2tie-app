import { Link } from "react-router-dom";

export default function Logo({ dark = false }) {
    return (
        <Link to="/" className="flex items-center">

            <h1
                className={`
                    font-playfair
                    text-4xl
                    font-bold
                    tracking-wide
                    ${dark ? "text-gray-900" : "text-white"}
                `}
            >
                Sedap
            </h1>

            <span className="text-yellow-500 text-5xl leading-none">
                .
            </span>

        </Link>
    );
}