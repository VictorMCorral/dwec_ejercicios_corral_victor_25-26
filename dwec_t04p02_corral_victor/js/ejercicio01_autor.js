// La clase Autor tienes las siguientes propiedades (privadas):
// id (es un identificador único de tipo incremental interno de la aplicación). 
// nombre completo (no puede haber dos autores con el mismo nombre completo)
// libros (al construirse será un array vacío [])

// También tiene la siguiente propiedad y el siguiente método static:
// último ID asignado.
// obtenerSiguienteId(): Incrementa el último ID en 1 y devuelve su valor. Se invoca desde el constructor de la Clase Autor.

// Y los siguientes métodos:
// -    	getter//setter
// -    	mostrarDatosAutor(): Devuelve una cadena con toda la información de un autor. No recibe nada. Debe usar template strings.
// -    	insertarLibro(libro): añade un libro a la lista de libro ya escritos por este autor. Solo se pueden añadir libros previamente existentes en el sistema. Devuelve el número de libros escritos hasta ese momento (incluido el nuevo libro).
// -    	tieneLibros(): devuelve true / false si ha escrito libros.
// -        Aquellos métodos que necesitéis.
// Y un constructor que recibe el nombre completo. Aquí se harán validaciones antes de crear.
