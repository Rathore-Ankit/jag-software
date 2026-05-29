import React, { useState, useEffect } from 'react';

function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Page load hote hi 1.5 seconds baad modal automatic popup hoga
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Web3Forms Free API execution block
    // CRITICAL: Replace YOUR_ACCESS_KEY_HERE with the key you received in email
    formData.append("access_key", "9d361be1-82a4-4f49-bb47-ebbe7f4b77e9"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
        // 3 second baad success message dikhakar khud modal band ho jayega
        setTimeout(() => {
          setIsOpen(false);
          setIsSubmitted(false);
        }, 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-all animate-fadeIn">
      
      {/* Modal Card Frame */}
      <div className="bg-techSurface border border-white/10 rounded-3xl w-full max-w-md p-8 relative shadow-2xl shadow-black/80">
        
        {/* Close Button Cross Indicator */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer text-xl w-8 h-8 flex items-center justify-center rounded-full bg-techDark/50 hover:bg-white/10 transition-colors"
        >
          ✕
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header Form Context */}
            <div className="text-center mb-6">
              <span className="text-xs font-bold text-techSky uppercase tracking-widest">Get In Touch</span>
              <h3 className="text-2xl font-black text-white mt-1">ENQUIRY MATRIX</h3>
              <p className="text-gray-400 text-xs mt-2">Submit your systems architecture requirements below.</p>
            </div>

            {/* Main Form Elements */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="John Doe"
                  className="w-full bg-techDark border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brandRed/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="john@company.com"
                  className="w-full bg-techDark border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brandRed/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Contact Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-techDark border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brandRed/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Message / Requirements</label>
                <textarea 
                  name="message" 
                  rows="3" 
                  required 
                  placeholder="Describe your logistics or custom database links scope..."
                  className="w-full bg-techDark border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brandRed/50 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Anti-Spam Honeypot Bot Protection Field (Invisible to human users) */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <button 
                type="submit"
                className="w-full bg-brandRed text-white py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase shadow-lg shadow-brandRed/20 hover:bg-brandRedGlow hover:scale-[1.02] transition-all cursor-pointer mt-2"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        ) : (
          /* Animated Success Response Block */
          <div className="text-center py-12 flex flex-col items-center justify-center animate-scaleUp">
            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500 flex items-center justify-center mb-4 text-green-500 text-3xl">
              ✓
            </div>
            <h3 className="text-xl font-black text-white">SUBMISSION SUCCESSFUL</h3>
            <p className="text-gray-400 text-xs mt-2 max-w-xs mx-auto">
              Bhai, details received successfully! Our data analysts will patch into your node via email shortly.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default EnquiryModal;