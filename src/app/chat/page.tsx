'use client';

import ChatInput from '@/components/chat/ChatInput';
import ChatMessage from '@/components/chat/ChatMessage';
import ChatSidebar from '@/components/chat/ChatSidebar';
import { useState } from 'react';

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

const mockMessages: Record<string, Message[]> = {
  '1': [
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
  ],
  '2': [
    {
      id: '1',
      sender_id: '2',
      content: 'The property looks amazing!',
      created_at: '2024-03-25T09:00:00Z',
      sender_email: 'jane@example.com',
    },
  ],
  '3': [
    {
      id: '1',
      sender_id: '3',
      content: 'When can I schedule a viewing?',
      created_at: '2024-03-25T11:00:00Z',
      sender_email: 'mike@example.com',
    },
  ],
};

export default function ChatPage() {
  const [selectedContactId, setSelectedContactId] = useState<string>();
  const currentUser = { id: 'current_user', email: 'me@example.com' };

  const handleSendMessage = (content: string) => {
    if (!selectedContactId) return;

    const newMessage: Message = {
      id: `${mockMessages[selectedContactId].length + 1}`,
      sender_id: currentUser.id,
      content,
      created_at: new Date().toISOString(),
      sender_email: currentUser.email,
    };

    mockMessages[selectedContactId].push(newMessage);
    // Force a re-render
    setSelectedContactId(selectedContactId);
  };

  const selectedContact = selectedContactId ? mockContacts.find(c => c.id === selectedContactId) : null;
  const currentMessages = selectedContactId ? mockMessages[selectedContactId] : [];

  return (
    <div className="flex h-full max-w-4xl mx-auto border-2 border-gray-200 rounded-lg">
      <ChatSidebar
        contacts={mockContacts}
        selectedContactId={selectedContactId}
        onSelectContact={setSelectedContactId}
      />
      <div className="flex-1 flex flex-col">
        {selectedContact ? (
          <>
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h2 className="font-semibold">
                Chat with {selectedContact.name}
              </h2>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {currentMessages.map((message) => (
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
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center p-8 text-center text-gray-500">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Welcome to Chat</h2>
              <p>Select a contact from the sidebar to start chatting</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 