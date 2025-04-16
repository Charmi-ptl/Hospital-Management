const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');

// Get all patients
router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new patient
router.post('/', async (req, res) => {
  try {
    // Normalize gender (capitalize first letter)
    const gender =
      req.body.gender.charAt(0).toUpperCase() + req.body.gender.slice(1).toLowerCase();

    const patient = new Patient({ ...req.body, gender });

    await patient.save();
    res.json({ message: 'Patient added successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update patient
router.put('/:id', async (req, res) => {
  try {
    const gender =
      req.body.gender?.charAt(0).toUpperCase() + req.body.gender?.slice(1).toLowerCase();

    await Patient.findByIdAndUpdate(req.params.id, { ...req.body, gender });
    res.json({ message: 'Patient updated successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete patient
router.delete('/:id', async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.json({ message: 'Patient deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
