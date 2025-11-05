import React from 'react';
import { motion } from 'framer-motion';
import { Github, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl px-4 py-20 text-center"
    >
      <p className="text-cyan-400 mb-3">02. What's Next?</p>
      <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Get In Touch</h3>
      <p className="text-gray-300 mb-8">
        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <div className="mb-10">
        <a
          href="mailto:masmarko117@gmail.com"
          className="inline-block rounded-md border border-cyan-400 px-5 py-2 text-cyan-300 hover:bg-cyan-500/10 transition"
        >
          Say Hello
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex items-center justify-center gap-5"
      >
        <a href="https://github.com/skydashnet" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition">
          <Instagram className="w-5 h-5" />
        </a>
      </motion.div>
    </motion.section>
  );
}
