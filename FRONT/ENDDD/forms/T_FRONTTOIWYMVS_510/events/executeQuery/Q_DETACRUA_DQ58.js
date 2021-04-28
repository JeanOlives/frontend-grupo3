
//DetalleFacturaQuery Entity: DetalleFactura
task.executeQuery.Q_DETACRUA_DQ58 = function(executeQueryEventArgs){
    
    let codigo = executeQueryEventArgs.commons.api.vc.model.Factura.codigo;
    executeQueryEventArgs.parameters.codigoFactura =codigo;
    
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.DetalleFactura = true;
    
};