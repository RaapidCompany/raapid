import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-purple-50 to-blue-200 px-6 py-20 h-[80vh]">
        <div className="relative flex items-center justify-center h-full max-w-4xl mx-auto text-center">
          {/* Floating Profile Images */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top left profile */}
            <div className="absolute top-8 left-16">
              <div className="w-16 h-16 overflow-hidden border-4 border-white rounded-full shadow-lg">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Team member"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Top right profile */}
            <div className="absolute top-4 right-20">
              <div className="w-20 h-20 overflow-hidden border-4 border-white rounded-full shadow-lg">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Team member"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Middle left profile */}
            <div className="absolute top-32 left-8">
              <div className="overflow-hidden border-4 border-white rounded-full shadow-lg w-18 h-18">
                <Image
                  src="/placeholder.svg?height=72&width=72"
                  alt="Team member"
                  width={72}
                  height={72}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Middle right profile */}
            <div className="absolute top-24 right-8">
              <div className="w-16 h-16 overflow-hidden border-4 border-white rounded-full shadow-lg">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Team member"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bottom left profile */}
            <div className="absolute bottom-16 left-24">
              <div className="overflow-hidden border-4 border-white rounded-full shadow-lg w-14 h-14">
                <Image
                  src="/placeholder.svg?height=56&width=56"
                  alt="Team member"
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bottom right profile */}
            <div className="absolute bottom-8 right-16">
              <div className="w-16 h-16 overflow-hidden border-4 border-white rounded-full shadow-lg">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Team member"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Curved connecting lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" fill="none">
              <path d="M100 80 Q200 120 300 100 T500 80" stroke="#e5e7eb" strokeWidth="2" fill="none" opacity="0.6" />
              <path d="M80 200 Q180 160 280 180 T480 200" stroke="#e5e7eb" strokeWidth="2" fill="none" opacity="0.6" />
              <path d="M150 300 Q250 260 350 280 T550 300" stroke="#e5e7eb" strokeWidth="2" fill="none" opacity="0.6" />
            </svg>

            {/* Decorative elements */}
            <div className="absolute top-12 right-32">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
            <div className="absolute top-40 left-32">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            </div>
            <div className="absolute bottom-20 right-24">
              <div className="flex space-x-1">
                <div className="w-1 h-4 bg-gray-400"></div>
                <div className="w-1 h-4 bg-gray-400"></div>
                <div className="w-1 h-4 bg-gray-400"></div>
              </div>
            </div>
            <div className="absolute top-20 left-1/2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="#9ca3af" />
              </svg>
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            <p className="mb-4 text-sm font-medium tracking-wide text-gray-600">CAREERS AT RAAPID</p>
            <h1 className="mb-8 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
              Be a part of
              <br />
              something great
            </h1>
            <Link href="#jobs">
                <Button className="px-8 py-3 text-lg font-medium text-white bg-black hover:bg-gray-800">Browse jobs</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Your next big career move</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            We&apos;re an ambitious, fast-growing company—with all the opportunity for impact and career growth that comes
            with that territory. There&apos;s a lot of exciting work ahead.
          </p>
        </div>
      </section>
    </div>
  )
}
