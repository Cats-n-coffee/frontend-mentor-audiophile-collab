import BottomBanner from "./components/sharedComponents/BottomBanner";
import CategoriesMenu from "./components/sharedComponents/CategoriesMenu";
import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      <h1 style={{ padding: "2em 0" }}>Audiophile app</h1>
      <main style={{ padding: "1em" }}>
        <CategoriesMenu />
        <BottomBanner />
      </main>
    </div>
  );
}

export default App;
