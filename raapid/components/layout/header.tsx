
import { Button } from "@/components/ui/button"
import Link from "next/link";
import MobileNav from "@/components/layout/mobileNav"

export default function Header() {
  return (
    <nav className="w-11/12  mx-auto md:grid flex justify-between md:justify-normal md:grid-cols-3 items-center py-5">
      <div className="hidden md:flex gap-4 ">
        <Link href="#about" className="text-[14px]">About</Link>
        <Link href="#features" className="text-[14px]">Features</Link>
        <Link href="#faqs" className="text-[14px]">Faqs</Link>
        <Link href="#contact"  className="text-[14px]">Contact us</Link>
      </div>


      <div className="md:flex md:justify-center">
        <h2 className="text-xl font-bold uppercase bg-gradient-to-t from-orange-500 to-orange-100 bg-clip-text text-transparent">
          Raapid
        </h2>
      </div>


      <div className="hidden md:flex justify-end">
        <Button className="rounded-full font-semibold bg-orange-400 text-white">
          Join the waitlist
        </Button>
      </div>

      <div className="md:hidden block">
        <MobileNav/>
      </div>
    </nav>
  )
}
