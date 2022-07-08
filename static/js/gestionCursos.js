(function () {
    const btneliminar = document.querySelectorAll(".btneliminar");

    btneliminar.forEach(btn=>{
        btn.addEventListener('click',(e)=>{
            const confirmacion= confirm('¿Seguro de borrar el libro?');
            if(!confirmacion){
                e.preventDefault();
            }
        });
    });
     
})();