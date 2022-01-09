import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './app.css';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;