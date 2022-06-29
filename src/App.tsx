import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Route } from "./routes";

import "./App.less";

function App() {
  return (
    <div className="App">
      <Header />
      <Route />
      <Footer />
    </div>
  );
}

export default App;
