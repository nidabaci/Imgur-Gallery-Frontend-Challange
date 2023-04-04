import './App.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Header } from './components/Header'
import { FiltersBar } from './components/FiltersBar';
import { Pagination } from './components/Pagination';
import { GallerySection } from './components/GallerySection';

function App() {
  return (
    <div className="">
      <Header /> 
      <FiltersBar />  
      <Pagination/>
      <GallerySection />
    </div>
  )
}

export default App
