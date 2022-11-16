import './index.css';
import SearchBarAndResults from './routes/SearchBarAndResults'
import Header from './components/general/Header';

const App = () => {
  return (
    <div>
      <Header 
        headerTitle='FS Weather'
        headerClasses='p-3 bg-dark text-white'
      />
      <SearchBarAndResults />
    </div>
  );
}

export default App;
