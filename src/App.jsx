import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={'Primer Preentrega ReactJS'}/>
    </>
  )
}

export default App
