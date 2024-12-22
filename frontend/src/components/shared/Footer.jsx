import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8 mt-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* About Us */}
                    <div>
                        <h5 className="text-xl font-semibold text-gray-800 mb-4">About Us</h5>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                        </p>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h5 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h5>
                        <ul className="space-y-2">
                            <li>
                                <a href="#jobs" className="text-gray-600 hover:text-purple-600 transition">
                                    Find Jobs
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-600 hover:text-purple-600 transition">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-600 hover:text-purple-600 transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Contact Us */}
                    <div>
                        <h5 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h5>
                        <p className="text-gray-600">Email: info@example.com</p>
                        <p className="text-gray-600">Phone: +1 234 567 890</p>
                    </div>
                </div>
                <hr className="my-6 border-gray-300" />
                <p className="text-center text-gray-600">
                    &copy; 2024 JobSearch Inc. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
