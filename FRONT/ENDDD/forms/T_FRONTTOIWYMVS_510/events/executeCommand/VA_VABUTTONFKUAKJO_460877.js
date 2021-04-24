

//Entity: Factura
//Factura. (Button) View: FacturacionForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONFKUAKJO_460877 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    //executeCommandEventArgs.commons.serverParameters.Factura = true;
    var nav = executeCommandEventArgs.commons.api.navigation;
    
    // seteando los argumentos para que abrir BuscarClienteForm(modal)
    nav.address =  {
        moduleId: "FRONT",
        subModuleId: "ENDDD",
        taskId: "T_FRONTWHPCDUTR_282",
        taskVersion: "1.0.0",
        viewContainerId: "VC_BUSCARCLEE_181282",
        title: "FRONT.LBL_FRONT_BUSCARCSL_31188",
        size: 'md'
    }
    
    // abriendo el 
    nav.openModalWindow("VA_VABUTTONFKUAKJO_460877", null);

};