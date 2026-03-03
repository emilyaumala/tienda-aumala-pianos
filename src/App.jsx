import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans antialiased bg-white text-stone-900">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}