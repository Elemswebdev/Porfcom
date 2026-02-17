import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    {
      label: "Livestream",
      href: "https://web.facebook.com/profile.php?id=61572902276161",
    },
    { label: "The Church", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold">Porfcom</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowered to liberate, restore, and reposition lives in their lost
              freedoms. Recovering of destinies, raising righteous Kings, men
              and women into their rightful places
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li> Elikpokwuodu, Last Bus Stop,</li>
              <li> Before Hydropet Fuel Station,</li>
              <li> Rukpokwu, Rivers State.</li>
              <li className="mt-4">
                <a
                  href="tel:+2348146328180"
                  className="hover:text-primary transition-colors"
                >
                  +234 (0) 814-632-8180
                </a>
              </li>
              <li>
                <a
                  href="tel:+2347044936670"
                  className="hover:text-primary transition-colors"
                >
                  +234 (0) 704-493-6670
                </a>
              </li>
              <li>
                <a
                  href="mailto:porfcommedia@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  porfcommedia@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Follow Us</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://web.facebook.com/profile.php?id=61572902276161"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/porfcomtv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@porfcomtv1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Stay connected with our community
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Porfcom. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
