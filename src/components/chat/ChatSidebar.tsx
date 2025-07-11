import { ROUTES } from "@/lib/routes/routes";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

interface ChatContact {
  id: string;
  name: string;
  lastMessage?: string;
  unreadCount?: number;
  isOnline?: boolean;
}

interface ChatSidebarProps {
  contacts: ChatContact[];
  selectedContactId?: string;
  onSelectContact?: (contactId: string) => void;
}

const ChatSidebar: FC<ChatSidebarProps> = ({ contacts, selectedContactId }) => {
  return (
    <div className="w-full md:w-80 border-r border-gray-200">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Chats</h2>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-10rem)] gap-2">
        {contacts.map((contact) => (
          <Link href={ROUTES.CHAT.DETAIL(contact.id)} key={contact.id}>
            <div
              className={clsx(
                "p-4 w-full text-left hover:bg-gray-100 transition-colors",
                selectedContactId === contact.id && "bg-gray-200"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    {contact.name.charAt(0).toUpperCase()}
                  </div>
                  {contact.isOnline && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{contact.name}</span>
                    {contact.unreadCount ? (
                      <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1">
                        {contact.unreadCount}
                      </span>
                    ) : null}
                  </div>
                  {contact.lastMessage && (
                    <p className="text-sm text-gray-500 truncate">
                      {contact.lastMessage}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
