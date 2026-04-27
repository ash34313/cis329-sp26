import { useState } from "react";
import API from '../api'

export default function AppointmentForm({onAppointmentAdded}){
    const[formData, setFormData] = useState({
        patient:'',
        doctor:'',
        date:'',
        status:'Scheduled'
    })

    // const [doctorsList, setDoctorsList] = useState([])
    // var res = API.get('/doctors')
    // setDoctorsList(res.data)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            const res = await API.post('/appointments', formData)
            onAppointmentAdded(res.data)
            alert('Appointment booked successfully!')
            setFormData({
                patient:'',
                doctor:'',
                date:'',
                status:''
            })
        } catch(err){
            alert('Error booking appointment...')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold">Book New Appointment</h2>

            <input type="text" placeholder="Patient ID" value={formData.patient} onChange={(e)=>setFormData({...formData, patient:e.target.value})} required/>
            <input type="text" placeholder="Doctor ID" value={formData.doctor} onChange={(e)=>setFormData({...formData, doctor:e.target.value})} required/>
            <input type="datetime-local" value={formData.date} onChange={(e)=>setFormData({...formData, date:e.target.value})} required/>
            <input type="password" placeholder="Password" value={formData.password} onChange={(e)=>setFormData({...formData, password:e.target.value})} required/>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Book Appointment</button>
        </form>
    )
}