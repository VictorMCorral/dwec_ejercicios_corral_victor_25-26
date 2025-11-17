//REVISAR PAGINA 20 CON EL PATRON SINGELTON

// La clase Tienda tiene los siguiente atributos:
//  - Un objeto de Libros.
//  - Un objeto de Autores.
//  - Un objeto de Tipos de Envío.
//  - Un objeto de Clientes.
//  - Un objeto de Pedidos.
//  - Nombre de la tienda.
// Un objeto lector, instancia de la clase LeerDatosPrompt. Esta instancia será utilizada por la Tienda en todos los procesos que requieran la lectura de datos del usuario. De esta forma, si en el futuro se desea cambiar la forma de leer los datos (por ejemplo, usar un formulario en lugar de prompt), solo será necesario sustituir esta instancia por otra subclase de LeerDatos.

// La clase Tienda tiene también los siguiente atributos estáticos:
//  - IVA

// La clase Tienda además implementa todos los métodos necesarios para su funcionamiento. Además de los siguientes métodos:
//  - cargarDatosPrueba(): Nos permite iniciar la aplicación con datos de prueba Reales. 
//  - iniciar(): Es la función que arranca el sistema en sí.
//  - mostrarMenú(): Devuelve una cadena con las opciones del menú.
//  - Todos aquellos que consideres necesarios.

// Y un constructor que recibe el nombre de la tienda.
// La tienda nos permite estas gestiones:

// 1- Mostrar Catálogo de Libros Disponibles.
//   Muestra al usuario todos los libros disponibles para comprar, separando los ebooks de los libros en papel.

// 2- Insertar Libros. Si el autor del libro no existe, se crea a la vez que se inserta el libro.

// 3- Actualizar stock libros.

// 4- Ver notificaciones stock libros. Muestra un listado de los libros en papel que están sin stock o por debajo del mínimo.

// 5- Insertar cliente.

// 6- Mostrar pedidos abiertos de un cliente por DNI.

// 7- Borrar cliente cliente por DNI.

// 8- Hacer pedido por cliente identificado por DNI. 
//     - Se debe permitir la compra usando un buscador o mostrando un listado.
//     - Se debe poder seleccionar el método de envío.
//     - Al finalizar mostrará el total del pedido y un resumen completo del mismo. También preguntará si hay que aplicar algún descuento.

// 9- Mostrar pedido por ID de pedido.

// 10- Mostrar estadísticas:
//     - Libro más vendido (reduce y/o find).
//     - Autor que más dinero ha ganado (reduce).
//     - Cliente que más pedidos has realizado (solo mirando pedidos) (reduce y/o find).
//     - Cliente que más libros ha comprado (mirando unidades) (reduce).
//     - Número total de pedidos abiertos (filter). 

// 11- Salir.

// Los tipos de pedidos estarán precargados y  no se van a gestionar desde el menú principal.

// Los autores siempre se insertan al crear un libro y no se van a gestionar desde el menú principal.

