import { Provider } from "react-redux";
import { store } from "./redux/store";

import Header from "./components/header/Header";

import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="App">Redux</div>
    </Provider>
  );
}

export default App;
