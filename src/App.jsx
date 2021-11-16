import BottomBanner from "./components/sharedComponents/BottomBanner";
import CategoriesMenu from "./components/sharedComponents/CategoriesMenu";
import Footer from "./components/sharedComponents/Footer";
import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      <h1 style={{ padding: "2em 0" }}>Audiophile app</h1>
      <main style={{ padding: "1em" }}>
        <CategoriesMenu />
        <BottomBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
