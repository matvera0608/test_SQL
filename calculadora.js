
export function sumar(x, y)
{
     if(isNaN(x) || isNaN(y)) throw new Error("Todos los parámetros deben ser numéricos y no alfanumérico");
     return x + y;
}

export function restar(x, y)
{
     if(isNaN(x) || isNaN(y)) throw new Error("Todos los parámetros deben ser numéricos y no alfanumérico");
     return x - y;
}

export function multiplicar(x, y)
{
     if(isNaN(x) || isNaN(y)) throw new Error("Todos los parámetros deben ser numéricos y no alfanumérico");
     return x * y;
}

export function dividir(x, y)
{
     if(isNaN(x) || isNaN(y)) throw new Error("Todos los parámetros deben ser numéricos y no alfanumérico");
     if(y === 0) throw new Error("No se puede dividir por 0");
     return x / y;
}

export default function info()
{
     return "Usted realizará cálculos solicitados en el siguiente módulo";
}