import Navbar from "./components/Navbar";
import Converter from "./components/Converter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Converter />
      <Footer />
    </div>
  );
}
