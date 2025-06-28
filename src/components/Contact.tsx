import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">let's connect</h2>
        <p className="text-gray-300 mb-8">Have a project in mind or just want to say hello? I'd love to hear from you.</p>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white/5 p-4 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#007AFF]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white/5 p-4 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#007AFF]"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full bg-white/5 p-4 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#007AFF]"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[#007AFF] text-white font-semibold rounded-lg hover:bg-[#0056b3] transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;