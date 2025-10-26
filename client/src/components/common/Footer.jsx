// client/src/components/common/Footer.jsx
import { Link } from "react-router-dom";
// --- Import social media icons from lucide-react ---
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        // --- Applied styles similar to header: bg, border, padding ---
        <footer className="bg-gray-50 border-t border-gray-200 mt-16 py-8 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto text-center text-gray-500"> {/* Slightly lighter text */}
                {/* --- Navigation Links --- */}
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 text-sm"> {/* Added flex-wrap and gap */}
                    <Link to="/shop/home" className="hover:text-gray-900 transition-colors">
                        Home
                    </Link>
                    <Link to="/shop/listing" className="hover:text-gray-900 transition-colors">
                        Products
                    </Link>
                    <Link to="/shop/about-us" className="hover:text-gray-900 transition-colors">
                        About Us
                    </Link>
                    <Link to="/shop/contact-us" className="hover:text-gray-900 transition-colors">
                        Contact Us
                    </Link>
                    {/* Add other important links like Terms of Service, Privacy Policy if needed */}
                </div>

                {/* --- Social Media Links --- */}
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Facebook size={20} /> {/* Adjust size as needed */}
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Instagram size={20} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Twitter size={20} />
                    </a>
                    {/* Palitan mo yung "#" ng actual links sa social media niyo */}
                </div>

                {/* --- Copyright --- */}
                <p className="text-xs">&copy; {currentYear} Petra Cosmetics. All rights reserved.</p> {/* Smaller text size */}
            </div>
        </footer>
    );
};

export default Footer;