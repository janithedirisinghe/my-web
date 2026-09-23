import React, { useState, useEffect } from 'react';

const contactDetails = [
  {
    label: 'Email',
    value: 'janithchathusanka@gmail.com',
    href: 'mailto:janithchathusanka@gmail.com',
    external: false,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    label: 'Phone',
    value: '+94 71 492 5962',
    href: 'tel:+94714925962',
    external: false,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    ),
  },
  {
    label: 'Location',
    value: 'Gampaha, Sri Lanka',
    href: 'https://www.google.com/maps/search/?api=1&query=Gampaha%2C+Sri+Lanka',
    external: true,
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
  },
];

const socialLinks = [
  {
    label: 'GitHub',
    handle: '@janithedirisinghe',
    href: 'https://github.com/janithedirisinghe',
    icon: (
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'Janith Chathusanka Edirisinghe',
    href: 'https://www.linkedin.com/in/janith-chathusanka-edirisinghe-591179220/',
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
];

function Contacts() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contacts');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const copyToClipboard = (event, label, value) => {
    // Let the mailto:/tel: link still work if the clipboard API is unavailable.
    if (!navigator.clipboard) return;

    event.preventDefault();
    navigator.clipboard.writeText(value).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <section id="contacts" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-orange-900/10 pointer-events-none"></div>

      <div className="container mx-auto relative z-10 px-4">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-5 bg-orange-500/10 text-orange-300 text-xs font-semibold tracking-widest uppercase rounded-full border border-orange-500/40">
            Get In Touch
          </span>
          <h2 className="text-5xl font-extrabold mb-5 text-red-700 drop-shadow-lg">Contact</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Open to software engineering roles and collaborations. Feel free to reach out
            directly — I&apos;ll get back to you as soon as I can.
          </p>
        </div>

        {/* Contact detail cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {contactDetails.map((detail, index) => (
            <a
              key={detail.label}
              href={detail.href}
              target={detail.external ? '_blank' : undefined}
              rel={detail.external ? 'noopener noreferrer' : undefined}
              onClick={
                detail.external
                  ? undefined
                  : (e) => copyToClipboard(e, detail.label, detail.value)
              }
              className={`group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border-2 border-gray-700 hover:border-orange-500/70 transition-all duration-500 hover:-translate-y-2 text-center overflow-hidden ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${200 + index * 120}ms` }}
            >
              {/* Icon tile */}
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-br from-orange-600/30 to-red-600/30 border border-orange-500/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {detail.icon}
                </svg>
              </div>

              <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
                {detail.label}
              </h3>
              <p className="text-base font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 break-words">
                {detail.value}
              </p>

              {!detail.external && (
                <p className="text-xs text-gray-500 mt-3 h-4">
                  {copied === detail.label ? (
                    <span className="text-green-400 font-semibold">Copied to clipboard</span>
                  ) : (
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to copy
                    </span>
                  )}
                </p>
              )}

              {/* Top accent line */}
              <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-500"></div>
            </a>
          ))}
        </div>

        {/* Social links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {socialLinks.map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 bg-gray-800/40 rounded-2xl p-6 border border-gray-700 hover:border-orange-500/70 hover:bg-gray-800/80 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${560 + index * 120}ms` }}
            >
              <svg
                className="w-8 h-8 flex-shrink-0 text-gray-400 group-hover:text-orange-400 transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {social.icon}
              </svg>
              <div className="text-left min-w-0">
                <p className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                  {social.label}
                </p>
                <p className="text-xs text-gray-500 truncate">{social.handle}</p>
              </div>
              <svg
                className="w-5 h-5 ml-auto flex-shrink-0 text-gray-600 group-hover:text-orange-400 transform group-hover:translate-x-1 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>

        {/* Primary CTA */}
        <div
          className={`mt-12 text-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <a
            href="mailto:janithchathusanka@gmail.com"
            className="inline-flex items-center gap-2 py-4 px-8 bg-gradient-to-r from-red-700 to-orange-600 hover:from-red-600 hover:to-orange-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Me an Email
          </a>
        </div>
      </div>

      {/* Floating accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-24 left-16 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/3 right-16 w-2 h-2 bg-red-500 rounded-full animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-orange-400 rounded-full animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>
    </section>
  );
}

export default Contacts;
