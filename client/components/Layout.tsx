import { Outlet } from 'react-router-dom'
import Header from './HeaderComp'
import WellingtonWeather from './Wellington'

export default function Layout() {
  return (
    <>
      <div className="grid-container">
        {/* <header>
          <Header />
        </header> */}
        <main>
          <Outlet />
   
        </main>
        <footer>Copyright &copy; 2038</footer>
      </div>
    </>
  )
}
