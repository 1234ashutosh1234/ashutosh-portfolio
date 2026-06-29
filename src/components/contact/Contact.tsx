"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {

  Mail,

  Phone,

  MapPin,

  Send,

} from "lucide-react";



import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [error, setError] = useState("");

const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);
  setSuccess("");
  setError("");

  try {
    if (!form.current) return;

   await emailjs.sendForm(
  "service_7zdwi1l",
  "template_6vsgn21",
  form.current,
  "6SYwAfiQTfe5f_30w"
);

    setSuccess("✅ Message sent successfully!");
    form.current.reset();
 } catch (err: any) {
  console.log(err);

  alert(JSON.stringify(err));

  setError(err.text || err.message || "Failed");
}

};


  return (
    <section
      id="contact"
      className="bg-[#0F172A] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[8px] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="mt-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-5xl font-bold text-transparent">
            Contact Me
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I'm always open to internship opportunities, collaborations,
            and exciting projects. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl flex items-center gap-5">
              <Mail className="text-cyan-400" size={28} />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-gray-400">
                  ashu953442@gmail.com
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl flex items-center gap-5">
              <Phone className="text-cyan-400" size={28} />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-gray-400">
                  +91 XXXXX XXXXX
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl flex items-center gap-5">
              <MapPin className="text-cyan-400" size={28} />
              <div>
                <h3 className="font-bold">Location</h3>
                <p className="text-gray-400">
                  Bihar, India
                </p>
              </div>
            </div>

            <div className="flex gap-5 pt-4">

              <a
                href="https://github.com/1234ashutosh1234"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cyan-500 p-4 transition hover:bg-cyan-500/20"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ashutosh-raj-90740731a/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cyan-500 p-4 transition hover:bg-cyan-500/20"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* Right */}
<motion.form
  ref={form}
  onSubmit={sendEmail}
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl"
>
  
  <input
  type="text"
  name="from_name"
  required
  placeholder="Your Name"
  className="mb-5 w-full rounded-xl border border-white/10 bg-[#111827] p-4 outline-none focus:border-cyan-400"
/>
         <input
  type="email"
  name="from_email"
  required
  placeholder="Your Email"
  className="mb-5 w-full rounded-xl border border-white/10 bg-[#111827] p-4 outline-none focus:border-cyan-400"
/>

           <input
  type="text"
  name="subject"
  required
  placeholder="Subject"
  className="mb-5 w-full rounded-xl border border-white/10 bg-[#111827] p-4 outline-none focus:border-cyan-400"
/>
<textarea
  rows={6}
  name="message"
  required
  placeholder="Your Message"
  className="mb-6 w-full rounded-xl border border-white/10 bg-[#111827] p-4 outline-none focus:border-cyan-400"
/>

<input
  type="hidden"
  name="_subject"
  value="New Portfolio Contact Message"
/>

<input
  type="hidden"
  name="_captcha"
  value="false"
/>

<input
  type="hidden"
  name="_template"
  value="table"
/>

<input
  type="hidden"
  name="_next"
  value="https://ashutoshvats.in"
/>

<button
  type="submit"
  disabled={loading}
  className="flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 px-8 py-4 font-semibold transition hover:scale-105 disabled:opacity-60"
>
  <Send size={18} />

  {loading ? "Sending..." : "Send Message"}
</button>

{success && (
  <p className="mt-5 rounded-xl bg-green-500/20 p-4 text-green-400">
    {success}
  </p>
)}

{error && (
  <p className="mt-5 rounded-xl bg-red-500/20 p-4 text-red-400">
    {error}
  </p>
)}

          </motion.form>

        </div>

      </div>
    </section>
  );
}