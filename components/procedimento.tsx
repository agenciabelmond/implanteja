import { Button } from "@/components/ui/button"

export function LinhaTempo() {
  const whatsappLink =
    "https://wa.me/+553131917600?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."

  return (
    <>
        <section className="py-10 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">

            <h2 className="text-3xl lg:text-4xl font-bold text-[#001F47] mb-4">
              COMO FUNCIONA O TRATAMENTO
            </h2>

            <p className="text-lg text-gray-600 mb-16">
              Um processo simples e transparente do início ao fim
            </p>

            {/* Linha do tempo */}
            <div className="relative">
              {/* Linha */}
              <div className="hidden lg:block absolute top-7 left-0 w-full h-1 bg-[#001F47]/20"></div>

              {/* Passos */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-10">

                <div className="space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#001F47] text-white flex items-center justify-center text-lg font-bold shadow-lg">
                    01
                  </div>
                  <h3 className="font-bold text-[#001F47] text-lg tracking-wide">CONSULTA GRATUITA</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Avaliação completa para entender suas necessidades e construir confiança.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#001F47] text-white flex items-center justify-center text-lg font-bold shadow-lg">
                    02
                  </div>
                  <h3 className="font-bold text-[#001F47] text-lg tracking-wide">PLANO PERSONALIZADO</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Planejamento digital com um tratamento exclusivo para seu caso.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#001F47] text-white flex items-center justify-center text-lg font-bold shadow-lg">
                    03
                  </div>
                  <h3 className="font-bold text-[#001F47] text-lg tracking-wide">TECNOLOGIA DE PONTA</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Procedimentos guiados por computador para máxima precisão e conforto.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#001F47] text-white flex items-center justify-center text-lg font-bold shadow-lg">
                    04
                  </div>
                  <h3 className="font-bold text-[#001F47] text-lg tracking-wide">GARANTIA</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Acompanhamento contínuo para garantir resultados duradouros.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>
    </>
  )
} 
