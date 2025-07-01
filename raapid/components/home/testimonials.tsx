"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
	{
		id: 1,
		name: "Sarah Chen",
		role: "Restaurant Owner",
		company: "Green Eats Bistro",
		content:
			"Raapid has transformed our delivery operations. Our customers love the eco-friendly approach, and we've seen a 40% increase in delivery efficiency.",
		rating: 5,
		avatar: "/placeholder.svg?height=60&width=60",
		fallback: "S",
	},
	{
		id: 2,
		name: "Marcus Rodriguez",
		role: "Delivery Rider",
		company: "Raapid",
		content:
			"The rider app is incredibly intuitive, and the electric bikes are a joy to ride. I'm earning more while contributing to a cleaner environment with Raapid.",
		rating: 5,
		avatar: "/placeholder.svg?height=60&width=60",
		fallback: "M",
	},
	{
		id: 3,
		name: "Emily Watson",
		role: "Operations Manager",
		company: "QuickMart",
		content:
			"The real-time tracking and analytics have given us unprecedented visibility into our delivery operations. Customer satisfaction is at an all-time high.",
		rating: 5,
		avatar: "/placeholder.svg?height=60&width=60",
		fallback: "E",
	},
]

export function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0)

	const nextTestimonial = () => {
		setCurrentIndex((prev) => (prev + 1) % testimonials.length)
	}

	const prevTestimonial = () => {
		setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
	}

	return (
		<section className="py-20 bg-gray-50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
						What Our Users Say
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Hear from businesses and riders who are already delivering the future
					</p>
				</motion.div>

				<div className="max-w-4xl mx-auto relative">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentIndex}
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -50 }}
							transition={{ duration: 0.5 }}
							className="bg-white rounded-2xl p-8 shadow-lg"
						>
							<div className="flex items-center mb-6">
								{[...Array(testimonials[currentIndex].rating)].map((_, i) => (
									<Star
										key={i}
										className="h-5 w-5 text-yellow-400 fill-current"
									/>
								))}
							</div>
							<blockquote className="text-xl text-gray-700 mb-8 leading-relaxed">
								&quot;{testimonials[currentIndex].content}&quot;
							</blockquote>
							<div className="flex items-center">
								<Avatar>
									<AvatarImage
										src={
											testimonials[currentIndex].avatar || "/placeholder.svg"
										}
										alt={testimonials[currentIndex].name}
									/>
									<AvatarFallback>
										{testimonials[currentIndex].fallback ||
											testimonials[currentIndex].name[0]}
									</AvatarFallback>
								</Avatar>
								<div className="ml-4">
									<div className="font-semibold text-gray-900">
										{testimonials[currentIndex].name}
									</div>
									<div className="text-gray-600">
										{testimonials[currentIndex].role} at{" "}
										{testimonials[currentIndex].company}
									</div>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>

					<div className="flex justify-center items-center mt-8 gap-4">
						<Button
							variant="outline"
							size="sm"
							onClick={prevTestimonial}
							className="rounded-full bg-transparent"
						>
							<ChevronLeft className="h-4 w-4" />
						</Button>
						<div className="flex gap-2">
							{testimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentIndex(index)}
									className={`w-2 h-2 rounded-full transition-colors ${
										index === currentIndex
											? "bg-green-600"
											: "bg-gray-300"
									}`}
								/>
							))}
						</div>
						<Button
							variant="outline"
							size="sm"
							onClick={nextTestimonial}
							className="rounded-full bg-transparent"
						>
							<ChevronRight className="h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
