import React from "react";
import type { Message } from "../../hooks/chatbot/useChatBot";

interface Props {
  messages: Message[];
  input: string;
  onInputChange: (val: string) => void;
  onSend: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClose: () => void;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

type Product = {
  name: string;
  images: string[];
};

// Función para extraer productos y sus imágenes del texto del bot
function extractProducts(text: string): Product[] {
  const products: Product[] = [];
  const lines = text.split('\n');

  let currentProduct: Product | null = null;

  lines.forEach(line => {
    const productMatch = line.match(/^\d+\.\s\*\*(.+?)\*\*/);
    if (productMatch) {
      if (currentProduct) products.push(currentProduct);
      currentProduct = {
        name: productMatch[1],
        images: [],
      };
    } else if (currentProduct) {
      // Expresión regular mejorada para evitar capturar caracteres no deseados al final
      const urls = Array.from(
        line.matchAll(/https?:\/\/[^\s),]+?\.(?:jpg|jpeg|png|webp)(?:\?[^\s]*)?/gi)
      ).map(m => m[0]);
      if (urls.length > 0) {
        currentProduct.images.push(...urls);
      }
    }
  });

  if (currentProduct) products.push(currentProduct);

  return products;
}

export const ChatbotModal = ({
  messages,
  input,
  onInputChange,
  onSend,
  onKeyDown,
  onClose,
  messagesEndRef,
}: Props) => {
  return (
    <div className="fixed bottom-20 right-6 z-50 w-80 h-[500px] bg-white rounded-xl shadow-lg flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center bg-green-600 text-white px-4 py-3 rounded-t-xl">
        <h2 className="font-semibold text-lg">Chatbot</h2>
        <button
          onClick={onClose}
          className="font-bold text-xl leading-none hover:text-gray-100"
          aria-label="Cerrar chat"
        >
          &times;
        </button>
      </div>

      {/* Mensajes */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 max-h-[400px]">
        {messages.length === 0 && (
          <p className="text-gray-400 text-sm">Hola, ¿en qué puedo ayudarte?</p>
        )}

        {messages.map((msg) => {
          if (msg.sender === "user") {
            return (
              <div
                key={msg.id}
                className="max-w-full px-3 py-2 rounded-lg bg-green-100 text-gray-800 self-end"
              >
                {msg.text}
              </div>
            );
          } else {
            const products = extractProducts(msg.text);
            return (
              <div
                key={msg.id}
                className="max-w-full px-3 py-2 rounded-lg bg-gray-200 text-gray-800 self-start"
              >
                {/* Mensaje con links detectados */}
                <p className="whitespace-pre-wrap break-words">
                  {msg.text.split(" ").map((word, index) => {
                    const isURL = /^https?:\/\/\S+/.test(word);
                    return isURL ? (
                      <a
                        key={index}
                        href={word}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline break-all"
                      >
                        {word}
                      </a>
                    ) : (
                      <span key={index}> {word} </span>
                    );
                  })}
                </p>

                {/* Imágenes sueltas si vienen desde msg.images */}
                {msg.images && msg.images.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {msg.images.map((img: string | undefined, idx: React.Key | null | undefined) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`product-${idx}`}
                        className="h-24 object-contain rounded"
                      />
                    ))}
                  </div>
                )}

                {/* Productos detectados con imágenes */}
                {products.length > 0 && (
                  <div className="grid grid-cols-1 gap-4 mt-3">
                    {products.map((product, i) => (
                      <div
                        key={i}
                        className="rounded p-2 shadow transition cursor-pointer bg-gray-200"
                      >
                        <h3 className="font-semibold mb-2">{product.name}</h3>
                        <div className="flex gap-2 flex-wrap">
                          {product.images.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt={product.name}
                              className="h-24 object-contain rounded"
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          }
        })}

        <div ref={messagesEndRef} />
      </div>

      {/* Input + botón enviar */}
      <div className="flex border-t border-gray-200 p-3">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={onKeyDown}
          className="flex-grow border text-gray-400 border-gray-300 rounded-l-md px-3 py-2 focus:outline-none"
        />
        <button
          onClick={onSend}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-md transition-colors"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};
