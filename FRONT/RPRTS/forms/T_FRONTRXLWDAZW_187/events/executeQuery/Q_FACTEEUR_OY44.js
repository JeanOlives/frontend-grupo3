
//ReporteFechaQuery Entity: FacturaReporte
task.executeQuery.Q_FACTEEUR_OY44 = function(executeQueryEventArgs){
    
    let desde = executeQueryEventArgs.commons.api.vc.model.RangoFechas.fechaInicio;
    let hasta = executeQueryEventArgs.commons.api.vc.model.RangoFechas.fechaFin;
    executeQueryEventArgs.parameters.fechaInicio = desde;
    executeQueryEventArgs.parameters.fechaFin = hasta;
    
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.FacturaReporte = true;
};