import { Routes ,Route } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'

export function RoutesDOM(){
  return(
    <Routes>
      <Route path='/' element={<Dashboard />} />
    </Routes>
  )
}