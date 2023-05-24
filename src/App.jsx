import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={'Productos:'}/>
      <ItemDetailContainer />
    </>
  )
}

export default App
