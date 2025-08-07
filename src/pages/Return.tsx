import { useState } from 'react';

const Devolucion = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleAnswer = (id: string | null) => {
    setOpenQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-[#fdfdfd] min-h-screen px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[140px] font-bold text-[#090922] leading-none mb-4">DEVOLUCIÓN</h1>
        <h4 className="text-black text-xl font-semibold mb-2">Políticas de Devolución</h4>
        <h5 className="text-lg mb-6 text-stone-700">
          En UNPHU Shop, queremos que estés completamente satisfecho con tu compra. Si necesitas devolver un producto, sigue estas pautas:
        </h5>

        {/* Pregunta 1 */}
        <div
          className="border border-green-700 rounded-xl p-4 mb-3 cursor-pointer transition-transform hover:bg-green-700 hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer('answer1')}
        >
          <h5 className="text-lg font-medium text-stone-950">Período de Devolución</h5>
        </div>
        {openQuestion === 'answer1' && (
          <div className="bg-green-100 border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>Tienes hasta 30 días desde la fecha de compra para devolver un producto.</p>
          </div>
        )}

        {/* Pregunta 2 */}
        <div
          className="border border-green-700 rounded-xl p-4 mb-3 cursor-pointer transition-transform hover:bg-green-700 hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer('answer2')}
        >
          <h5 className="text-lg font-medium text-stone-950">Condición del Producto</h5>
        </div>
        {openQuestion === 'answer2' && (
          <div className="bg-green-100 border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>El producto debe estar en su condición original, sin usar y con las etiquetas adjuntas.</p>
          </div>
        )}

        {/* Pregunta 3 */}
        <div
          className="border border-green-700 rounded-xl p-4 mb-3 cursor-pointer transition-transform hover:bg-green-700 hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer('answer3')}
        >
          <h5 className="text-lg font-medium text-stone-950">Proceso de Devolución</h5>
        </div>
        {openQuestion === 'answer3' && (
          <div className="bg-green-100 border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>Las devoluciones se pueden realizar en nuestras tiendas físicas o por correo.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Devolucion;

