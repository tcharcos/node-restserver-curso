// =============================
// Puerto
// =============================
process.env.PORT = process.env.PORT || 3000

// =============================
// Entorno
// =============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// =============================
// Base de datos
// =============================

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    //urlDB = 'mongodb+srv://admin:568zkhlCE8S3iRoD@cluster0-h6lh4.mongodb.net/cafe'
    urlDB = process.env.MONGO_URI;
};

process.env.urlDB = urlDB;