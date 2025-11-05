"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function BenefitsSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
  }, [isInView])

  const procedures = [
    {
      id: 1,
      title: "Implantes Dentários",
      image: "/implante.png",
      items: [
        "Melhora da mastigação",
        "Alta durabilidade",
        "Conforto",
        "Prevenção da perda óssea"
      ]
    },
    {
      id: 2,
      title: "Prótese Overdenture",
      image: "/overdenture.jpg",
      items: [
        "Facilidade de higienização",
        "Custo menor",
        "Aumenta a confiança social"
      ]
    },
    {
      id: 3,
      title: "Prótese  Protocolo",
      image: "/protocolo.jpg",
      items: [
        "Fixação total",
        "Máxima estabilidade",
        "Estética superior",
        "Melhora da qualidade de vida",
      ]
    }
  ]

  return (
    <section
     id="servicos"
      ref={sectionRef}
      className="py-16 px-4 bg-[linear-gradient(to_bottom,#001F47_0%,#001F47_60%,#e6ebf7_90%,white_100%)]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Título Centralizado */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossos Serviços
          </h2>
          <p className="text-white max-w-2xl mx-auto text-base md:text-lg">
            Conheça nossa gama completa de procedimentos odontológicos pensados
            para transformar seu sorriso.
          </p>
        </div>

        {/* Grid Responsivo */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {procedures.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white w-full max-w-[420px] border border-gray-100 rounded-xl overflow-hidden
              hover:shadow-xl transition-all duration-700 group
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
            `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >

              {/* IMAGEM */}
              <div className="relative h-[220px] w-full overflow-hidden">
                <div className="absolute inset-0 p-2">
                  <div className="relative h-full w-full overflow-hidden rounded-lg">

                    {/* Borda azul decorativa */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#55bbad]/30 to-[#55bbad]/10 rounded-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Borda interna */}
                    <div className="absolute inset-0 border-4 border-[#55bbad]/20 rounded-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
                 {/* CONTEÚDO */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <ul className="space-y-2 mb-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#55bbad]"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/+553131917600?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#55bbad] font-medium hover:underline flex items-center"
                >
                  Saiba Mais <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
