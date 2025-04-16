"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-amber-500 flex items-center justify-center">
               {/* <Image
                  src="/logo.png"
                  alt="BeeProductive Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />  */}
                🐝
              </div>
              <span className="text-xl font-bold text-gray-900">Bee Productive</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Transforming how you work with our innovative productivity platform that rewards your accomplishments.
            </p>
            {/* Socials */}
            {/* <div className="flex gap-4">
              {["twitter", "facebook", "instagram", "linkedin"].map((social, i) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-gray-900"
                  whileHover={{ y: -3, color: "#F59E0B" }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div> */}
          </motion.div>

          {[
            {
              title: "Product",
              links: ["Features", "How It Works", "Pricing", "FAQ", "Support"],
            },
            {
              title: "Company",
              links: ["About Us", "Blog", "Careers", "Press", "Partners"],
            },
            {
              title: "Legal",
              links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Data Processing"],
            },
          ].map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + sectionIndex * 0.1, duration: 0.5 }}
            >
              <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 + sectionIndex * 0.1, duration: 0.3 }}
                  >
                    <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm relative group">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} BeeProductive. All rights reserved.</p>
          {/* <div className="mt-4 md:mt-0">
            <select className="text-sm bg-gray-100 border-0 rounded-md py-1 px-3 text-gray-600 cursor-pointer hover:bg-gray-200 transition-colors">
              <option value="en">English (US)</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div> */}
        </motion.div>
      </div>
    </footer>
  )
}
