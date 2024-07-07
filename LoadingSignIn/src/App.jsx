// Import Bootstrap CSS and Bootstrap Icons CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import Header and MainContent components
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
