import { ChatbotLauncher } from "./ChatBotLauncher";
import { ChatbotModal } from "./ChatBotModal";
import { useChatbot } from "../../hooks/chatbot/useChatBot";

export const ChatbotContainer = () => {
  const {
    isOpen,
    toggleChat,
    messages,
    input,
    onInputChange,
    sendMessage,
    onKeyDown,
    messagesEndRef,
  } = useChatbot();

  return (
    <>
      <ChatbotLauncher onClick={toggleChat} />
      {isOpen && (
        <ChatbotModal
          messages={messages}
          input={input}
          onInputChange={onInputChange}
          onSend={sendMessage}
          onKeyDown={onKeyDown}
          onClose={toggleChat}
          messagesEndRef={messagesEndRef}
        />
      )}
    </>
  );
};
