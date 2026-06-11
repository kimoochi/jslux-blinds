"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ROOM_TYPES } from "@/lib/constants";

const schema = z.object({
  name:       z.string().min(2,  "Name must be at least 2 characters"),
  phone:      z.string().min(7,  "Please enter a valid phone number"),
  email:      z.string().email("Please enter a valid email address"),
  roomType:   z.string().min(1,  "Please select a room type"),
  windowSize: z.string().min(1,  "Please describe your window size"),
  message:    z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

type Status = "idle" | "loading" | "success" | "error";

export function Quote() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "YOUR_WEB3FORMS_ACCESS_KEY_HERE";
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Quote Request from ${data.name} — JS Lux Blinds`,
          from_name: "JS Lux Blinds Website",
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="quote" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left info panel */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <p className="section-label">Get Started</p>
            <h2 className="section-title">Get a Free Quote</h2>
            <div className="section-divider" style={{ margin: "0 0 1.5rem 0" }} />
            <p className="text-brand-gray leading-relaxed mb-8">
              Fill out the form and our team will contact you within 24 hours with a personalized quote — no obligation, completely free.
            </p>

            {[
              { step: "01", title: "Submit Your Request", desc: "Fill in your details and window specifications." },
              { step: "02", title: "We Call You Back",    desc: "Our team reaches out within 24 hours to discuss your needs." },
              { step: "03", title: "Free Site Visit",     desc: "We visit, measure, and present fabric samples." },
              { step: "04", title: "Installation Day",    desc: "Your custom blinds are installed perfectly by our professionals." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 mb-5">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center font-heading font-bold text-sm shrink-0">
                  {s.step}
                </div>
                <div>
                  <p className="font-semibold text-brand-brown text-sm">{s.title}</p>
                  <p className="text-brand-gray text-xs mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right" delay={0.1} className="lg:col-span-3">
            <div className="bg-brand-cream rounded-2xl p-7 sm:p-9 shadow-card">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-10 gap-4"
                  >
                    <CheckCircle size={56} className="text-green-500" />
                    <h3 className="font-heading font-bold text-2xl text-brand-brown">Quote Request Sent!</h3>
                    <p className="text-brand-gray">Thank you! We&apos;ll reach out to you within 24 hours.</p>
                    <button onClick={() => setStatus("idle")} className="btn-primary mt-2">
                      Send Another Request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="form-label" htmlFor="name">Full Name *</label>
                        <input id="name" {...register("name")} className="form-input" placeholder="Juan dela Cruz" />
                        {errors.name && <p className="form-error">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="form-label" htmlFor="phone">Phone Number *</label>
                        <input id="phone" {...register("phone")} className="form-input" placeholder="+63 9XX XXX XXXX" />
                        {errors.phone && <p className="form-error">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="mb-5">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input id="email" type="email" {...register("email")} className="form-input" placeholder="juan@example.com" />
                      {errors.email && <p className="form-error">{errors.email.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="form-label" htmlFor="roomType">Room Type *</label>
                        <select id="roomType" {...register("roomType")} className="form-input">
                          <option value="">Select room type</option>
                          {ROOM_TYPES.map((r) => <option key={r} value={r}>{r}</option>)}
                        </select>
                        {errors.roomType && <p className="form-error">{errors.roomType.message}</p>}
                      </div>
                      <div>
                        <label className="form-label" htmlFor="windowSize">Window Size *</label>
                        <input id="windowSize" {...register("windowSize")} className="form-input" placeholder='e.g. 6ft x 4ft or "3 windows"' />
                        {errors.windowSize && <p className="form-error">{errors.windowSize.message}</p>}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="form-label" htmlFor="message">Message / Additional Details *</label>
                      <textarea
                        id="message"
                        rows={4}
                        {...register("message")}
                        className="form-input resize-none"
                        placeholder="Tell us about your preferred blind type, colors, budget, or any special requirements..."
                      />
                      {errors.message && <p className="form-error">{errors.message.message}</p>}
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 text-red-500 bg-red-50 rounded-xl p-3 mb-4 text-sm">
                        <AlertCircle size={16} />
                        Something went wrong. Please try again or contact us directly.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70"
                    >
                      {status === "loading" ? (
                        <><Loader2 size={18} className="animate-spin" /> Sending...</>
                      ) : (
                        <><Send size={18} /> Send Quote Request</>
                      )}
                    </button>

                    <p className="text-xs text-center text-brand-gray/60 mt-3">
                      Your information is kept confidential and never shared with third parties.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
