import { Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import Wellington from './components/Wellington'
import Canberra from './components/Canberra'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="/cities/wellington" element={<Wellington />} />
    <Route path="/cities/canberra" element={<Canberra />} />
  </Route>
)
