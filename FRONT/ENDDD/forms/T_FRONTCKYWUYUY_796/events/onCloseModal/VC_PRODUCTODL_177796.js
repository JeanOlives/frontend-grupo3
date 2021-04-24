
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: ProductoForm
task.onCloseModalEvent = function (entities, onCloseModalEventArgs){

    onCloseModalEventArgs.commons.execServer = false;
    if(onCloseModalEventArgs.closedViewContainerId == 'VC_INGRESAROR_153407'){
        onCloseModalEventArgs.commons.api.grid.refresh('QV_VD43_EWG54');
    }
};