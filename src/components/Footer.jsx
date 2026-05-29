import React from 'react';

function Footer() {
  const footerLinks = [
    { name: 'Terms', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'Status', href: '#' },
    { name: 'Docs', href: '#' },
    { name: 'Contact', href: '#contact' }, // Yeh seedhe Contact section par le jayega
    { name: 'Manage cookies', href: '#' },
    { name: 'Do not share my personal information', href: '#' },
  ];

  return (
    <footer className="w-full bg-techDark border-t border-white/5 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500">
        
        {/* Left Side: Copyright & Logo */}
        <div className="flex items-center gap-3 order-2 md:order-1">
          <div className="w-5 h-5 bg-brandRed rounded flex items-center justify-center font-black text-[10px] text-white">
            J
          </div>
          <p className="font-medium">
            © 2026 JAG Software, Inc. <span className="hidden md:inline text-gray-700">|</span> <span className="md:hidden block mt-1 text-[10px] text-gray-600">Footer navigation</span>
          </p>
        </div>

        {/* Right Side: GitHub Style Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 order-1 md:order-2">
          {/* Desktop/Tablet par dikhne wala label */}
          <span className="hidden md:inline text-gray-600 font-semibold uppercase text-[10px] tracking-wider mr-2">
            Footer navigation
          </span>
          
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-brandRed hover:underline transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}

export default Footer;