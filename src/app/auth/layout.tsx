import Card from "@/components/card";
import { ReactNode, useMemo } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const randomBgUrl = useMemo(
    () =>
      `https://picsum.photos/1600/900?random=${Math.floor(
        Math.random() * 1000
      )}`,
    []
  );

  return (
    <html lang="en">
      <body>
        <div
          className="h-screen bg-cover bg-center flex items-center"
          style={{
            background: `url(${randomBgUrl})`,
          }}
        >
          <div className="container mx-auto">
            <div className="flex justify-center">
              <div className="lg:w-2/3"></div>
              <div className="lg:w-1/3 sm:w-1/2 w-full">
                <Card>{children}</Card>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
