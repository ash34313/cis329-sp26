import { useEffect, useState } from "react";
import API from '../api'

export default function AppointmentList(){
    const [appointments, setAppointments] = useState([])

    useEffect(()=>{
        const fetchAppointments = async ()=>{
            const res = API.get('/appointments')
            setAppointments(res.data)
        }
        fetchAppointments()
    },[])

    return(
        <div className='bg-white rounded shadow overflow-hidden'>
            <h2 className="p4 text-xl font-semibold border-box"></h2>
        </div>
    )
    
}