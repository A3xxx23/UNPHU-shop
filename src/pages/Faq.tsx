import { useState } from 'react';

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleAnswer = (id: string | null) => {
    setOpenQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-[#fdfdfd] min-h-screen px-4 py-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[150px] font-bold text-[#090922] leading-none mb-4">
          Preguntas Frecuentes
        </h1>

        <h3 className="text-black text-xl font-semibold mb-6">
          Todo sobre Unphu Shop
        </h3>

        {/* Pregunta 1 */}
        <div
          className="border border-green-700 rounded-xl p-4 mb-3 cursor-pointer transition-transform hover:bg-green-700 hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer("answer1")}
        >
          <h5 className="text-lg font-medium text-stone-950">
            ¿Qué es Unphu Shop?
          </h5>
        </div>
        {openQuestion === "answer1" && (
          <div className="bg-green-100 border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>
              Unphu Shop es una tienda especializada en la venta de productos de uso cotidiano con el objetivo de vender productos oficiales de la Universidad Pedro Henríquez Ureña.
            </p>
          </div>
        )}

        {/* Pregunta 2 */}
        <div
          className="border border-green-700 rounded-xl p-4 mb-3 cursor-pointer transition-transform hover:bg-green-700 hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer("answer2")}
        >
          <h5 className="text-lg font-medium text-stone-950">
            ¿Qué tipo de productos venden?
          </h5>
        </div>
        {openQuestion === "answer2" && (
          <div className="bg-green-100 border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>
              Vendemos ropa urbana de alta demanda como abrigos, gorras,
              camisetas de edición limitada de la universidad.
            </p>
          </div>
        )}

        {/* Pregunta 3 */}
        <div
          className="border border-green-700 rounded-xl p-4 mb-3 cursor-pointer transition-transform hover:bg-green-700 hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer("answer3")}
        >
          <h5 className="text-lg font-medium text-stone-950">
            ¿Cómo funciona el proceso de compra?
          </h5>
        </div>
        {openQuestion === "answer3" && (
          <div className="bg-green-100 border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>
              Solo debes seleccionar el producto, agregarlo al carrito y
              completar el proceso de pago. Recibirás confirmación de compra y
              podrás hacer seguimiento de tu pedido.
            </p>
          </div>
        )}

        {/* Pregunta 4 */}
        <div
          className="border border-green-700 rounded-xl p-4 mb-3 cursor-pointer transition-transform hover:bg-green-700 hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer("answer4")}
        >
          <h5 className="text-lg font-medium text-stone-950">
            ¿Los productos son originales?
          </h5>
        </div>
        {openQuestion === "answer4" && (
          <div className="bg-green-100 border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>
              Sí. Todos nuestros productos son 100% originales y creados por
              nuestros propios diseñadores.
            </p>
          </div>
        )}

        {/* Pregunta 5 */}
        <div
          className="border border-green-700 rounded-xl p-4 mb-3 cursor-pointer transition-transform hover:bg-green-700 hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer("answer5")}
        >
          <h5 className="text-lg font-medium text-stone-950">
            ¿Cuánto tarda el envío?
          </h5>
        </div>
        {openQuestion === "answer5" && (
          <div className="bg-green-100 border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>
              Los envíos locales tardan de 1 a 3 días hábiles. Envíos nacionales
              pueden demorar hasta 7 días, dependiendo de tu ubicación.
            </p>
          </div>
        )}

        {/* Pregunta 6 */}
        <div
          className="border border-green-700 rounded-xl p-4 mb-3 cursor-pointer transition-transform hover:bg-green-700 hover:text-white hover:scale-[1.02]"
          onClick={() => toggleAnswer("answer6")}
        >
          <h5 className="text-lg font-medium text-stone-950">
            ¿Hacen entregas en la UNPHU?
          </h5>
        </div>
        {openQuestion === "answer6" && (
          <div className="bg-green-100 border border-black text-stone-950 rounded-xl p-4 mb-4">
            <p>
              Sí, si estudias o trabajas en la UNPHU, puedes coordinar una
              entrega rápida dentro del campus. ¡Solo escríbenos después de tu
              compra!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;
