import React from "react";
import { observer } from "mobx-react-lite";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Login from "./components/LogIn/LogIn";

const App: React.FC = observer(() => {
  return (
    <div>
      <Header />
      {Login.isLoggedIn && <Content />}
    </div>
  );
});

export default App;