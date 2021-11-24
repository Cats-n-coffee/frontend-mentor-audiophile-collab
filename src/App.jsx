import CategoryPage from "./components/categoriesPage/CategoryPage";
import Footer from "./components/sharedComponents/footer/Footer";
import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      <h1 style={{ padding: "2em 0" }}>Audiophile app</h1>
      <main>
        <CategoryPage category="headphones" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
