import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import AuthModal from "./components/AuthModal/page";

export const metadata = {
  title: "Summarist",
  description: "Next.js 15 project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <AuthModal />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
