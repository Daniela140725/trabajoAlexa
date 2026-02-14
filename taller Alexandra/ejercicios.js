// * Respuestas a las preguntas:
// 1. ¿Qué tipo de dato devuelve prompt()?
// Devuelve un string (texto), aunque el usuario escriba números.
// 2. ¿Por qué es necesario usar Number() o parseInt()?
// Porque prompt() devuelve texto.
// Si queremos hacer operaciones matemáticas, debemos convertir ese texto a número usando Number() o parseInt().
// 3. ¿Qué pasa si sumamos directamente dos valores de prompt() sin convertirlos?
// No se suman como números, sino que se unen como texto.
// 4. Ejemplo:
// "5" + "3" = "53"
// (no da 8, porque son strings)
// 5. ¿Qué función bloquea la ejecución hasta que el usuario responda?
// La función prompt(), porque el programa se detiene hasta que el usuario escriba algo o cierre la ventana.//