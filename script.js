 
      function mostrarFecha() {
        var f = new Date();
        var d = f.getDate();
        var m = new Array(
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre"
        );
        var y = f.getFullYear();

        return d + " de " + m[f.getMonth()] + " de " + y;
      }
      function mostrarHora() {
        var f = new Date();
        var h = f.getHours();
        var m = f.getMinutes();

        return h + ":" + m + " hrs";
      }
      document.getElementById("fecha").innerHTML = mostrarFecha();
      document.getElementById("hora").innerHTML = mostrarHora();
   