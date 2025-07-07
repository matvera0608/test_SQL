import { createPool } from 'mysql2/promise';
// Asegúrate de instalar mysql2 con npm install mysql2

// const mysql = require('mysql2/promise')

const pool = createPool({
host : 'localhost', // Cambia esto por la dirección de tu servidor MySQL
port : 3307, // Cambia esto por el puerto de tu servidor MySQL si
user : 'root', // Cambia esto por tu usuario de MySQL
password : 'ADMIN', // Cambia esto por tu contraseña de MySQL
database : 'clinica', // Cambia esto por el nombre de tu base de datos
waitForConnections: true, // Espera a que haya conexiones disponibles
});

export default pool;
