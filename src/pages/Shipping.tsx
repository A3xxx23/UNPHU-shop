import { useState } from 'react';

const Shipping = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleAnswer = (id: string | null) => {
    setOpenQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-[#fdfdfd] min-h-screen px-4 py-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[150px] font-bold text-[#090922] leading-none mb-4">
          Envío
        </h1>
        <h4 className="text-black text-xl font-semibold mb-2">
          Políticas de Envío
        </h4>
        <h5 className="text-lg mb-6 text-stone-700">
          Conoce nuestras diferentes opciones de envío para satisfacer tus
          necesidades:
        </h5>

        {/* Pregunta 1 */}
        <div
          className="border border-green-700 rounded-xl p-4 mb-3 cursor-pointer transition-transform hover:bg-green-700 hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer("answer1")}
        >
          <h5 className="text-lg font-medium text-stone-950">
            Envío Estándar
          </h5>
        </div>
        {openQuestion === "answer1" && (
          <div className="bg-green-100 border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>
              El envío estándar tiene un costo fijo y se entrega en un plazo de
              3 a 7 días hábiles.
            </p>
          </div>
        )}

        {/* Pregunta 2 */}
        <div
          className="border border-green-700 rounded-xl p-4 mb-3 cursor-pointer transition-transform hover:bg-green-700 hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer("answer2")}
        >
          <h5 className="text-lg font-medium text-stone-950">
            Envío Express
          </h5>
        </div>
        {openQuestion === "answer2" && (
          <div className="bg-green-100 border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>
              El envío express garantiza una entrega rápida en un plazo de 1 a 3
              días hábiles por un costo adicional.
            </p>
          </div>
        )}

        {/* Pregunta 3 */}
        <div
          className="border border-green-700 rounded-xl p-4 mb-3 cursor-pointer transition-transform hover:bg-green-700 hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer("answer3")}
        >
          <h5 className="text-lg font-medium text-stone-950">
            Envío Internacional
          </h5>
        </div>
        {openQuestion === "answer3" && (
          <div className="bg-green-100 border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>
              El envío internacional está disponible para la mayoría de los
              países y tarda de 7 a 15 días hábiles.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shipping;
