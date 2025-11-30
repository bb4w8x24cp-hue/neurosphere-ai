export const metadata = {
  title: "NeuroSphere AI",
  description: "Next-gen AI platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
