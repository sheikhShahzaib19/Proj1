import './App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Header from './components/Header'
import Footer from './components/Footer/Footer';
//pages
import Home from './pages/Home'

function App() {
  return (
    <>
     <Header/>
     <main>
     
     <Home/>
     
     </main>
   <Footer/>
    </>
  );
}

export default App;
