const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// MongoDB Connection
require('./db');

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/api/doctors', require('./routes/Doctor'));
app.use('/api/patients', require('./routes/Patient')); // ✅ Correct path
app.use('/api/appointments', require('./routes/Appointment'));

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
