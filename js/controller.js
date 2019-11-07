const txtBuscar = $("#txtBuscar");
const contenido = $("#contenido");
const spanTotalRegistros = $("#total_registros");
const spanPagina = $("#pagina");
const spanTotalPaginas = $("#total_paginas");
const imgModal = $("#img-modal");
const url = "https://api.unsplash.com/search/photos";
const acceso = "&client_id=2b0349a9d235fdb6ee20e056a30d3dff501281073292b2ba1c443fc133e68d2a";
let pagina;
let termino = "";
let total_paginas;


