
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: IngresarProductoForm
task.initData.VC_INGRESAROR_153407 = function (entities, initDataEventArgs){

    initDataEventArgs.commons.execServer = false;
    
    let viewState = initDataEventArgs.commons.api.viewState

    if(!entities.Producto.codigo) {
        viewState.show('VA_VABUTTONZZNRUDQ_359207');
        viewState.hide('VA_VABUTTONUQWOURI_965207');
    } else {
        viewState.hide('VA_VABUTTONZZNRUDQ_359207');
        viewState.show('VA_VABUTTONUQWOURI_965207');
    }
};