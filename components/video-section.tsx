import { Button } from "@/components/ui/button"

export function VideoSection() {
  const whatsappLink =
    "https://wa.me/+553131917600?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."

  return (
    <>
      {/* Seção Conheça nossa clínica */}
      {/* Seção Conheça nossa clínica */}
        {/* Seção Conheça nossa clínica */}
        <section className="pt-6 pb-20 bg-[#001F47]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* Texto */}
            <div className="space-y-6 lg:mt-30">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Conheça nossa clínica
                </h2>

                <p className="text-lg text-white leading-relaxed opacity-90">
                  Na Implante Já, entendemos que um sorriso saudável vai além da estética,
                  ele reflete bem-estar e confiança. Nossa missão é oferecer um
                  atendimento completo, integrando diversas especialidades em um único espaço.
                </p>

                <Button
                  size="lg"
                  className="bg-[#2CC84D] hover:bg-[#25b043] text-white font-semibold px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <img
                      src="/whatsapp (2).png"
                      alt="WhatsApp"
                      className="mr-2 h-9 w-9"
                    />
                    Agendar minha Avaliação
                  </a>
                </Button>
              </div>

            {/* Vídeo */}
            <div className="flex justify-center lg:justify-center mt-15"> 
              <video
                className="w-56 lg:w-72 rounded-lg shadow-xl"
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                <source src="videoimplanteja.mp4" type="video/mp4" />
                Seu navegador não suporta vídeo HTML5
              </video>
            </div>
            </div>
          </div>
        </section>
      {/* Seção Etapas / Benefícios */}
  


    </>
  )
} 
