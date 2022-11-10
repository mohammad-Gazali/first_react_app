import { Welcome, Discount, Products } from "./components";

function App() {
  return (
    <div className="sm:px-10 px-4 w-full h-full relative">
      <Welcome />
      <Discount />
      <Products />
    </div>
  );
}

export default App;
