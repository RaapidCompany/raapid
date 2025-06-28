// import Line from "@/components/ui/line"
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return(
        <>
          <footer className="font-inter">
            {/* <Line /> */}
            <div className="w-11/12 mx-auto flex items-center justify-between py-5 pt-20">
                <div className="">
                    <h2 className="font-bold text-black text-md">Raapid</h2>
                    <p className="text-black text-[14px] font-light">&copy; Raapid. All right reserved.</p>
                </div>

                <div className="flex gap-3 items-center">
                    <FaInstagram className="w-4 h-4 text-black"/>
                    <FaTiktok  className="w-4 h-4 text-black"/>
                    <FaXTwitter className="w-4 h-4 text-black"/>
                </div>
            </div>
          </footer>
        </>
    )
}