import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { EmailForm } from './components/EmailForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <EmailForm />
    </div>
  );
}

export default App;
