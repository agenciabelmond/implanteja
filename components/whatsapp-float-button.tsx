"use client"

import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppFloatButton() {
  const handleWhatsAppClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=553131917600&text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%0A%0A",
      "_blank"
    )
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_35px_rgba(37,211,102,0.6)] active:scale-95"
      aria-label="Contato via WhatsApp"
    >
      {/* Ícone do WhatsApp */}
      <FaWhatsapp className="h-14 w-14" />

      {/* Animação de pulso */}
      <span className="absolute inline-flex h-20 w-20 animate-ping rounded-full bg-[#25D366] opacity-50"></span>
    </button>
  )
}
