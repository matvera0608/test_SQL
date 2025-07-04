
// Las funciones aritméticas con sus respectivos controles de error.

export function sumar(x, y)
{
     if(typeof x !== "number" || typeof y !== "number" || isNaN(x) || isNaN(y)) throw new Error("Todos los parámetros deben ser numéricos y no alfanumérico");
     return x + y;
}

export function restar(x, y)
{
     if(typeof x !== "number" || typeof y !== "number" || isNaN(x) || isNaN(y)) throw new Error("Todos los parámetros deben ser numéricos y no alfanumérico");
     if (y >= x) return y - x;
     if (x >= y) return x - y;
}

export function multiplicar(x, y)
{
     if(typeof x !== "number" || typeof y !== "number" || isNaN(x) || isNaN(y)) throw new Error("Todos los parámetros deben ser numéricos y no alfanumérico");
     return x * y;
}

// Acá puse más control, por si acaso se pone la x un 0 y la y un número diferente.
export function dividir(x, y)
{
     if(typeof x !== "number" || typeof y !== "number" || isNaN(x) || isNaN(y)) throw new Error("Todos los parámetros deben ser numéricos y no alfanumérico");
     if(y === 0) throw new Error("¡¡¡ ERRORRRRR FATAL!!!. No se puede dividir por 0.");
     return x / y;
}

export default function info()
{
     return "Usted realizará cálculos solicitados en el siguiente módulo";
}