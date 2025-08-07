const owlIconUrl = "https://cdn-icons-png.flaticon.com/128/16068/16068150.png";

interface Props {
  onClick: () => void;
}

export const ChatbotLauncher = ({ onClick }: Props) => (
  <button
    onClick={onClick}
    className="fixed bottom-70 right-6 z-50 w-20 h-20 rounded-full bg-gray-100 hover:bg-gray-200 shadow-lg flex items-center justify-center transition-colors"
    aria-label="Abrir chat"
  >
    <img src={owlIconUrl} alt="Chatbot" className="w-8 h-8" />
  </button>
);
