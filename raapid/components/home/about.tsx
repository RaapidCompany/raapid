import { Button } from "@/components/ui/button"

export default function About() {
    return (
        <section id="about" className="flex justify-center items-center justify-items-center md:h-screen h-[70vh] font-inter">
            <div>
                <div className="md:pb-20 pb-14">
                    <h1 className="font-semibold text-center md:text-4xl text-3xl">
                        <span className="text-gray-200">Revolutionizing{" "}</span>
                        <span className="bg-gradient-to-r from-orange-100 to-orange-500 bg-clip-text text-transparent">Delivery</span>
                    </h1>
                    <p className="md:w-6/12 w-11/12 text-center mx-auto pt-1 md:text-base text-[14px]">
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, mollitia vero. Aperiam eos 
                       consectetur nam necessitatibus quos suscipit quo, assumenda, possimus minus accusantium commodi 
                       doloribus voluptatibus nemo reiciendis repellat mollitia minima, reprehenderit delectus unde veniam 
                       quidem voluptatem perferendis placeat! Adipisci necessitatibus soluta sed corrupti, excepturi quod mollitia 
                       laboriosam qui minus?
                    </p>
                </div>
                <div>
                    <h1 className="font-semibold text-center text-3xl md:text-4xl">
                        <span className="text-gray-200">Revolutionizing{" "}</span>
                        <span className="bg-gradient-to-r from-orange-100 to-orange-500 bg-clip-text text-transparent">Delivery</span>
                    </h1>
                    <p className="w-11/12 md:w-6/12 text-center mx-auto pt-1 md:text-base text-[14px]">
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, mollitia vero. Aperiam eos 
                       consectetur nam necessitatibus quos suscipit quo, assumenda, possimus minus accusantium commodi 
                       doloribus voluptatibus nemo reiciendis repellat mollitia minima, reprehenderit delectus unde veniam 
                       quidem voluptatem perferendis placeat! Adipisci necessitatibus soluta sed corrupti, excepturi quod mollitia 
                       laboriosam qui minus?
                    </p>
                    <Button className="block md:w-2/12 w-6/12 h-auto mx-auto rounded-full md:mt-8 mt-6 text-lg">Join the waitlist</Button>
                </div>
            </div>
        </section>
    )
}
