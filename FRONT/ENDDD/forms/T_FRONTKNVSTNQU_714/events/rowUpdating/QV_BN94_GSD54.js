
//gridRowUpdating QueryView: QV_BN94_GSD54
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowUpdating.QV_BN94_GSD54 = function (entities,gridRowUpdatingEventArgs) {

     gridRowUpdatingEventArgs.commons.execServer = true;
     //gridRowUpdatingEventArgs.commons.serverParameters.Cliente = true;

};




