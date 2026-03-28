import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for sending email would go here
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  const contactItems = [
    {
      icon: <Mail className="text-teal-400" />,
      label: "Email",
      value: "kumarkharare@gmail.com",
      href: "mailto:kumarkharare@gmail.com",
    },
    {
      icon: <Linkedin className="text-blue-500" />,
      label: "LinkedIn",
      value: "linkedin.com/in/kumark3",
      href: "https://www.linkedin.com/in/kumark3/",
    },
    {
      icon: <Github className="text-gray-300" />,
      label: "GitHub",
      value: "github.com/kumark3",
      href: "https://github.com/Kumar-3",
    },
    {
      icon: <Phone className="text-purple-400" />,
      label: "Phone",
      value: "+91 9420820223",
      href: "tel:+919420820223",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-2">
              Connect
            </h4>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
              Let's Build Something <br />
              <span className="text-teal-400">Revolutionary</span>.
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
              Whether you need a full-scale health tech platform or specialized
              IoT hardware integration, I am ready to discuss your next project.
            </p>

            <div className="space-y-6">
              {contactItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-center gap-5 group p-4 glass-card rounded-2xl hover:border-teal-500/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[2.5rem] border-teal-500/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-teal-400 transition-colors"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-teal-400 transition-colors"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-teal-400 transition-colors resize-none"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-3 glow-teal"
              >
                {isSent ? "Message Sent!" : "Send Message"} <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
