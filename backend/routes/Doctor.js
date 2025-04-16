const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor');

// Get all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new doctor
router.post('/', async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.json({ message: 'Doctor added successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update doctor
router.put('/:id', async (req, res) => {
  try {
    await Doctor.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Doctor updated successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete doctor
router.delete('/:id', async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Doctor deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
