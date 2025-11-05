"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Pagamento", href: "#pagamento" },
    { label: "Quem somos", href: "#quem-somos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Localização", href: "#localizacao" },
  ]

  const whatsappLink =
    "https://wa.me/+553131917600?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Image
              src="logoimplanteja.png"
              alt="Implante Já Logo"
              width={200}
              height={70}
              className="h-22 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#004B8C] font-medium hover:text-[#2DC8D2] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              className="bg-[#2CC84D] hover:bg-[#25b043] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Agendar Consulta
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-[#004B8C]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[#004B8C] font-medium hover:text-[#2DC8D2] transition-colors duration-200 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-[#2CC84D] hover:bg-[#25b043] text-white font-semibold rounded-full" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Agendar Consulta
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
