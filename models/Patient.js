const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
    name: {type:String, required:true},
    age: {type:Number, required:true},
    gender: {type:String, enum:['Male', 'Female', 'Other'], required:true},
    email: {type: String, required: true, unique: true, lowercase:true},
    password: {type: String, required: true},
    phone: {type:Number, required: true},
    assignedDoctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    createdAt: {type:Date, default:Date.now}
})

module.exports = mongoose.model('Patient', patientSchema)