
import './index.css'
import './Reset/reset.css'
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
      </main>
    </div>
  );
}

export default App;
