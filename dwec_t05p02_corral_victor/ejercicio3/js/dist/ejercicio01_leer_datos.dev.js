"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Dos clases: LeerDatos y LeerDatosPrompt
//LeerDatos tiene metodos abstractos y la segunda los implementa, es decir, LeerDatosPrompot "extends" LeerDatos
var LeerDatos =
/*#__PURE__*/
function () {
  function LeerDatos() {
    _classCallCheck(this, LeerDatos);
  }

  _createClass(LeerDatos, [{
    key: "leerEntero",
    value: function leerEntero(mensaje_o_id) {
      throw new Error("Método no implementado");
    }
  }, {
    key: "leerEnteroHasta",
    value: function leerEnteroHasta(mensaje_o_id) {
      throw new Error("Método no implementado");
    }
  }, {
    key: "leerReal",
    value: function leerReal(mensaje_o_id) {
      throw new Error("Método no implementado");
    }
  }, {
    key: "leerEnteroEntre",
    value: function leerEnteroEntre(mensaje_o_id, min, max) {
      throw new Error("Método no implementado");
    }
  }, {
    key: "leerEnteroEntreHasta",
    value: function leerEnteroEntreHasta(mensaje_o_id, min, max) {
      throw new Error("Método no implementado");
    }
  }, {
    key: "leerCadena",
    value: function leerCadena(mensaje_o_id) {
      throw new Error("Método no implementado");
    }
  }, {
    key: "leerCadenaHasta",
    value: function leerCadenaHasta(mensaje_o_id) {
      throw new Error("Método no implementado");
    } // Aquellos otros métodos que consideres necesarios.

  }]);

  return LeerDatos;
}();

