import { AnimatePresence, motion } from "framer-motion";
import { Mail, Send, Phone, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xqaakvrz");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  if (state.succeeded) {
    return (
      <AnimatePresence>
        <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            style={{
              backgroundImage: `linear-gradient(
                145deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0.7)
              ), url('/api/placeholder/1920/1080')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
          </motion.div>

          {/* Content container */}
          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-8">
            <motion.div
              className="bg-black/30 backdrop-blur-md rounded-xl p-12 border border-white/10 shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.div
                className="flex justify-center mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              >
                <CheckCircle className="w-20 h-20 text-green-400" />
              </motion.div>

              <motion.div
                className="space-y-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h1 className="text-5xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  {t("success")}
                </h1>

                <p className="text-lg text-gray-300">
                  {t("contact_form.success")}
                </p>

                <motion.div
                  className="mt-8 pt-8 border-t border-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <p className="text-sm text-gray-400">
                    {t("contact_form.follow_up")}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black pt-1">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, filter: "blur(50px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), 
            url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-16">
          <motion.div
            className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h1
              className="text-4xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {t("contact_me")}
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {t("contact_info")}
                </h2>

                <div className="flex items-center space-x-4 text-white/80">
                  <Mail className="w-5 h-5" />
                  <span>andreyarroyo02@gmail.com</span>
                </div>

                <div className="flex items-center space-x-4 text-white/80">
                  <Phone className="w-5 h-5" />
                  <span>+506 8376-2583</span>
                </div>

                <div className="flex items-center space-x-4 text-white/80">
                  <MapPin className="w-5 h-5" />
                  <span>San José, Costa Rica</span>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.form
                className="space-y-4"
                onSubmit={handleSubmit}
                method="POST"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div>
                  <input
                    type="text"
                    name={"name"}
                    placeholder={t("contact_form.name")}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                    value={formData.name}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("contact_form.email")}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                    value={formData.email}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <textarea
                    placeholder={t("contact_form.message")}
                    rows={4}
                    name="message"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors resize-none"
                    value={formData.message}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-medium flex items-center justify-center space-x-2 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={state.submitting}
                >
                  <span>{t("contact_form.send")}</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
