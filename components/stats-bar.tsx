import { MapPin, CreditCard } from "lucide-react"

const statsData = [
  {
    icon: CreditCard,
    title: "Parcele Fácil",
    text: "Parcelamos seu implante dentário no Boleto ou Cartão de Crédito."
  },
  {
    icon: MapPin,
    title: "Perto de Você",
    text: "Estamos na Avenida do Contorno, 4117 Bairro Santa Efigênia, Belo Horizonte - MG"
  }
]

export function StatsBar() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {statsData.map((item, index) => (
          <div
            key={index}
            className="relative bg-[#0A2463] text-white px-6 py-7 rounded-2xl shadow-xl
            transition-all duration-300 transform hover:-translate-y-1
            hover:shadow-[0_0_22px_rgba(10,36,99,0.55)]
            border border-white/10 backdrop-blur-md"
          >
            <div className="flex items-center gap-5">
              <item.icon className="h-10 w-10 text-white" />
              <div>
                <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                <p className="text-white/90 text-sm leading-snug mt-1">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
