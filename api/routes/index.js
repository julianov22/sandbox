const express = require('express');
const router = express.Router();

// Import route modules
const userRoutes = require('./userRoutes');

// Use route modules
router.use('/users', userRoutes);

// Basic health check route
router.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'API is running' });
});

module.exports = router; 