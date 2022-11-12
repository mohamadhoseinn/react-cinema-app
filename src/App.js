import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="App">Redux</div>
    </Provider>
  );
}

export default App;
