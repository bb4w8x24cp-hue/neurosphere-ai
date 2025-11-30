import "./globals.css";

export const metadata = {
  title: "NeuroSphere AI",
  description: "AI platform for everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
