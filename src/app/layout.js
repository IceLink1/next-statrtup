import "./globals.css";

export const metadata = {
  title: "ICELINK | Next JS",
  description: "",
  openGraph: {
    title: 'ICELINK',
    description: 'Acme is a...',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}