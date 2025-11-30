import "./globals.css"; // Import global styles

export const metadata = {
  title: "NeuroSphere AI",
  description: "AI platform for everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children} {/* Render all pages */}
      </body>
    </html>
  );
}
