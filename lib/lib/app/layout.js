import "./globals.css"; // Import global styles

export const metadata = {
  title: "NeuroSphere AI", // Set title of site
  description: "AI platform for everyone", // Set description of site
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> {/* Set language to English */}
      <body>
        {children} {/* Render content of the pages */}
      </body>
    </html>
  );
}
