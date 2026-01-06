import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Provider } from "@/components/ui/provider";
import { Toaster } from "@/components/ui/toaster";
import { ColorModeProvider } from "@/components/ui/color-mode";
import { MyAuthErrorModal } from "@/components/modals/MyAuthErrorModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DriveStore",
  description: "My the best store",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="fusion-extension-loaded"
      suppressHydrationWarning
    >
      <body
        style={{ overflowX: "hidden" }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <ColorModeProvider>{children}</ColorModeProvider>
          <MyAuthErrorModal />
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
