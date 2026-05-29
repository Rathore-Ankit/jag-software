import React from "react";

const WhatsAppToggle = () => {
  const phoneNumber = "917666303554";
  const message = "Hello, I want to connect with you.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-4 py-3 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-green-600"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="h-8 w-8"
      />

      <div className="hidden sm:block">
        <p className="text-xs text-white">Chat on WhatsApp</p>
        <p className="text-sm font-semibold text-white">
          +91 76663 03554
        </p>
      </div>
    </a>
  );
};

export default WhatsAppToggle;