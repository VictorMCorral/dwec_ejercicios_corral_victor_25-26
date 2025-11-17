//gestiona la clase Libro y las subclases Ebook y LibroPapel.

// La clase Libro tiene las siguientes propiedades (privadas):
// -    	isbn (aunque en nuestro caso para simplificar las pruebas será un número entero simple que introduce el  usuario al insertar el libro en el sistema. No puede haber dos isbn iguales -aunque esto no lo controlo yo-).
// -    	título (puede haber libros con el mismo título -aunque esto no lo controlo yo-)
// -        género literario (solo puede tener uno)
// -    	autor/es (puede haber más de un autor - necesito un array-)
// -    	precio (sin IVA)

// La clase Libro también tiene las siguientes propiedades estáticas:

// const GENEROS_LITERARIOS = new Set([
//   "Novela",
//   "Poesía",
//   "Ensayo",
//   "Teatro",
//   "Ciencia Ficción",
//   "Fantasía",
//   "Histórico",
//   "Biografía",
// "Terror",
//   "Infantil",
// ]);

// Y los siguientes métodos:
// -    	getter//setter
// -    	mostrarDatosLibro(): Devuelve una cadena con toda la información de un libro. No recibe nada. Debe usar template strings.
// -    	deshacerDescuentoLibro(descuento): deshace el último descuento aplicado. Si no hay ningún descuento previo aplicado, no hace nada. Por tanto, el libro conservará el precio original antes del descuento.
// -    	aplicarDescuentoLibro(descuento): cambiar el precio del libro una vez aplicado el descuento. No devuelve nada. Solo se puede aplicar un descuento. Así que si el libro ya tenía descuento, se deshace el que hubiese y se aplica el nuevo.
// -        Algun metodo que consideres necesarios y sean comunes a los hijos e identicos.

// Y un constructor que recibe el isbn, el título, el autor, el género y el precio. Aquí se harán validaciones antes de crear.

//EBOOK
// La subclase Ebook: Extiende la clase Libro para representar libros electrónicos con los siguientes atributos adicionales (privados):
// tamanoArchivo: tamaño del archivo en MiB.
// formato: formato del archivo valido (mirar el set FORMATOS).

// La clase Ebook también tiene las siguientes propiedades estáticas:

// const FORMATOS = new Set([
//   "pdf",
//   "epub",
//   "mobi",
// ]);
// Métodos específicos:
// getter//setter
// descargar(): Simula la descarga del libro. Devuelve la cadena "Descargando…"
// convertirFormato(formato): Cambia el formato del archivo manteniendo el ISBN).
// Sobrescribe el método mostrarDatosLibro() para incluir información adicional como el tamaño del archivo y el formato. Debe usar template strings.
// Aquellos otros métodos que consideres necesarios.
// Y un constructor que recibe todo lo esperado y llama al padre con super(). Aquí se harán validaciones antes de crear.

//LIBRO PAPEL
// La subclase LibroPapel: Extiende la clase Libro para representar libros físicos con los siguientes atributos adicionales (privados):
// peso: peso del libro en gramos.
// dimensiones: dimensiones del libro (por ejemplo: "20x15x3 cm").
// stock: número de libros en papel
// Métodos específicos:
// getter//setter
// embalar(): Simula el embalaje del libro. Devuelve la cadena: "Embalando…"
// reducirStock() y amplicarStock(numUnididades). Se reduce siempre en una unidad y se amplia en las unidades que se indiquen.
// Sobrescribe el método mostrarDatosLibro() para incluir información adicional como el peso, las dimensiones y el stock. Debe usar template strings.
// Aquellos otros métodos que consideres necesarios.

// La clase LibroPapel también tiene una propiedad estática que avisa del número mínimo de unidades que se permiten en stock antes de pedir más unidades.

// Y un constructor que recibe todo lo esperado y llama al padre con super().Aquí se harán validaciones antes de crear.

// Define un método comprobarDisponibilidad() que sea diferente para cada subclase (polimorfismo):
// En Ebook, este método devuelve siempre true, ya que los ebooks siempre están disponibles.
// En LibroPapel, este método devuelve true o false según una cantidad en inventario definida como un atributo privado stock.

// Define un método modificarLibro() que sea diferente para cada subclase (polimorfismo) que reciba toda la información que se pueda modificar en un mapa y la modifique.
