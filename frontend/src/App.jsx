import { useState } from "react";
import Dashboard from './components/Dashboard'
import PatientsPage from './page/PatientsPage'
import DoctorsPage from './page/DoctorsPage'
import AppointmentsPage from './page/AppointmentsPage'

function App(){
  const [currentPage, setCurrentPage] = useState('dashboard')

  return(
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow p-4">
        <div className="max-w-7x1 mx-auto flex gap-6">
          <button className="font-medium hover:text-blue-600" onClick={()=>setCurrentPage('dashboard')}>
            Dashboard
          </button>

          <button className="font-medium hover:text-blue-600" onClick={()=>setCurrentPage('patients')}>
            Patients
          </button>

          <button className="font-medium hover:text-blue-600" onClick={()=>setCurrentPage('doctors')}>
            Doctors
          </button>

          <button className="font-medium hover:text-blue-600" onClick={()=>setCurrentPage('appointments')}>
            Appointments
          </button>
        </div>
      </nav>

      <main className="max-w-7x1 mx-auto p-6">
        {currentPage==='dashboard' && <Dashboard/>}
        {currentPage==='patients' && <PatientsPage/>}
        {currentPage==='doctors' && <DoctorsPage/>}
        {currentPage==='appointments' && <AppointmentsPage/>}
      </main>

    </div>
  )
}

export default App;