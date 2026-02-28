import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8FD]">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;