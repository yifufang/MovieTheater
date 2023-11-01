import Header from "./Header/Header";
import Footer from "./Footer";
export default function PageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="my-6 flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
