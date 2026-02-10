import { Button } from "@/components/ui/button"
import Image from "next/image"

export function BeforeAfterSection() {
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=553131917600&text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.%0A%0A"

  return (
    <section id="antes-depois" className="py-16 bg-white">
      <div className="container mx-auto px-4">

        {/* Cabeçalho */}
        <div className="max-w-2xl mb-14 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            <span className="bg-[#001F47] bg-clip-text text-transparent">
              Resultados reais
            </span>
          </h2>

          <div className="h-1 w-24 bg-[#2DC8D2] rounded-full mx-auto lg:mx-0"></div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Transformações reais de pacientes que confiaram em nosso cuidado,
            técnica e experiência profissional.
          </p>

          {/* Botão com mais destaque */}
          <Button
            className="
              bg-gradient-to-r from-[#2DC8D2] to-[#004B8C]
              text-white
              font-semibold
              rounded-full
              px-8
              py-6
              shadow-lg
              hover:shadow-xl
              hover:scale-[1.03]
              transition-all
            "
            asChild
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar consulta agora
            </a>
          </Button>
        </div>

        {/* Galeria */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Foto 1 */}
          <div className="relative w-full aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/Fotoantesedepois1.png"
              alt="Antes e depois do tratamento odontológico"
              fill
              className="object-cover"
            />
          </div>

          {/* Foto 2 */}
          <div className="relative w-full aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/Fotoantesedepois2.png"
              alt="Resultado de implante dentário"
              fill
              className="object-cover"
            />
          </div>

          {/* Foto 3 */}
          <div className="relative w-full aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/Fotosantesedepois3.png"
              alt="Sorriso após o tratamento"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
