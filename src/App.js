import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './index.css'
import { loadData } from './Redux/Actions';
import './Reset/reset.css'
import Filter from './UI/Filter/Filter';
import Header from './UI/Header/Header';
import Navigator from './UI/Navigator/Navigator';
import Search from './UI/Search/Search';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    FetchData()
  }, [])

  const FetchData = () => {
    dispatch(loadData())
  }
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
          <Navigator />
        </div>
        
      </main>
    </div>
  );
}

export default App;
