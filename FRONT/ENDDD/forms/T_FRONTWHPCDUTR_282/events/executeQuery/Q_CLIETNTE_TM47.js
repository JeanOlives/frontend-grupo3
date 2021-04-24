
//BuscarClienteQuery Entity: Cliente
task.executeQuery.Q_CLIETNTE_TM47 = function(executeQueryEventArgs){
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Cliente = true;
    const nombre = executeQueryEventArgs.commons.api.vc.model.BuscarCliente.nombreBuscar;
    executeQueryEventArgs.parameters.buscarCliente = nombre; 
    
 
};