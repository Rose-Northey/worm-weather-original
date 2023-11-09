import { Outlet } from 'react-router-dom'
import Header from './HeaderComp'

import PageBio from './PageBio'

import WellingtonWeather from './Wellington'

export default function Layout() {
  return (
    <>

      <header>
        <Header />
      </header>
      <main>
        <div className="main-wrapper">
          <PageBio />
          <Outlet />
        </div>
      </main>
      <footer>Copyright &copy; 2038</footer>

    </>
  )
}
