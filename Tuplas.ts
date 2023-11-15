//* Tuplas en TypeScript

/* Las tuplas en TypeScript son arreglos con un número fijo de elementos, donde cada elemento puede ser
de un tipo diferente. Se definen utilizando corchetes `[]` y especificando los tipos de datos para cada
posición. */

//* Ejemplo de Tupla:

let persona: [string, number, boolean];

persona = ["Juan", 30, true];

/* En este ejemplo, la tupla `persona` tiene tres elementos: el primero es de tipo `string`, el segundo
de tipo `number` y el tercero de tipo `boolean`. */

//* Acceso a Elementos de una Tupla:

// Puedes acceder a elementos individuales de una tupla utilizando su índice.

let nombre: string = persona[0]; // Accede al primer elemento (índice 0)
let eda: number = persona[1]; // Accede al segundo elemento (índice 1)
let esAdulto: boolean = persona[2]; // Accede al tercer elemento (índice 2)

//* Asignación y Modificación de Valores en una Tupla:

persona[0] = "Ana"; // Modifica el primer elemento
persona[1] = 25; // Modifica el segundo elemento
persona[2] = false; // Modifica el tercer elemento

//* Restricciones y Flexibilidad:

/* Las tuplas permiten definir la estructura y el tipo de datos en posiciones específicas, lo que
proporciona una estructura fija y ayuda a mantener la consistencia de datos. Sin embargo, es importante
utilizarlas con precaución, ya que puede ser menos legible si se usan de manera extensiva o si no se
manejan con claridad. */

/* Las tuplas son útiles para representar datos estructurados y heterogéneos, ofreciendo una forma más
precisa de trabajar con conjuntos de datos específicos en TypeScript. */
