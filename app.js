
import info, {sumar, restar, multiplicar, dividir} from './calculadora.js'

function calcular(algúnCálculo, a, b)
{
     try
     {
          switch (algúnCálculo)
          {
               case "sumar":
                    console.log("Sumando y dá un resultado de : " + sumar(a, b))
                    break;
               case "restar":
                    console.log("Restando y dá un resultado de: " + restar(a, b))
                    break;
               case "multiplicar":
                    console.log("Multiplicando y dá un resultado de: " + multiplicar(a, b))
                    break;
               case "dividir":
                    console.log("Dividiendo y dá un resultado de: " + dividir(a, b))
                    break;
               default:
                    console.error("NO EXISTE ESTA OPERACIÓN")
          }
     }         
     catch (error)
     {
          console.error("Ocurrió un error inesperado:", error.message)
     }

}
console.log(info())

calcular("sumar", 6, 6)
calcular("restar", 6, 2)
calcular("multiplicar", 5, 6)
calcular("dividir", 1, 1)