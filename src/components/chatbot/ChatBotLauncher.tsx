const owlIconUrl = "https://cdn-icons-png.flaticon.com/512/616/616408.png";

interface Props {
  onClick: () => void;
}

export const ChatbotLauncher = ({ onClick }: Props) => (
  <button
    onClick={onClick}
    className="fixed bottom-70 right-6 z-50 w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg flex items-center justify-center transition-colors"
    aria-label="Abrir chat"
  >
    <img src={owlIconUrl} alt="Chatbot" className="w-8 h-8" />
  </button>
);
