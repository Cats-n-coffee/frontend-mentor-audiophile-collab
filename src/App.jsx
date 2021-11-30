import BottomBanner from "./components/sharedComponents/bottomBanner/BottomBanner";
import CategoriesMenu from "./components/sharedComponents/categoriesMenu/CategoriesMenu";
import Footer from "./components/sharedComponents/footer/Footer";
import Header from "./components/sharedComponents/header/Header";
import "./scss/main.scss";

function App() {
  return (
    <div className="App">
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
