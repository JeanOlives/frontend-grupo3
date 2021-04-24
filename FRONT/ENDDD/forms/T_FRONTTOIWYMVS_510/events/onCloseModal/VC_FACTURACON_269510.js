
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: FacturacionForm
task.onCloseModalEvent = function (entities, onCloseModalEventArgs){

    onCloseModalEventArgs.commons.execServer = false;
    let infoCliente;
    let modalHijo = onCloseModalEventArgs.closedViewContainerId;
    
    if(modalHijo === "VC_BUSCARCLEE_181282") {
        // obteniendo informacion enviada desde buscarClienteForm
        let infoCliente = onCloseModalEventArgs.result.response1;

        entities.Cliente.cedula     = infoCliente.cedula;
        entities.Cliente.nombre     = infoCliente.nombre;
        entities.Cliente.apellido   = infoCliente.apellido;
        entities.Cliente.direccion  = infoCliente.direccion;
        entities.Cliente.telefono   = infoCliente.telefono;
        
        return;
    }
    
    onCloseModalEventArgs.commons.messageHandler
        .showMessagesInformation('debe ingresar un cliente');

};