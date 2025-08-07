import { useState, useEffect, useRef } from "react";

export type Message = {
  images: string;
  id: number;
  text: string;
  sender: "user" | "bot";
};

export function useChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => setIsOpen(open => !open);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = input.trim();

    // Agrega el mensaje del usuario
    const newMessage = { id: Date.now(), text: userMessage, sender: "user" };
    setMessages(prev => [...prev, newMessage]);
    setInput("");

    try {
      // Llamada a la función serverless
      const res = await fetch('/.netlify/functions/openai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();

      // Agrega la respuesta del bot
      const botMessage = {
        id: Date.now() + 1,
        text: data.reply || "Lo siento, no pude procesar tu mensaje.",
        sender: "bot",
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMsg = {
        id: Date.now() + 1,
        text: "Error al contactar al servidor. Intenta de nuevo.",
        sender: "bot",
      };
      setMessages(prev => [...prev, errorMsg]);
      console.error(error);
    }
  };

  const onInputChange = (value: string) => setInput(value);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return {
    isOpen,
    toggleChat,
    messages,
    input,
    onInputChange,
    sendMessage,
    onKeyDown,
    messagesEndRef,
  };
}

