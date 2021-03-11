import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

  const openSection = useSelector(state => state.openData.open)
  console.log(openSection);
  return (
    <div className="App">
      <Header/>
      <main>
        {
            openSection ? (
              <>
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
            </>
            ) : (
              <div className="country-container">
                <Navigator />
              </div>
            )
        }
        
        
        
      </main>
    </div>
  );
}

export default App;
