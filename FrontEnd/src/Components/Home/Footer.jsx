import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
} from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  // Animation variants for columns
  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <motion.footer
      className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-150 py-16 text-gray-600"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-500/10 flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 text-white text-left">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {t("footer.stayUpdated", "Stay Updated")}
            </h3>
            <p className="text-blue-100 text-sm md:text-base font-medium">
              {t("footer.newsletterText", "Subscribe to our newsletter for the latest healthcare insights, features, and wellness tips.")}
            </p>
          </div>
          <div className="w-full lg:w-auto">
            {subscribed ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/30 text-white font-bold text-center text-sm"
              >
                🎉 {t("footer.subscribedMessage", "Thank you for subscribing!")}
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex w-full lg:w-auto max-w-md items-center bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("footer.emailPlaceholder", "Enter your email address")}
                  className="w-full lg:w-64 bg-transparent border-0 text-white placeholder-blue-200 focus:ring-0 focus:outline-none px-4 text-sm font-medium"
                  required
                  aria-label="Email Address"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-700 hover:bg-blue-50 active:scale-95 transition-all px-6 py-3 rounded-xl font-bold text-sm shadow-md whitespace-nowrap cursor-pointer flex items-center gap-2"
                >
                  {t("footer.subscribe", "Subscribe")}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          
          {/* Brand Column */}
          <motion.div
            variants={columnVariants}
            custom={0}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <Link to="/" className="flex items-center space-x-2">
              <img src="/img/logo.png" alt="HealthConnect" className="h-10 w-auto" />
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                HealthConnect
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t("footer.description", "HealthConnect is a modern healthcare platform that helps patients easily find trusted doctors and book appointments online.")}
            </p>
            {/* Social Media Circular Links */}
            <div className="flex space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm border border-blue-100/50 hover:scale-110 active:scale-95"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm border border-blue-100/50 hover:scale-110 active:scale-95"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-blue-50 text-pink-600 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-sm border border-blue-100/50 hover:scale-110 active:scale-95"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-full bg-blue-50 text-gray-700 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-sm border border-blue-100/50 hover:scale-110 active:scale-95"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            variants={columnVariants}
            custom={1}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-800">
              {t("footer.quickLinks", "Quick Links")}
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link to="/" className="text-gray-500 hover:text-blue-600 transition-colors duration-200 block">
                  {t("footer.home", "Home")}
                </Link>
              </li>
              <li>
                <Link to="/recherche" className="text-gray-500 hover:text-blue-600 transition-colors duration-200 block">
                  {t("footer.findDoctors", "Find Doctors")}
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="text-gray-500 hover:text-blue-600 transition-colors duration-200 block">
                  {t("footer.aboutUs", "About Us")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-500 hover:text-blue-600 transition-colors duration-200 block">
                  {t("footer.contact", "Contact")}
                </Link>
              </li>
              <li>
                <Link to="/recherche" className="text-gray-500 hover:text-blue-600 transition-colors duration-200 block">
                  {t("footer.bookAppointment", "Book Appointment")}
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div
            variants={columnVariants}
            custom={2}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-800">
              {t("footer.servicesTitle", "Services")}
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <span className="text-gray-500 hover:text-blue-600 transition-colors duration-200 block cursor-default">
                  {t("footer.generalConsultation", "General Consultation")}
                </span>
              </li>
              <li>
                <span className="text-gray-500 hover:text-blue-600 transition-colors duration-200 block cursor-default">
                  {t("footer.specialistConsultation", "Specialist Consultation")}
                </span>
              </li>
              <li>
                <span className="text-gray-500 hover:text-blue-600 transition-colors duration-200 block cursor-default">
                  {t("footer.onlineBooking", "Online Booking")}
                </span>
              </li>
              <li>
                <span className="text-gray-500 hover:text-blue-600 transition-colors duration-200 block cursor-default">
                  {t("footer.medicalFollowup", "Medical Follow-up")}
                </span>
              </li>
              <li>
                <span className="text-gray-500 hover:text-blue-600 transition-colors duration-200 block cursor-default">
                  {t("footer.healthcareSupport", "Healthcare Support")}
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            variants={columnVariants}
            custom={3}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-800">
              {t("footer.contactTitle", "Contact Information")}
            </h4>
            <ul className="space-y-3.5 text-sm font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-gray-500">Casablanca, Morocco</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                <a href="mailto:support@healthconnect.com" className="text-gray-500 hover:text-blue-600 transition-colors">
                  support@healthconnect.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-gray-500">+212 522 00 00 00</span>
              </li>
              <li className="flex items-center gap-2.5 border-t border-gray-100 pt-2.5 mt-2">
                <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-gray-400 font-normal">Mon – Sat: 8:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider Line */}
        <hr className="my-10 border-gray-150" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-gray-400">
          <div className="space-y-1 text-center md:text-left">
            <p>© {currentYear} HealthConnect. All rights reserved.</p>
            <p className="font-normal text-[11px] text-gray-400/80">
              {t("footer.academicNote", "Designed for educational purposes as a Final Year Project (PFE).")}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <Link to="/privacy" className="hover:text-blue-600 transition-colors">
              {t("footer.privacyPolicy", "Privacy Policy")}
            </Link>
            <Link to="/terms" className="hover:text-blue-600 transition-colors">
              {t("footer.termsOfService", "Terms of Service")}
            </Link>
            <Link to="/cookies" className="hover:text-blue-600 transition-colors">
              {t("footer.cookiePolicy", "Cookie Policy")}
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
