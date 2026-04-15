const appointmentController = require('../controllers/appointmentController')

router.get('/', async (req, res)=>{
    res.status(200).json({message: 'appoinment api!'})

})

router.get('/all', appointmentController.getAppointments)
router.post('/new', appointmentController.createAppointment)