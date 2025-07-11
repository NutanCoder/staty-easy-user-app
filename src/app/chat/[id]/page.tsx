'use client';

import ChatInput from '@/components/chat/ChatInput';
import ChatMessage from '@/components/chat/ChatMessage';
import ChatSidebar from '@/components/chat/ChatSidebar';
import { use, useState } from 'react';

interface Message {
  id: string;
  sender_id: string;
  content: string;
  created_at: string;
  sender_email: string;
}

interface Contact {
  id: string;
  name: string;
  lastMessage?: string;
  unreadCount?: number;
  isOnline?: boolean;
}

// Hardcoded data for testing
const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'John Doe',
    lastMessage: 'Hey, how are you?',
    unreadCount: 2,
    isOnline: true,
  },
  {
    id: '2',
    name: 'Jane Smith',
    lastMessage: 'The property looks great!',
    isOnline: false,
  },
  {
    id: '3',
    name: 'Mike Johnson',
    lastMessage: 'When can I view the property?',
    unreadCount: 1,
    isOnline: true,
  },
];

const mockMessages: Message[] = [
  {
    id: '1',
    sender_id: '1',
    content: 'Hi, I\'m interested in your property',
    created_at: '2024-03-25T10:00:00Z',
    sender_email: 'john@example.com',
  },
  {
    id: '2',
    sender_id: 'current_user',
    content: 'Hello! Yes, the property is still available',
    created_at: '2024-03-25T10:01:00Z',
    sender_email: 'me@example.com',
  },
  {
    id: '3',
    sender_id: '1',
    content: 'Great! When can I schedule a viewing?',
    created_at: '2024-03-25T10:02:00Z',
    sender_email: 'john@example.com',
  },
];

export default function ChatPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [contacts] = useState<Contact[]>(mockContacts);
  const currentUser = { id: 'current_user', email: 'me@example.com' };
  const recipientUser = mockContacts.find(contact => contact.id === resolvedParams.id);

  const handleSendMessage = async (content: string) => {
    const newMessage: Message = {
      id: `${messages.length + 1}`,
      sender_id: currentUser.id,
      content,
      created_at: new Date().toISOString(),
      sender_email: currentUser.email,
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="flex h-full max-w-4xl mx-auto border-2 border-gray-200 rounded-lg">
      <ChatSidebar
        contacts={contacts}
        selectedContactId={resolvedParams.id}
      />
      <div className="flex-1 flex flex-col">
        {recipientUser && (
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h2 className="font-semibold">
              Chat with {recipientUser.name}
            </h2>
          </div>
        )}
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.content}
              sender={message.sender_email}
              timestamp={new Date(message.created_at).toLocaleTimeString()}
              isOwnMessage={message.sender_id === currentUser.id}
            />
          ))}
        </div>
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
} 