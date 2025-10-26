// client/src/pages/shopping-view/AboutUs.jsx
import { Separator } from "@/components/ui/separator"; // Import Separator for visual breaks

const AboutUs = () => {
    return (
        // --- Added background, padding, and ensure it takes up good vertical space ---
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-3xl"> {/* Constrained width for readability */}

                {/* --- Page Title --- */}
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-8 text-center">
                    About
                </h1>

                {/* --- Introductory Section --- */}
                <section className="mb-10 text-center">
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Welcome to Petra Cosmetics! We are passionate about providing high-quality
                        cosmetic products that enhance your natural beauty and inspire confidence.
                    </p>
                </section>

                <Separator className="my-8" /> {/* Visual separator */}

                {/* --- Mission/Vision Section --- */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our mission is to empower individuals through products that are not only
                        effective but also ethically sourced and cruelty-free. We believe that
                        beauty should be accessible, sustainable, and kind to both people and the planet.
                    </p>
                </section>

                {/* --- History Section --- */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                    Having sold thousands of skincare and haircare products over the years, Daniel Bader began his journey in the beauty industry by setting up kiosks in Europe and the USA. Through his personal skincare concerns, he discovered the many benefits of Dead Sea minerals, particularly for sensitive skin, and became passionate about sharing his knowledge to help others achieve improved skincare health.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                    In 2011, this powerful duo decided to join forces to build a luxury skincare brand based in Dubai, and so Petra was born. In 2012, Petra opened its first location in Dubai Marina Mall and has continued to exponentially grow to multiple locations in 2023, with over 50 expert skincare specialists under its brand.
                    </p>
                </section>

                <Separator className="my-8" />

                {/* --- Closing Section --- */}
                <section className="text-center">
                    <p className="text-gray-700 leading-relaxed">
                        Thank you for choosing Petra Cosmetics. Join us on our journey to redefine beauty,
                        one product at a time.
                    </p>
                </section>

                {/* Remember to replace "[Year]" with the actual founding year! */}
            </div>
        </div>
    );
};

export default AboutUs;