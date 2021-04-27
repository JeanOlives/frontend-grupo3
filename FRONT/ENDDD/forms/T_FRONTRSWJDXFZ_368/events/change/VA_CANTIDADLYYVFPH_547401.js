

//Entity: DetalleFactura
//DetalleFactura.cantidad (TextInputBox) View: BuscarProductoForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_CANTIDADLYYVFPH_547401 = function(  entities, changedEventArgs ) {

    let cantidad =entities.DetalleFactura.cantidad;
    let precio =entities.Producto.precio;
    
    entities.DetalleFactura.subtotal = cantidad*precio;
    
    changedEventArgs.commons.execServer = false;

};