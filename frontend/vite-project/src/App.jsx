import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Teachers from './Components/teachers/teachers.jsx'
import Position from './Components/position/position.jsx'

function App() {

  return (
    <>
      <div className='header'>
        <h1>MindX FiNal Test V2</h1>
      </div>
      <div className='main'>
        <div className='navBar'>
          <div className='section'>
            <Link to="/">Giáo Viên</Link>
          </div>
          <div className='section'>
            <Link to="/position">Vị trí công việc</Link>
          </div>
        </div>
        <div className='table'>
          <h3>Giáo viên</h3>
          <div className='table-data'>
            <Routes>
              <Route path="/" element={<Teachers />} />
              <Route path="/position" element={<Position />} />
            </Routes>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
