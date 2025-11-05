import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const whatsappLink =
    "https://wa.me/+553131917600?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."

  return (
    <section
      id="inicio"
      className="relative bg-[linear-gradient(to_bottom,_#0A2463_0%,_#0A2463_25%,_white_100%)] overflow-hidden pt-20"
    >
      <div className="container relative mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Texto */}
          <div className="space-y-8 z-10 text-gray-900">
            <h1 className="text-5xl lg:text-6xl text-white font-bold leading-tight">
              Implantes Dentários de Qualidade em BH
            </h1>

            <p className="text-xl text-white leading-relaxed">
              Resultados rápidos: dentes fixos e com máximo conforto. Recupere sua autoestima conosco!
            </p>

          <Button
            size="lg"
            className="bg-[#2CC84D] hover:bg-[#25b043] text-white font-semibold px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all animate-[pulse-scale_0.9s_ease-in-out_infinite]"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <img
                src="whatsapp (2).png"
                alt="WhatsApp"
                className="mr-2 h-10 w-10"
              />
              Agendar minha Avaliação
            </a>
          </Button>
          </div>

          {/* Imagem */}
          <div className="relative">
            <div className="relative h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="fachadaimplanteja.jpg"
                alt="Fachada da Clínica Implante Já"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/30 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
