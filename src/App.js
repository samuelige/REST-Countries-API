
import './index.css'
import './Reset/reset.css'
import Country from './UI/Custom-cards/Country';
import Filter from './UI/Filter/Filter';
import Header from './UI/Header/Header';
import Search from './UI/Search/Search';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <div className="search-and-filter-container">
          <div className="search-container">
            <Search/>
          </div>
          <div className="filter-container">
            <Filter />
          </div>
        </div>
        <div className="country-container">
          <Country/>
        </div>
        
      </main>
    </div>
  );
}

export default App;
