"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { googleReviews } from "@/lib/google-reviews"
import { useInView } from "@/hooks/use-in-view"

export function GoogleReviewsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (isInView) setIsVisible(true)
  }, [isInView])

  const prevReview = () => {
    setActiveIndex((current) =>
      current === 0 ? googleReviews.length - 1 : current - 1
    )
  }

  const nextReview = () => {
    setActiveIndex((current) => (current + 1) % googleReviews.length)
  }

  return (
    <section
      ref={sectionRef}
      className="py-10 bg-gradient-to-b from-white to-[#001F47]"
    >
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#001F47] mb-4">
            O QUE NOSSOS PACIENTES DIZEM
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            Pacientes reais que confiaram na Implante Já e compartilharam suas
            experiências.
          </p>
        </div>

        {/* Carrossel */}
        <div
          className={`flex justify-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative w-full max-w-5xl">
            {/* Desktop */}
            <div className="hidden md:block overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {googleReviews.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-6">
                    <div className="bg-white rounded-2xl p-10 shadow-xl">
                      <div className="flex items-center mb-6">
                        {/* Foto */}
                        <div className="relative h-20 w-20 rounded-full overflow-hidden mr-5 border">
                          <Image
                            src={review.image || "/placeholder.svg"}
                            alt={review.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Nome + estrelas */}
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {review.name}
                          </h3>
                          <div className="flex mt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  i < review.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Comentário */}
                      <p className="text-gray-700 italic text-lg">
                        “{review.text}”
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden">
              <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
                <div className="flex flex-col items-center mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mb-3">
                    <Image
                      src={googleReviews[activeIndex].image || "/placeholder.svg"}
                      alt={googleReviews[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="font-bold text-gray-900">
                    {googleReviews[activeIndex].name}
                  </h3>

                  <div className="flex mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < googleReviews[activeIndex].rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 italic text-sm">
                  “{googleReviews[activeIndex].text}”
                </p>
              </div>
            </div>

            {/* Setas (mobile + desktop) */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6
                         bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10"
            >
              ❮
            </button>

            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6
                         bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10"
            >
              ❯
            </button>

            {/* Indicadores */}
            <div className="flex justify-center mt-8 gap-3">
              {googleReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    activeIndex === index
                      ? "bg-[#55bbad]"
                      : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
