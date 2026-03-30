import {
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent successfully! I'll get back to you soon.");
    }, 1200);
  }

  const inputStyle: React.CSSProperties = {
    backgroundColor: "oklch(0.17 0.013 220)",
    border: "1px solid oklch(0.25 0.015 220)",
    color: "oklch(0.96 0.006 220)",
    borderRadius: "0.75rem",
    padding: "12px 16px",
    fontSize: "14px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--page-bg)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal text-center mb-14">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-2"
            style={{ color: "var(--teal)" }}
          >
            Get In Touch
          </p>
          <h2
            className="font-poppins font-bold text-3xl md:text-4xl"
            style={{ color: "oklch(0.96 0.006 220)" }}
          >
            Contact Me
          </h2>
          <div
            className="w-12 h-1 rounded-full mx-auto mt-4"
            style={{ backgroundColor: "var(--teal)" }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div
            className="reveal-left rounded-2xl p-8"
            style={{
              backgroundColor: "oklch(0.19 0.015 220)",
              border: "1px solid oklch(0.25 0.015 220)",
            }}
          >
            <h3
              className="font-poppins font-semibold text-xl mb-6"
              style={{ color: "oklch(0.96 0.006 220)" }}
            >
              Send a Message
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
              data-ocid="contact.modal"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-medium mb-1.5"
                  style={{ color: "oklch(0.72 0.012 220)" }}
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  style={inputStyle}
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-medium mb-1.5"
                  style={{ color: "oklch(0.72 0.012 220)" }}
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  style={inputStyle}
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium mb-1.5"
                  style={{ color: "oklch(0.72 0.012 220)" }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical" }}
                  data-ocid="contact.textarea"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 disabled:opacity-60"
                style={{
                  backgroundColor: "var(--teal)",
                  color: "oklch(0.13 0.01 220)",
                }}
                data-ocid="contact.submit_button"
              >
                {submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info + Social */}
          <div className="reveal-right flex flex-col gap-6">
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "oklch(0.19 0.015 220)",
                border: "1px solid oklch(0.25 0.015 220)",
              }}
            >
              <h3
                className="font-poppins font-semibold text-xl mb-6"
                style={{ color: "oklch(0.96 0.006 220)" }}
              >
                Contact Information
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.67 0.13 186 / 0.12)" }}
                  >
                    <MapPin size={18} style={{ color: "var(--teal)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs"
                      style={{ color: "oklch(0.72 0.012 220)" }}
                    >
                      Location
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "oklch(0.96 0.006 220)" }}
                    >
                      Mumbai, India
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.67 0.13 186 / 0.12)" }}
                  >
                    <Mail size={18} style={{ color: "var(--teal)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs"
                      style={{ color: "oklch(0.72 0.012 220)" }}
                    >
                      Email
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "oklch(0.96 0.006 220)" }}
                    >
                      ravi.jaiswar@email.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.67 0.13 186 / 0.12)" }}
                  >
                    <Phone size={18} style={{ color: "var(--teal)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs"
                      style={{ color: "oklch(0.72 0.012 220)" }}
                    >
                      Phone
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "oklch(0.96 0.006 220)" }}
                    >
                      +91 98765 43210
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "oklch(0.19 0.015 220)",
                border: "1px solid oklch(0.25 0.015 220)",
              }}
            >
              <h3
                className="font-poppins font-semibold text-lg mb-5"
                style={{ color: "oklch(0.96 0.006 220)" }}
              >
                Connect With Me
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: "oklch(0.17 0.013 220)",
                    border: "1px solid oklch(0.25 0.015 220)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "oklch(0.67 0.13 186 / 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "oklch(0.25 0.015 220)";
                  }}
                  data-ocid="contact.link"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.52 0.15 148 / 0.15)" }}
                  >
                    <MessageCircle
                      size={20}
                      style={{ color: "oklch(0.72 0.15 148)" }}
                    />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "oklch(0.96 0.006 220)" }}
                    >
                      WhatsApp
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "oklch(0.72 0.012 220)" }}
                    >
                      Chat with me directly
                    </p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/ravikumarjaiswar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: "oklch(0.17 0.013 220)",
                    border: "1px solid oklch(0.25 0.015 220)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "oklch(0.67 0.13 186 / 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "oklch(0.25 0.015 220)";
                  }}
                  data-ocid="contact.link"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.65 0.2 0 / 0.15)" }}
                  >
                    <Instagram
                      size={20}
                      style={{ color: "oklch(0.75 0.2 0)" }}
                    />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "oklch(0.96 0.006 220)" }}
                    >
                      Instagram
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "oklch(0.72 0.012 220)" }}
                    >
                      @ravikumarjaiswar
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
