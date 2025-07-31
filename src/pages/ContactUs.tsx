import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

export const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_naqglop', 'template_x9qhs2a', form.current, {
          publicKey: '4R0U3ZV2dXlX58yeZ',
        })
        .then(
          () => {
            toast.success('Correo enviado correctamente!', {
              position: 'bottom-right',
              duration: 3000,
            });
            form.current?.reset();
          },
          (error) => {
            toast.error("Error al enviar correos", {
              position: "bottom-right",
              duration: 3000,
            });
            console.error('FAILED...', error.text);
          }
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-center items-center px-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8 space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Contactanos
          </h2>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Correo
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300  rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Asunto
            </label>
            <input
              type="text"
              name="subject"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300  rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300  rounded-lg shadow-sm text-black resize-none focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-stone-900 hover:bg-stone-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-200"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </motion.div>
  );
};

