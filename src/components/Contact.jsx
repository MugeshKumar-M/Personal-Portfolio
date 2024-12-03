import React, { useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import MotionUp from './MotionUp';
import { CONTACT } from "../constants";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID);  // Logs 'development' if it's in dev mode

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, // Use the service ID from EmailJS
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, // Use the template ID from EmailJS
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          subject: form.subject
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY // Your EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="relative w-full mx-auto p-10 overflow-hidden bg-[#120712] bottom-1">
      <h1 className="absolute top-44 text-[8rem] md:text-[15rem] font-bold text-gray-700 opacity-15 z-0 rotate-90 sm:rotate-0">Contact Me</h1>
      <div className="gap-3 flex justify-center font-extrabold text-4xl sm:text-7xl">
        <h2 className="text-neutral-100">Let's</h2>
        <h2 className="text-customText">Talk</h2>
      </div>
      <div className="container flex py-16 flex-col justify-center mx-auto max-w-7xl sm:flex-row">
        <MotionUp className="flex flex-col gap-10 rounded-lg sm:flex-row" delay={0}>
          {/* Contact Info */}
          <div className="flex-1 bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 h-auto max-h-screen sm:w-1/2">
            <h2 className="text-3xl font-bold mb-4 bg-customText bg-clip-text text-transparent">Get In Touch</h2>
            <p className="text-white/80 leading-relaxed mb-5 font-semibold">
              Feel free to reach out! I'm always open to exploring new projects, fresh ideas, and opportunities to bring your vision to life.
            </p>
            <div className="space-y-1">
              <div className="font-bold text-xl bg-customText bg-clip-text text-transparent">Phone</div>
              <div className="font-semibold text-white/80">{CONTACT.phoneno}</div>
              <div className="font-bold text-xl bg-customText bg-clip-text text-transparent">Email</div>
              <div className="font-semibold text-white/80">{CONTACT.email}</div>
              <div className="font-bold text-xl bg-customText bg-clip-text text-transparent">Location</div>
              <div className="font-semibold text-white/80">{CONTACT.location}</div>
            </div>
            <div className="flex gap-4 mt-6">
              <a href={CONTACT.linkedin} className="w-10 h-10 text-white/80 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300">
                <FaLinkedinIn size={30} className="hover:text-[#0077B5]" />
              </a>
              <a href={CONTACT.github} className="w-10 h-10 text-white/80 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300">
                <FaGithub size={30} className="hover:text-black" />
              </a>
              <a href={CONTACT.instagram} className="w-10 h-10 text-white/80 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300">
                <FaInstagram size={30} className="hover:text-red-400" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 h-auto max-h-screen sm:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-4 rounded-lg bg-transparent border border-customText/10 text-white placeholder-gray-400 focus:outline-none focus:border-customText focus:bg-customText/5 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-4 rounded-lg bg-transparent border border-customText/10 text-white placeholder-gray-400 focus:outline-none focus:border-customText focus:bg-customText/5 transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Your Subject"
                  required
                  className="w-full p-4 rounded-lg bg-transparent border border-customText/10 text-white placeholder-gray-400 focus:outline-none focus:border-customText focus:bg-customText/5 transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="w-full p-4 rounded-lg bg-transparent border border-customText/10 text-white placeholder-gray-400 focus:outline-none focus:border-customText focus:bg-customText/5 transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-customTextbt3 to-customTextbt1 text-white font-semibold rounded-lg focus:outline-none hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                disabled={loading}
              >
                <h1 className="relative z-10">{loading ? 'Sending...' : 'SEND MESSAGE'}</h1>
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </form>
          </div>
        </MotionUp>
      </div>
      <div className="font-semibold text-white/80 text-center">Made with {'\u2764\uFE0F'} by Mugesh Kumar</div>
    </section>
  );
};

export default Contact;
