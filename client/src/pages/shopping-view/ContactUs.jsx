
import axios from 'axios';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast"; // For feedback on submit

const ContactUs = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value,
        };

        try {
            // Send data to backend
            const response = await axios.post(
                `${config.apiBaseUrl}/api/common/contact/send`,
                formData
            );

            // Success
            toast({
                title: "Message Sent!",
                description: response.data.message || "We'll get back to you soon.",
            });
            event.target.reset(); // Clear the form

        } catch (error) {
            // Error
            console.error("Contact form submission error:", error);
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: error.response?.data?.message || "Could not send message. Please try again later.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-xl">

                <Card className="w-full">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl font-bold tracking-tight">Contact Us</CardTitle>
                        <CardDescription className="pt-2">
                            Have questions or feedback? Fill out the form below, and we'll get back to you as soon as possible.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" type="text" placeholder="Your Name" required className="mt-1" />
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="your@email.com" required className="mt-1" />
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="Your message..." required rows={6} className="mt-1" />
                            </div>
                            <CardFooter className="p-0 pt-4">
                                <Button type="submit" className="w-full" disabled={isLoading}>
                                    {isLoading ? 'Sending...' : 'Send Message'}
                                </Button>
                            </CardFooter>
                        </form>
                    </CardContent>
                </Card>

                {/* Optional: Add other contact info outside the Card */}
                {/*
          <div className="mt-12 text-center text-gray-600">
              <h3 className="text-lg font-semibold mb-2">Other Ways to Reach Us</h3>
              <p>Phone: [Your Phone Number]</p>
              <p>Address: [Your Address]</p>
          </div>
          */}

            </div>
        </div>
    );
};

export default ContactUs;