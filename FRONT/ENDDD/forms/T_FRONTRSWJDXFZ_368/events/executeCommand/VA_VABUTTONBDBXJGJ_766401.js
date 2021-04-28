

//Entity: DetalleFactura
//DetalleFactura. (Button) View: BuscarProductoForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONBDBXJGJ_766401 = function(  entities, executeCommandEventArgs ) {

    let nav = executeCommandEventArgs.commons.api.navigation;
    //Obtener el valor desde el formulario padre (Formulario de facturación)
   // const codigoFactura = executeCommandEventArgs.commons.api.parentVc.model.Factura.codigo;
    entities.DetalleFactura.codigoFactura = executeCommandEventArgs.commons.api.
                                                parentVc.model.Factura.codigo;
    
    //Obtener el valor de las entidades del grupo Producto
    //let producto =executeCommandEventArgs.commons.api.vc.model.Producto;
    //let codigo = producto.codigo;
    //let nombre = producto.nombre;
    //let precio = producto.precio;
    
    
   
 /*   if(!codigoFactura){
            executeCommandEventArgs.commons.messageHandler
            .showMessagesInformation('Debe reservar una factura');
        return;
       }*/
       
   //Enviar el codigo a java
    //executeCommandEventArgs.commons.serverParameters.codigoDeFactura = codigoFactura;
    //executeCommandEventArgs.commons.serverParameters.codigoProducto = codigo;
    
    
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.DetalleFactura = true;
     nav.closeModal({});

};