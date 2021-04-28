
//gridRowInserting QueryView: 
//Se ejecuta antes de que los datos insertados en una grilla sean comprometidos.
task.gridRowInserting.QV_OZ58_ZJI21 = function (entities,gridRowInsertingEventArgs) {

     gridRowInsertingEventArgs.commons.execServer = false;
    console.log('row inserting');
};




