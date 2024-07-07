import { NavLink, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <ul className='flex justify-center items-center gap-32'>
          <li><NavLink to='/'>First Page</NavLink></li>
          <li><NavLink to='/secondpage'>Second Page</NavLink></li>
        </ul>
      </div>

      <Outlet/>
    </>
  )
}

export default App
