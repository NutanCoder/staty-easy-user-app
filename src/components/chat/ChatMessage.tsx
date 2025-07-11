import { FC } from 'react';

interface ChatMessageProps {
  message: string;
  sender: string;
  timestamp: string;
  isOwnMessage: boolean;
}

const ChatMessage: FC<ChatMessageProps> = ({ message, sender, timestamp, isOwnMessage }) => {
  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[70%] rounded-lg px-4 py-2 ${
          isOwnMessage
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-gray-200 text-gray-800 rounded-bl-none'
        }`}
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold text-sm">{sender}</span>
          <span className="text-xs opacity-70">{timestamp}</span>
        </div>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage; 