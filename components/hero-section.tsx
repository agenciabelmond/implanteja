import { Button } from "@/components/ui/button"
import {
  Star,
  CreditCard,
  Calendar,
  ShieldCheck,
  Smile,
  MapPin,
  Users,
  BadgeCheck,
  Heart,
} from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=553131917600&text=Olá! Vim pelo site e gostaria de agendar minha avaliação"

  return (
 <section
  id="inicio"
  className="relative overflow-hidden bg-[#F4F7FA] pt-30 lg:pt-24 pb-6"
>
  <div className="container mx-auto px-4">

    <div className="grid lg:grid-cols-2 gap-8 items-center">

      {/* ESQUERDA */}
      <div>

        {/* GOOGLE */}
        <div className="inline-flex items-center gap-2 bg-[#0A2463] text-white px-3 py-2 rounded-full shadow-md mb-5 text-xs">
          <span className="text-yellow-400">
            ⭐⭐⭐⭐⭐
          </span>

          <span className="font-semibold">
            4,7 Google
          </span>

          <span className="opacity-80">
            +382 avaliações
          </span>
        </div>

        {/* HEADLINE */}
       <h1 className="font-black leading-[0.95] tracking-tight">
  <span className="block text-[#0A2463] text-3xl lg:text-6xl">
    IMPLANTES DENTÁRIOS 
  </span>

  <span className="block text-3xl lg:text-6xl bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
    PARCELAMENTO FACILITADO
  </span>
</h1>

        {/* SUBHEADLINE */}
       <div className="mt-4">
  <h2 className="text-lg lg:text-3xl font-bold text-[#0A2463]">
    CONQUISTE SEU NOVO SORRISO
  </h2>

  <h2 className="text-lg lg:text-3xl font-bold text-[#0A2463]">
    COM FACILIDADE
  </h2>

          <p className="mt-2 text-sm lg:text-lg text-slate-700">
            Faça seu tratamento sem complicações.
          </p>
        </div>

        {/* BENEFÍCIOS COMPACTOS */}
        <div className="grid grid-cols-2 gap-3 mt-6">

          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-cyan-500" />
            <span className="text-xs font-medium text-[#0A2463]">
              Parcelamento
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-cyan-500" />
            <span className="text-xs font-medium text-[#0A2463]">
              Sem entrada*
            </span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-500" />
            <span className="text-xs font-medium text-[#0A2463]">
              Sem burocracia
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Smile className="w-4 h-4 text-cyan-500" />
            <span className="text-xs font-medium text-[#0A2463]">
              Avaliação grátis
            </span>
          </div>

        </div>

        {/* OFERTA + CTA */}
        <div className="mt-6 flex flex-col gap-3">

          <div className="bg-[#0A2463] text-white rounded-2xl p-4 text-center">

            <div className="text-xs uppercase opacity-80">
              Parcelas a partir de
            </div>

            <div className="flex items-end justify-center gap-1 mt-1">
              <span>R$</span>

              <span className="text-4xl font-bold">
                499
              </span>

              <span className="mb-1">
                /mês
              </span>
            </div>
            

          </div>


          <Button
            asChild
            className="w-full rounded-2xl bg-[#12C759] hover:bg-[#0FB24F] text-white h-auto py-4"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-center">
                <div className="font-bold">
                  Agendar Avaliação Gratuita
                </div>
              </div>
            </a>
          </Button>

        </div>

      </div>

      {/* DIREITA */}
      <div>

        <div className="relative h-[320px] lg:h-[520px] overflow-hidden rounded-[28px] shadow-xl">

          <Image
            src="/fachadaimplanteja.jpg"
            alt="Implante Já"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute bottom-3 left-3 right-3 bg-[#0A2463] text-white rounded-2xl p-3">

            <div className="flex gap-3">

              <MapPin className="w-5 h-5 text-cyan-300 shrink-0" />

              <div>
                <h3 className="font-bold text-sm">
                  Localizada em Avenida do Contorno, 4117 Bairro Santa Efigênia - BH
                </h3>

                <p className="text-xs text-white/80">
                  Fácil acesso e estacionamento.
                </p>
              </div>

            </div>


          </div>
                    

        </div>

      </div>

    </div>


    {/* SOMENTE DESKTOP */}
    <div className="hidden lg:block bg-white rounded-[32px] shadow-lg mt-8 p-6">

      <div className="grid md:grid-cols-4 gap-6">

        {/* seus diferenciais aqui */}

      </div>

    </div>

  </div>
</section>
  )
}

