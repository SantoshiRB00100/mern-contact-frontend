import { useState } from "react";
import { sendContact } from "../services/contactService";

function ContactForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await sendContact(form);

    alert("Message sent successfully");

    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

      <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] w-[400px]">

        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Contact Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <textarea
            name="message"
            placeholder="Enter Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default ContactForm;