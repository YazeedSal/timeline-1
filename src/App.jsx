import { useState } from "react";
import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";

function ExpensesApp() {
  const [user, setUser] = useState("hamzeh");

  return (
    <div className="expensesApp">
      {user} from App
      <Header user={user} />
      <Body user={user} setUser = {setUser} />
    </div>
  );
}

export default ExpensesApp;
