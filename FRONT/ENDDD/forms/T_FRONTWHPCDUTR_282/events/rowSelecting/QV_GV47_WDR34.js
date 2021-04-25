
//gridRowSelecting QueryView: QV_GV47_WDR34
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_GV47_WDR34 = function (entities, gridRowSelectingEventArgs) {
    gridRowSelectingEventArgs.commons.execServer = false;
    
    let nav = gridRowSelectingEventArgs.commons.api.navigation; 
    
    // informacion de la fila seleccionada
    let datosFila = gridRowSelectingEventArgs.rowData;
    
    // creando objeto para devolver al formulario padre
    let datosCliente = {
        cedula: datosFila.cedula,
        nombre: datosFila.nombre,
        apellido: datosFila.apellido,
        telefono: datosFila.telefono,
        direccion: datosFila.direccion
    }
    
    // devolviendo objeto a formulario padre (en evento closemodal)
    nav.closeModal({response1: datosCliente}); 

};




