import data from "./data";
import "./App.css";
import Question from "./Question";

function App() {
  return (
    <main className="container">
      <header className="header">
        <h1>Questions And Answers About Login</h1>
      </header>
      <section className="questions">
        {data.map(({ id, title, info }) => {
          return <Question key={id} title={title} answer={info} />;
        })}
      </section>
    </main>
  );
}

export default App;
