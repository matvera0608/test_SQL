import pool from './database_connection.js';

//Consulto los teléfonos de cada paciente
export async function getTelefonos() 
{
  const [rows] = await pool.execute(`
    SELECT nombre, apellido, telefono 
    FROM paciente
  `);
  return rows;
}

//Acá muestro el historial de los teléfonos de cada paciente.
export async function getTelefonoPaciente(numeroHistorial)
{
  const [rows] = await pool.execute(`
    SELECT telefono 
    FROM paciente 
    WHERE nroHistorialClinico = ?
  `, [numeroHistorial]);
  return rows[0]; // si solo esperás un resultado
}

//Acá muestro el historial de los médicos y pacientes, cuando ingresaron
//y el dato total del ingreso.
export async function getMedicosPaciente(numeroHistorial)
{
  const [rows] = await pool.execute(`
    SELECT med.nombre, med.apellido
    FROM medico med
    INNER JOIN ingreso ing ON med.matricula = ing.matriculaMedico
    INNER JOIN paciente pac ON ing.nroHistorialPaciente = pac.nroHistorialClinico
    WHERE pac.nroHistorialClinico = ?
  `, [numeroHistorial]);
  return rows;
}
// Test rápido:

async function test() {
  console.log('--- Todos los teléfonos ---');
  console.log(await getTelefonos());

  console.log('\n--- Teléfono de paciente 5 ---');
  console.log(await getTelefonoPaciente(5));

  console.log('\n--- Médicos que atendieron al paciente 5 ---');
  console.log(await getMedicosPaciente(5));
}

await test();
