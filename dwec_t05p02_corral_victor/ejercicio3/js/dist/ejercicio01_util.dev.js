"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Util =
/*#__PURE__*/
function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: "validarEntero",
    //20/11/2025 --> 16 funciones
    value: function validarEntero(valor) {
      if (valor === null || typeof valor === "boolean" || String(valor).trim() === "") {
        return false;
      }

      var numero = Number(valor);
      return Number.isInteger(numero);
    }
  }, {
    key: "validarReal",
    value: function validarReal(valor) {
      if (valor === null || typeof valor === "boolean" || String(valor).trim() === "") {
        return false;
      }

      var numero = Number(valor);
      return !Number.isNaN(numero);
    }
  }, {
    key: "validarYConvertirReal",
    value: function validarYConvertirReal(valor) {
      if (Util.validarReal(valor)) {
        return Number(valor);
      }

      return null;
    }
  }, {
    key: "validarCadenaFecha",
    value: function validarCadenaFecha(valor) {
      // Comprueba que valor es una cadena fecha correcta. Admite distintos formatos de fecha.
      // YYYY-MM-DD
      // YYYY-M-D
      // DD-M-YYYY
      // DD-MM-YYYY
      var regex = /^(?:\d{4}-\d{1,2}-\d{1,2}|\d{1,2}-\d{1,2}-\d{4})$/;
      return regex.test(valor);
    }
  }, {
    key: "validarFecha",
    value: function validarFecha(valor) {
      // Comprueba que valor es una fecha correcta. Hará uso de la función anterior.
      var fechaValida = false;

      if (this.validarCadenaFecha(valor)) {
        var regexYMD = /^\d{4}-\d{1,2}-\d{1,2}$/; // YYYY-M-D o YYYY-MM-DD

        var regexDMY = /^\d{1,2}-\d{1,2}-\d{4}$/; // D-M-YYYY o DD-MM-YYYY

        var arrayFechas = valor.split("-");
        var year = 0;
        var month = 0;
        var day = 0;

        if (regexYMD.test(valor)) {
          year = Number(arrayFechas[0]);
          month = Number(arrayFechas[1]);
          day = Number(arrayFechas[2]);
        } else if (regexDMY.test(valor)) {
          year = Number(arrayFechas[2]);
          month = Number(arrayFechas[1]);
          day = Number(arrayFechas[0]);
        }

        var fecha = new Date(year, month - 1, day);
        fechaValida = fecha.getFullYear() === year && fecha.getMonth() === month - 1 && fecha.getDate() === day;
      }

      return fechaValida;
    }
  }, {
    key: "validarTitulo",
    value: function validarTitulo(titulo) {
      // Comprueba que el titulo sea una cadena y tenga longitud mínima de 1 carácter.
      return typeof titulo === "string" && titulo.length > 0;
    }
  }, {
    key: "validarNombrePersona",
    value: function validarNombrePersona(nombre) {
      // Comprueba que el nombre sea una cadena formada por letras y tenga longitud mínima de 3 carácter.
      var regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{4,}$/;
      return typeof nombre === "string" && regex.test(nombre);
    }
  }, {
    key: "validarDireccion",
    value: function validarDireccion(direccion) {
      //Comprueba que el direccion sea una cadena que tenga longitud mínima de 3 caracteres.
      return typeof direccion === "string" && direccion.length > 2;
    }
  }, {
    key: "validarPrecio",
    value: function validarPrecio(precio) {
      // Comprueba que el precio sea un número real positivo mayor que 0.
      return this.validarReal(precio) && precio > 0;
    }
  }, {
    key: "validarTamanoArchivo",
    value: function validarTamanoArchivo(tamanoArchivo) {
      // Comprueba que el tamaño sea un número positivo mayor que 0.
      return this.validarReal(tamanoArchivo) && tamanoArchivo > 0;
    }
  }, {
    key: "validarPeso",
    value: function validarPeso(peso) {
      // Comprueba que el peso sea un número positivo mayor que 0.
      return this.validarReal(peso) && peso > 0;
    }
  }, {
    key: "validarStock",
    value: function validarStock(stock) {
      //Comprueba que el stock sea un número positivo mayor que 0.
      return this.validarEntero(stock) && stock > 0;
    }
  }, {
    key: "validarDimensiones",
    value: function validarDimensiones(dimensiones) {
      // Comprueba que las dimensiones tengan el formato correcto (ejemplo: 20x15x3).
      var regex = /^\d+x\d+x\d+$/;
      return regex.test(dimensiones);
    }
  }, {
    key: "esMesPromocion",
    value: function esMesPromocion(fecha, array_meses_promocion) {
      // Comprueba que la fecha está en uno de los meses de promoción. Devuelve true / false.
      var promocion = false;

      if (this.validarFecha(fecha)) {
        fecha = new Date(fecha);
        promocion = array_meses_promocion.includes(fecha.getMonth() + 1);
      }

      return promocion;
    }
  }, {
    key: "validarFormato",
    value: function validarFormato(formato, setFormatosValidos) {
      // Comprueba que el formato esté entre PDF, EPUB, MOBI.
      return setFormatosValidos.has(formato);
    }
  }, {
    key: "validarGenero",
    value: function validarGenero(generoLeido, setGenerosValidos) {
      //Comprueba que el genero leído sea válido dentro de la lista de géneros soportados.
      return setGenerosValidos.has(generoLeido);
    }
  }, {
    key: "validarDiasEnvio",
    value: function validarDiasEnvio(dias) {
      //Comprueba que los días sea un número positivo mayor que 0.
      return this.validarEntero(dias) && dias > 0;
    } // Aquellas otras validaciones que consideréis que son fundamentales.

  }, {
    key: "validarDni",
    value: function validarDni(dni) {
      var valido = false;
      var dniRegex = /^[0-9]{8}[A-Z]$/i;

      if (dniRegex.test(dni)) {
        // dato % 23 = resto -->  letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        var letra = dni.substring(dni.length - 1).toUpperCase();
        var numero = dni.substring(0, dni.length - 1);

        if (numero % 23 == letras.indexOf(letra)) {
          valido = true;
        }
      }

      return valido;
    }
  }, {
    key: "validarNombrePedido",
    value: function validarNombrePedido(nombrePedido) {
      return typeof nombrePedido === "string" && nombrePedido.length > 2;
    }
  }]);

  return Util;
}();