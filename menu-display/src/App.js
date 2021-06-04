import "./App.css";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import { useState } from "react";
import Title from "./Title";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  return (
    <main>
      <section className="menu section">
        <Title>Our Menu</Title>
        <Categories />
        <Menu />
      </section>
    </main>
  );
}

export default App;
