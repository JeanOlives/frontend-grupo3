
//ClienteQuery Entity: Cliente
task.executeQuery.Q_CLIETTTN_SG94 = function(executeQueryEventArgs){
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Cliente = true;
    const nombreCliente = 	executeQueryEventArgs.commons.api.vc.model.BuscarCliente.nombreBuscar;
    executeQueryEventArgs.parameters.nombreBuscar = nombreCliente;

    
};