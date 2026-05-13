import Logo from "../common/Logo";
export default function Footer() {
    return (
        <footer
            id="contact"
            className="bg-black text-white py-16"
        >
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">

                <div>
                    <Logo />
                </div>

                <div>
                    <h3 className="font-bold mb-4">
                        Kontak
                    </h3>

                    <p>Email: support@sedap.com</p>
                    <p>Phone: +62 812 3456 7890</p>
                </div>

                <div>
                    <h3 className="font-bold mb-4">
                        Social Media
                    </h3>

                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                </div>

                <div>
                    <h3 className="font-bold mb-4">
                        Partner
                    </h3>

                    <p>GoFood</p>
                    <p>GrabFood</p>
                </div>

            </div>
        </footer>
    );
}