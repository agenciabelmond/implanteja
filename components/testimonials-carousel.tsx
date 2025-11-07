"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, DollarSign, CreditCard, Building } from "lucide-react"
import Image from "next/image"

export function TestimonialsCarousel() {
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=553131917600&text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%0A%0A"

  return (
    <section id="pagamento" className="py-20 bg-gradient-to-b from-[#F6F9FF] from-5% via-[#0A295B] via-25% to-[#001F47] to-100%">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="bg-[#001F47] rounded-[32px] shadow-2xl p-12 flex flex-col lg:flex-row items-center justify-between gap-14 border border-[#00346F]">

          {/* Lado esquerdo */}
          <div className="flex flex-col lg:items-start items-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-8 text-center lg:text-left">
              Parcelamento Fácil
            </h2>

            {/* Bloco de bandeiras */}
            <div className="mb-8 bg-transparent">
                    <Image
              src="/pag.png"
              alt="Formas de pagamento"
              width={380}
              height={70}
              className="object-contain"
            />
            </div>

            {/* Botão WhatsApp */}
            <Button
              size="lg"
              className="bg-[#2DC653] hover:bg-[#25a644] text-white font-bold px-12 py-7 text-xl rounded-full shadow-xl hover:scale-105 transition-all"
              asChild
            >
            <a href="https://api.whatsapp.com/send?phone=553131917600&text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%0A%0A" target="_blank" className="flex items-center">
              TRATAMENTO NO BOLETO
              <Image
                src="whatsapp (2).png"
                width={32}
                height={32}
                alt="WhatsApp"
                className="ml-4"
              />
            </a>
            </Button>
          </div>

          {/* Bullet points */}
          <div className="space-y-8 text-white text-2xl font-semibold leading-snug">
            <div className="flex items-center gap-4">
              <DollarSign className="w-10 h-10 text-white" />
              Condição especial pagamento à vista
            </div>
            <div className="flex items-center gap-4">
              <CreditCard className="w-10 h-10 text-white" />
              Entrada facilitadas + Parcelas
            </div>
            <div className="flex items-center gap-4">
              <Building className="w-10 h-10 text-white" />
              Sem burocracia
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
