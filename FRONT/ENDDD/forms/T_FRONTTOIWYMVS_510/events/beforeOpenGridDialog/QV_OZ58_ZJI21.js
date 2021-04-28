
//beforeOpenGridDialog QueryView: QV_OZ58_ZJI21
//Evento que se ejecuta antes que una pantalla de inserción o edición de registros aparezca en un contenedor diferente.
task.beforeOpenGridDialog.QV_OZ58_ZJI21 = function (entities,beforeOpenGridDialogEventArgs) {

     beforeOpenGridDialogEventArgs.commons.execServer = false;
    console.log('otro');

};




