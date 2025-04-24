const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const sequelize = require('./config/db');

const app = express();

// Middleware
app.use(helmet()); // Protect from vulnerabilities
//app.use(cors()); // Allow CORS
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser());

const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://production-domain.com",
];

app.use(
    cors({
        origin: function (origin, callback) {
            // Allow requests with no origin (like mobile apps or curl)
            if (!origin) return callback(null, true);

            if (allowedOrigins.includes(origin)) {
                return callback(null, true);
            } else {
                return callback(
                    new Error("Not allowed by CORS")
                );
            }
        },
        credentials: true, // Enable cookies sharing
    })
);

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10000, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const svgRoutes = require('./routes/svgRoutes');
app.use('/api/svg', svgRoutes);

const bookingRoutes = require('./routes/bookingRoutes');
app.use('/api/booking', bookingRoutes);

const paymentRoutes = require('./routes/paymentRoutes');
app.use('/api/payment', paymentRoutes);

const studentRoutes = require('./routes/studentRoutes');
app.use('/api/students', studentRoutes);

const statsRoutes = require('./routes/statsRoutes');
app.use('/api/stats', statsRoutes);

const filtersRoutes = require('./routes/filtersRoutes');
app.use('/api/filters', filtersRoutes);

// Health check
app.get('/', (req, res) => {
    res.send('API is running!');
});

module.exports = app;