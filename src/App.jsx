import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import GameListProvider from "./context/GameListProvider"

function App() {

  return (
    <GameListProvider>
    <Header/>
    <Outlet/>
    </GameListProvider>
  )
}

export default App
