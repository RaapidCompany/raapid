import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    return(
        <section id="contact">
            <div>
                <h1 className="text-center">
                    <span className="block font-extrabold uppercase bg-gradient-to-t from-orange-500 to-orange-100 bg-clip-text text-transparent">Contact us</span>
                    <span className="text-black block text-4xl">Get in touch</span>
                </h1>
            </div>

            <div className="md:w-5/12 w-11/12 mx-auto mt-3">
                <form className="grid gap-3">
                    <div className="flex items-center gap-3">
                        <div className="w-full">
                            <Label className="text-gray-500" htmlFor="name">First Name</Label>
                            <Input id="first_name" placeholder="First name" className="w-full" />
                        </div>
                        <div className="w-full">
                            <Label className="text-gray-500" htmlFor="name">Last Name</Label>
                            <Input id="last_name" placeholder="First name" className="w-full" />
                        </div>
                    </div>
                    <div className="grid gap-3">
                        <div className="w-full">
                            <Label className="text-gray-500" htmlFor="name">Email</Label>
                            <Input id="email" placeholder="name@example.com" className="w-full" />
                        </div>
                        <div className="w-full">
                            <Label className="text-gray-500" htmlFor="name">Phone Number</Label>
                            <Input id="phone" placeholder="+1234567890" className="w-full" />
                        </div>
                    </div>
                    <div className="w-full">
                        <Label className="text-gray-500" htmlFor="name">Message</Label>
                        <Textarea id="phone" placeholder="message..." className="w-full h-[20vh] overflow-y-auto resize-none" />
                    </div>
                    <div>
                        <Button className="w-full">Send Message</Button>
                    </div>
                </form>
            </div>
        </section>
    )
} 