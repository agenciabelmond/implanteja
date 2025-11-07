import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=553131917600&text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%0A%0A"

  return (
    <section id="quem-somos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold text-[#004B8C] uppercase tracking-wide">
              
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">Quem somos?</h2>

            <div className="h-1 w-20 bg-[#2DC8D2]"></div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Há 4 anos no mercado, a Implante Já nasceu com a proposta de oferecer um atendimento direto pelos donos, garantindo proximidade, 
              confiança e total dedicação em cada etapa do cuidado. Como sede única, priorizamos a excelência em nossos serviços, mantendo um padrão 
              elevado de qualidade e atenção personalizada.
            </p>

          <Button
              size="lg"
              className="bg-[#2CC84D] hover:bg-[#25b043] text-white font-semibold px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                {/* Logo do WhatsApp */}
                <img
                  src="whatsapp (2).png" // coloque o caminho correto da imagem
                  alt="WhatsApp"
                  className="mr-2 h-9 w-9"
                />
                Agendar minha Avaliação
              </a>
            </Button>

          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="recepcaoimplante.jpg"
              alt="Paciente satisfeito com tratamento"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
