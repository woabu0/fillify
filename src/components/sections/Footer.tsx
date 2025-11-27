import { Logo } from "../icons/logo";
import Link from "next/link";
import { FOOTER_LINKS, COMPANY_NAME, COMPANY_DESCRIPTION } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap sm:justify-evenly lg:justify-between gap-8 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          {/* Logo and Description */}
          <div className="w-full sm:w-auto min-w-0 sm:min-w-[200px]">
            <Link href="#home" className="flex items-center gap-2 text-white text-lg sm:text-xl font-semibold mb-3 sm:mb-4 hover:text-cyan-400 transition-colors">
              <Logo />
              {COMPANY_NAME}
            </Link>
            <p className="text-sm sm:text-base text-gray-400 max-w-sm">
              {COMPANY_DESCRIPTION}
            </p>
          </div>
          
          {/* Product Links */}
          <div className="w-full sm:w-auto sm:min-w-[120px]">
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div className="w-full sm:w-auto sm:min-w-[120px]">
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support Links */}
          <div className="w-full sm:w-auto sm:min-w-[120px]">
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-xs sm:text-sm">Copyright &copy; {currentYear} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

