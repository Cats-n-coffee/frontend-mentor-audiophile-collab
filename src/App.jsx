import BottomBanner from "./components/sharedComponents/BottomBanner";
import CategoriesMenu from "./components/sharedComponents/CategoriesMenu";
import Header from "./components/sharedComponents/header/Header";
import Footer from "./components/sharedComponents/Footer";
import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      {/* <h1 style={{ padding: "2em 0" }}>Audiophile app</h1> */}
      <Header />
      <main>
        <CategoriesMenu />
        <BottomBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
