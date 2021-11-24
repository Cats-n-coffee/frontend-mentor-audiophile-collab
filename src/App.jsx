import BottomBanner from "./components/sharedComponents/bottomBanner/BottomBanner";
import CategoriesMenu from "./components/sharedComponents/categoriesMenu/CategoriesMenu";
import Footer from "./components/sharedComponents/footer/Footer";
import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      <h1 style={{ padding: "2em 0" }}>Audiophile app</h1>
      <main>
        <CategoriesMenu />
        <BottomBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
