function validar(){
    if(document.formulario.nombre.value.length == 0){
        Swal.fire({
            icon: 'warning',
            title: 'Por favor ingrese su nombre'
        })
        return 0 
    }

    if(document.formulario.email.value.length == 0){
        Swal.fire({
            icon: 'warning',
            title: 'Por favor ingrese su email'
        })
        return 0
    }

    if(document.formulario.consulta.value.length == 0){
        Swal.fire({
            icon: 'warning',
            title: 'Por favor ingrese su consulta'
        })
        return 0
    }

    Swal.fire({
        icon: 'success',
        title: 'Muchas gracias por enviar su consulta!'
    })

    formulario.reset();
}