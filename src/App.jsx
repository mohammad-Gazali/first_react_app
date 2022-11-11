import { Navbar, Welcome, Discount, Products, Notes } from "./components";
import { styles } from "./style";

function App() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-primary-light">
      <Navbar />
      <Welcome />
      <main className={`w-full ${styles.sepY} my-12 bg-white`}>
        <div className={styles.paddingX}>
          <Discount />
          <Products />
          <Notes />
        </div>
      </main>
    </div>
  );
}

export default App;
