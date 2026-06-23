import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <div>
        <Sidebar />

        <main>
          <h2>Welcome to 3DC Finance KYC Project</h2>
          <p>This is the main content area.</p>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;