import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './containers/Home';
import Section from "./containers/Section";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<Section header="News" />} />
        <Route path="/opinion" element={<Section header="Opinion" />} />
        <Route path="/sports" element={<Section header="Sports" />} />
        <Route path="/a&e" element={<Section header="A&E" />} />
        <Route path="/eye" element={<Section header="The Eye" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;