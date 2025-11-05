import { Button } from "@/components/ui/button"
import { MessageCircle, Star } from "lucide-react"
import Image from "next/image"

export function DoctorSection() {
  const whatsappLink =
    "https://wa.me/+553131917600?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/professional-female-dentist-portrait-white-coat-cl.jpg" alt="Dra. Rubiane Vitali" fill className="object-cover" />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Dra. Rubiane Vitali</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Especialista em Implantes Dentários, com mais de 15 anos de experiência em Implantes e Prótese Protocolo.
              Formada em Odontologia pela Unisul de Tubarão e com pós-graduação em Implantodontia, Endodontia,
              Harmonização Orofacial, entre outros aperfeiçoamentos em odontologia estética.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Lidera a clínica odontológica mais bem avaliada da cidade de Criciúma, com mais de 300 avaliações 5
              estrelas no Google. Somos referência em implantes dentários e em atendimento ao cliente.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              A clínica conta com uma equipe de profissionais altamente capacitados, tecnologia de ponta e oferecemos um
              padrão de atendimento que prioriza a excelência e a satisfação do paciente. Acreditamos que cada sorriso é
              único e nos dedicamos a proporcionar tratamentos personalizados para garantir o melhor resultado.
            </p>

            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-8 py-6 text-lg"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar minha Avaliação
              </a>
            </Button>
          </div>
        </div>

        <div className="bg-pink-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Nossa clínica é 5 estrelas no Google!</h3>
          <p className="text-lg text-gray-700 mb-6">
            Somos a clínica com mais avaliações positivas em Criciúma - SC. São mais de 300 avaliações com 5 estrelas.
          </p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
