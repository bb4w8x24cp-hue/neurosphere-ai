import "./globals.css"; // Import global styles

export const metadata = {
  title: "NeuroSphere AI", // Title of site
  description: "AI platform for everyone", // Description of site
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> {/* Set language to English */}
      <body>
        {children} {/* Render content of pages */}
      </body>
    </html>
  );
}
