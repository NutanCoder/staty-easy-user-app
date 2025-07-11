import { ReactNode } from 'react';

export default function ChatLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-[calc(100vh-4rem)] bg-white">
      {children}
    </div>
  );
} 