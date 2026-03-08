"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  Send,
  MessageCircle,
  CheckCircle,
  Loader2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Sidahmedmhd08@gmail.com",
    href: "mailto:Sidahmedmhd08@gmail.com",
  },
  {
    icon: Mail,
    label: "School Email",
    value: "me.doueiry@esp.mr",
    href: "mailto:me.doueiry@esp.mr",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+222 41824343",
    href: "tel:+22241824343",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+222 41824343",
    href: "https://wa.me/22241824343",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nouakchott, Mauritania",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/7assen-coder",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/mohamed-douiery-a48496373",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/1ApHGsPsou/",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/22241824343",
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/Sidahmedmhd08@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-4" />
          <p className="text-gray-500 mb-12 max-w-xl">
            Have a project in mind or want to collaborate? Feel free to reach
            out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border hover:border-primary/30 transition-all group"
                >
                  <div
                    className={`p-3 rounded-lg transition-colors ${
                      label === "WhatsApp"
                        ? "bg-green-500/10 text-green-400 group-hover:bg-green-500/20"
                        : "bg-primary/10 text-primary-light group-hover:bg-primary/20"
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="text-gray-300 text-sm font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="pt-4">
              <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                Social Profiles
              </h3>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-surface border border-border text-gray-400 hover:text-white transition-all ${
                      label === "WhatsApp"
                        ? "hover:border-green-500/30 hover:text-green-400"
                        : "hover:border-primary/30"
                    }`}
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 p-6 rounded-2xl bg-surface border border-border"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_subject"
              value="New message from Portfolio"
            />
            <input
              type="hidden"
              name="_next"
              value="https://portfolio-drhx.vercel.app/#contact"
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider mb-1.5 block">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-surface-light border border-border text-gray-300 placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider mb-1.5 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-surface-light border border-border text-gray-300 placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-wider mb-1.5 block">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                placeholder="What's this about?"
                className="w-full px-4 py-3 rounded-lg bg-surface-light border border-border text-gray-300 placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-wider mb-1.5 block">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-lg bg-surface-light border border-border text-gray-300 placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 glow-hover ${
                status === "sent"
                  ? "bg-green-600 text-white"
                  : status === "error"
                    ? "bg-red-600 text-white"
                    : "bg-primary hover:bg-primary-dark text-white"
              }`}
            >
              {status === "sending" && (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              )}
              {status === "sent" && (
                <>
                  <CheckCircle size={16} />
                  Message Sent!
                </>
              )}
              {status === "error" && <>Failed to send. Try again.</>}
              {status === "idle" && (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
