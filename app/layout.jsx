import { Providers } from './providers';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div className="text-red-800 p-4 bg-red-900 border-l cursor-ew-resize">Test Tailwind</div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
