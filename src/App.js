import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './containers/Home';
import Section from "./containers/Section";
import NavBar from "./components/NavBar";
import {
  eye_articles,
  sports_articles,
  opinion_articles,
  a_and_e_articles,
  uni_news_articles,
  city_news_articles
} from "./data/articles";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<Section header="News" articles={uni_news_articles}/>} />
        <Route path="/opinion" element={<Section header="Opinion" articles={opinion_articles}/>} />
        <Route path="/sports" element={<Section header="Sports" articles={sports_articles}/>} />
        <Route path="/a&e" element={<Section header="A&E" articles={a_and_e_articles}/>} />
        <Route path="/eye" element={<Section header="The Eye" articles={eye_articles}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;