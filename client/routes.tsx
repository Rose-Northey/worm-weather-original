import { Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import Wellington from './components/Wellington'
import Canberra from './components/Canberra'
import SoilStack from './components/SoilStack'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="/cities/wellington" element={<Wellington />} />
    <Route path="/cities/canberra" element={<Canberra />} />
    <Route path="/cities/soilStack" element={<SoilStack />}/>
  </Route>
)
