import React from 'react';

function Footer() {
  const footerLinks = [
    { name: 'Privacy Notice', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Accessibility Declaration', href: '#' },
    { name: 'Disclaimer', href: '#' },
    { name: 'Security Policy', href: '#' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Customize cookies', href: '#' },
  ];

  // सोशल आइकन्स की लिस्ट और उनके ब्रांड स्पेसिफिक होवर कलर्स
  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      hoverColor: 'hover:text-[#1877F2] hover:scale-110',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: '#',
      hoverColor: 'hover:text-[#FF0000] hover:scale-110',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      href: '#',
      hoverColor: 'hover:text-[#white] hover:opacity-100 hover:scale-110',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      hoverColor: 'hover:text-[#E1306C] hover:scale-110',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: '#',
      hoverColor: 'hover:text-[#0077B5] hover:scale-110',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      href: '#',
      hoverColor: 'hover:text-[#25D366] hover:scale-110',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.66.986 3.288 1.48 4.945 1.481 5.438 0 9.86-4.426 9.863-9.864.001-2.634-1.022-5.11-2.881-6.972-1.858-1.863-4.33-2.889-6.966-2.89-5.442 0-9.866 4.425-9.869 9.864-.001 1.742.453 3.442 1.316 4.944L2.01 19.863l4.637-1.216z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 py-6 mt-20 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* LEFT SIDE: Brand Identity / Logo Structure Like TCS */}
        <div className="flex items-center gap-3 w-full lg:w-auto justify-center lg:justify-start">
          <img 
            src="/Jaglogo.png" 
            alt="JAG Logo" 
            className="h-7 w-auto object-contain opacity-90 brightness-110"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="h-4 w-px bg-white/10 hidden lg:block"></div>
          
        </div>

        {/* CENTER SIDE: Copyright & Compact Navigation Matrix */}
        <div className="flex flex-col items-center lg:items-start gap-1.5 text-center lg:text-left flex-grow lg:pl-12">
          <p className="text-[11px] text-gray-400 font-medium tracking-wide">
            © 2026 JAG Software Solutions Limited
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-4 gap-y-1 text-[11px] text-gray-500">
            {footerLinks.map((link, index) => (
              <React.Fragment key={index}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
                {index < footerLinks.length - 1 && (
                  <span className="text-gray-700 text-[9px] select-none">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Premium Social Interaction Array with Brand Specific Color Hover */}
        <div className="flex items-center justify-center gap-5 text-gray-500 w-full lg:w-auto border-t border-white/5 pt-4 lg:pt-0 lg:border-t-0">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.name}
              className={`transition-all duration-300 transform ${social.hoverColor}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}

export default Footer;