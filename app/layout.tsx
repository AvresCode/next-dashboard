// import '@/app/ui/global.css'; // absolute import
import './ui/global.css'; // relative import

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
