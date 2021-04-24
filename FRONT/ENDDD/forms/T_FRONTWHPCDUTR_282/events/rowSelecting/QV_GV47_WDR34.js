
//gridRowSelecting QueryView: QV_GV47_WDR34
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_GV47_WDR34 = function (entities, gridRowSelectingEventArgs) {

     gridRowSelectingEventArgs.commons.execServer = false;
    let nav = args.commons.api.navigation; 
    nav.closeModal({response1: "RESPONSE_VALUE1"}); 

};




