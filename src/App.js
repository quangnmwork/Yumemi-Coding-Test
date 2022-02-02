import Header from "./components/Header/Header";
import Chart from "./components/Main/Chart/Chart";
import CheckboxList from "./components/Main/Checkbox/CheckboxList";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <main>
        <CheckboxList />
        <Chart />
      </main>
    </>
  );
}

export default App;