var LeerDatosPrompt =
/*#__PURE__*/
function (_LeerDatos) {
  _inherits(LeerDatosPrompt, _LeerDatos);

  function LeerDatosPrompt() {
    _classCallCheck(this, LeerDatosPrompt);

    return _possibleConstructorReturn(this, _getPrototypeOf(LeerDatosPrompt).apply(this, arguments));
  }

  _createClass(LeerDatosPrompt, [{
    key: "leerEntero",
    value: function leerEntero(mensaje_o_id) {
      // Recibe: una cadena con el mensaje a mostrar al usuario.
      // Hace: solicita un número entero mediante prompt(). Si el valor no es entero, lanza excepción.
      // Devuelve: el número entero válido, o lanza excepción si no lo es.
      var valor = prompt(mensaje_o_id);
      var valorNumber = Number(valor);

      if (!Util.validarEntero(valorNumber)) {
        throw new Error("El valor ingresado no es un número entero válido.");
      }

      return valorNumber;
    }
  }, {
    key: "leerEnteroHasta",
    value: function leerEnteroHasta(mensaje_o_id) {
      // Recibe: una cadena con el mensaje.
      // Hace: llama a leerEntero() repetidamente hasta que el usuario introduzca un entero válido.
      // Devuelve: el número entero válido.
      var valor = undefined;
      var continuar = true;

      while (continuar) {
        try {
          valor = this.leerEntero(mensaje_o_id);
          continuar = false;
        } catch (err) {
          console.error(err);
          continuar = true;
        }
      }

      return valor;
    }
  }, {
    key: "leerReal",
    value: function leerReal(mensaje_o_id) {
      // Recibe: una cadena con el mensaje.
      // Hace: solicita un número real mediante prompt(). Si no es válido, lanza excepción.
      // Devuelve: el número real válido, o lanza excepción si no lo es. 
      var valor = prompt(mensaje_o_id);
      var valorNumber = Number(valor);

      if (!Util.validarReal(valorNumber)) {
        throw new Error("El valor ingresado no es un número real válido.");
      }

      return valorNumber;
    }
  }, {
    key: "leerRealHasta",
    value: function leerRealHasta(mensaje_o_id) {
      var valor = undefined;
      var continuar = true;

      while (continuar) {
        try {
          valor = this.leerReal(mensaje_o_id);
          continuar = false;
        } catch (err) {
          console.error(err);
          continuar = true;
        }
      }

      return valor;
    }
  }, {
    key: "leerEnteroEntre",
    value: function leerEnteroEntre(mensaje_o_id, min, max) {
      // Recibe: mensaje, valor mínimo y valor máximo.
      // Hace: solicita un entero y valida que esté entre los límites. Si no, lanza excepción.
      // Devuelve: el número entero válido, o lanza excepción si no lo es.
      var valor = prompt(mensaje_o_id + " entre " + min + " y " + max);
      var valorNumber = Number(valor);

      if (!Util.validarEntero(valorNumber) || valorNumber < min || valorNumber > max) {
        throw new Error("El numero no es valido o no esta entre " + min + " y " + max);
      }

      return valorNumber;
    }
  }, {
    key: "leerEnteroEntreHasta",
    value: function leerEnteroEntreHasta(mensaje_o_id, min, max) {
      // Recibe: mensaje, valor mínimo y valor máximo.
      // Hace: llama a leerEnteroEntre() repetidamente hasta que el usuario introduzca un entero válido.
      // Devuelve: el número entero válido.
      var continuar = true;
      var valorNumber = null;

      while (continuar) {
        try {
          valorNumber = this.leerEnteroEntre(mensaje_o_id, min, max);
          continuar = false;
        } catch (err) {
          console.error(err);
          continuar = true;
        }
      }

      return valorNumber;
    }
  }, {
    key: "leerCadena1",
    value: function leerCadena1(mensaje_o_id) {
      // Recibe: una cadena con el mensaje.
      // Hace: solicita una cadena mediante prompt(). Comprueba que no esté vacía y tenga al menos 1 carácter. Si no, lanza excepción.
      // Devuelve: la cadena válida, o lanza excepción si no lo es.
      var valor = prompt(mensaje_o_id);

      if (valor.trim() === "" || valor.trim().length <= 1) {
        throw new Error("El texto introducido esta vacio o tiene menos de 2 letras");
      }

      return valor;
    }
  }, {
    key: "leerCadena2",
    value: function leerCadena2(mensaje_o_id, longitud) {
      // Recibe: una cadena con el mensaje y su longitud mínima.
      // Hace: solicita una cadena mediante prompt(). Comprueba que no esté vacía y tenga al menos la longitud de caracteres indicada. Si no, lanza excepción.
      // Devuelve: la cadena válida, o lanza excepción si no lo es.
      var valor = prompt(mensaje_o_id + " de la siguiente longitud minima: " + longitud);

      if (valor.trim() === "" || valor.trim().length < longitud) {
        throw new Error("El texto introducido esta vacio o tiene menos de " + longitud + " letras");
      }

      return valor;
    }
  }, {
    key: "leerCadena3",
    value: function leerCadena3(mensaje_o_id, longitud, patron) {
      // Recibe: una cadena con el mensaje, su longitud mínima y un patrón.
      // Hace: solicita una cadena mediante prompt(). Comprueba que no esté vacía, tenga al menos la longitud de caracteres indicada y cumpla el patrón. Si no, lanza excepción.
      // Devuelve: la cadena válida, o lanza excepción si no lo es.
      var regex = patron;
      var valor = prompt(mensaje_o_id + " de la siguiente longitud minima: " + longitud + " y el siguiente patron: " + patron);

      if (valor.trim() === "" || valor.trim().length < longitud || !regex.test(valor.trim())) {
        throw new Error("El texto introducido esta vacio o tiene menos de " + longitud + " letras");
      }

      return valor;
    }
  }, {
    key: "leerCadenaHasta",
    value: function leerCadenaHasta() {
      // Recibe: una cadena con el mensaje.
      // Hace: llama a leerCadena() repetidamente hasta que el usuario introduzca una cadena válida.
      // Devuelve: la cadena válida.
      var valor = null;
      var continuar = true;

      while (continuar) {
        try {
          switch (arguments.length) {
            case 1:
              valor = this.leerCadena1(arguments.length <= 0 ? undefined : arguments[0]);
              break;

            case 2:
              valor = this.leerCadena2(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]);
              break;

            case 3:
              valor = this.leerCadena3(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          }

          continuar = false;
        } catch (err) {
          console.error(err);
          continuar = true;
        }
      }

      return valor;
    } // Aquellos otros métodos que consideres necesarios.

  }]);

  return LeerDatosPrompt;
}(LeerDatos);

var LeerDatosInput =
/*#__PURE__*/
function (_LeerDatos2) {
  _inherits(LeerDatosInput, _LeerDatos2);

  function LeerDatosInput() {
    _classCallCheck(this, LeerDatosInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(LeerDatosInput).apply(this, arguments));
  }

  _createClass(LeerDatosInput, [{
    key: "leerTitulo",
    value: function leerTitulo() {}
  }]);

  return LeerDatosInput;
}(LeerDatos);