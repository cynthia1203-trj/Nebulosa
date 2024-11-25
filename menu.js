<script>
  // Función para mostrar detalles del artículo
  function mostrarArticulo(element) {
    const detalleArticulo = document.getElementById('detalle-articulo');
    const detalleContenido = document.getElementById('detalle-contenido');

    // Obtiene el resumen del atributo `data-resumen`
    const resumen = element.getAttribute('data-resumen');
    detalleContenido.textContent = resumen;

    // Muestra el detalle
    detalleArticulo.style.display = 'block';
  }

  // Función para cerrar el detalle
  function cerrarDetalle() {
    const detalleArticulo = document.getElementById('detalle-articulo');
    detalleArticulo.style.display = 'none';
  }
</script>
