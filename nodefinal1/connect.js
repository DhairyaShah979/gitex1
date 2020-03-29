
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/playground")
    .then(() => console.log('Connected to MongoDB dsf...'))
    .catch((err) => console.error('Could not Connect to MongoDB', err));
