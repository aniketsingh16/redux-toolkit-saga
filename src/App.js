import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatsFetch } from './catState';

function App() {
  const cats = useSelector(state => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch])

  console.log(cats)
  return (
    <div className="App">
     <h1> Cats Gallery</h1>
     <div>
      {cats.map(cat =>
        <div key={cat.id}> 
        <p> {cat.name} </p>
        </div>
      )}
     </div>
    </div>
  );
}

export default App;
