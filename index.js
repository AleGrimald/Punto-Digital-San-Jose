let principal = document.querySelector(".contenedor_principal");
const datos=[
    {
        nombre:"Neri, Peñaloza",
        foto:"./assets/neri.jpeg",
        proyecto:"./neri/index.html"
    },
    {
        nombre:"Rocio Ailen, Aguero Sosa",
        foto:"./assets/rocio.jpeg",
        proyecto:"./rocio/index.html"
    },
    {
        nombre:"Alan Gabriel, Sosa Albarracin",
        foto:"./assets/alan.jpeg",
        proyecto:"./alan/index.html"
    },
    {
        nombre:"Lorenzo, Delgado",
        foto:"./assets/lorenzo.jpeg",
        proyecto:"./lorenzo/index.html"
    },
    ,
    {
        nombre:"Tadeo, Reyes",
        foto:"./assets/tadeo.jpeg",
        proyecto:"./tadeo/index.html"
    },
    
];

datos.map(dat=>{
    principal.innerHTML +=`
    <article class="contenedor_alumno">
        <div class="alumno_nombre_img">
            <h2 class="nombre">${dat.nombre}</h2>
            <img class="imagen" src="${dat.foto}" alt="">
        </div>
        <div class="alumno_proyecto">
            <a class="proyecto_btn_a" href="${dat.proyecto}">Proyecto</a>
        </div>
    </article>
`
});
