
//FacturaReporteQuery Entity: FacturaReporte
task.executeQuery.Q_FACTRUOU_NL30 = function(executeQueryEventArgs){
    
    let cedula = executeQueryEventArgs.commons.api.vc.model.Cliente.cedula;
    executeQueryEventArgs.parameters.cedulaCliente = cedula;
    
      executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.FacturaReporte = true;
};