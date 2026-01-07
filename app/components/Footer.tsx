"use client";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-neutral-400">
              © {currentYear} Yurii Khyzhniak. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Cookies
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
