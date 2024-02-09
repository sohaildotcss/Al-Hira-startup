import Navbar from '../Navbar';
import Footer from '../Footer';
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="select-none">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
