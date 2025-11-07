import { MapPin, Phone, Clock } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ContactSection() {
    const whatsappLink =
    "https://api.whatsapp.com/send?phone=553131917600&text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%0A%0A"

  return (
    <section id="localizacao" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#004B8C] mb-4">Localização e Horário</h2>
          <p className="text-gray-600 text-lg">Estamos localizados em um ponto de fácil acesso em Belo Horizonte/MG</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Coluna da Imagem */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="fachada2.png"
                alt="Fachada da Clínica Implante Já"
                fill
                className="object-cover"
              />
            </div>

            {/* Coluna das Informações */}
            <div className="space-y-8">
              {/* Endereço */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#0B3D91] hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#2DC8D2]/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-[#2DC8D2]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-[#004B8C] mb-3">Endereço</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Avenida do Contorno, 4117 Bairro Santa Efigênia
                      <br />
                      Belo Horizonte/MG
                      <br />
                      CEP 30110-090
                    </p>
                  </div>
                </div>
              </div>

              {/* Horário de Funcionamento */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#0B3D91] hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#2DC8D2]/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-[#2DC8D2]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-[#004B8C] mb-3">Horário de Funcionamento</h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span className="font-medium">Segunda a Sexta:</span>
                        <span>8:00 às 17:30</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Sábados:</span>
                        <span>8:00 às 11:30</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contato */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#0B3D91] hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#2DC8D2]/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-[#2DC8D2]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-[#004B8C] mb-3">Contato</h3>
                    <a
                      href="https://api.whatsapp.com/send?phone=553131917600&text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%0A%0A"
                      className="text-gray-700 hover:text-[#2DC8D2] transition-colors text-lg"
                    >
                      (31) 3191-7600
                    </a>
                  </div>
                </div>
              </div>

              {/* Botão de Agendar */}
              <Button
                asChild
                size="lg"
                className="w-full bg-[#2CC84D] hover:bg-[#2CC84D]/90 text-white font-semibold text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <a href="https://api.whatsapp.com/send?phone=553131917600&text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%0A%0A">Agendar Consulta</a>
              </Button>
            </div>
          </div>
        </div>
        <br></br><br></br>
  {/* Seção Fotos da Clínica – Compacta */}
        <section className="pt-4 pb-10 bg-white">
          <div className="max-w-6xl mx-auto px-6">

            {/* Centralização do grid */}
            <div className="grid md:grid-cols-3 gap-6 justify-items-center">

              {/* Foto 1 */}
              <div className="text-center">
                <img
                  src="recepcao2.png"
                  alt="Recepção Implante Já"
                  className="rounded-xl shadow-md object-cover w-80 h-52" // AUMENTO
                />
                <p className="text-[#001F47] text-sm font-medium mt-2">
                  Recepção
                </p>
              </div>

              {/* Foto 2 */}
              <div className="text-center">
                <img
                  src="consultorioimplanteja.jpg"
                  alt="Consultório Implante Já"
                  className="rounded-xl shadow-md object-cover w-80 h-52"
                />
                <p className="text-[#001F47] text-sm font-medium mt-2">
                  Consultório
                </p>
              </div>

              {/* Foto 3 */}
              <div className="text-center">
                <img
                  src="fachadaimplanteja.jpg"
                  alt="Fachada Implante Já"
                  className="rounded-xl shadow-md object-cover w-80 h-52"
                />
                <p className="text-[#001F47] text-sm font-medium mt-2">
                  Fachada
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-gray-500">
          <p>© 2025 Implante Já - Todos os direitos reservados</p>
        </div>
      </div>
    </section>
  )
}
