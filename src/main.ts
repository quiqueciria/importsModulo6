import { partida } from "./modelo";
import { generarNumeroAleatorio } from "./motor";
import { handleCompruebaClick, muestraNumeroDeIntentos } from "./ui";

partida.numeroParaAcertar = generarNumeroAleatorio();

document.addEventListener("DOMContentLoaded", muestraNumeroDeIntentos);

const botonComprobar = document.getElementById("comprobar");
botonComprobar?.addEventListener("click", handleCompruebaClick);
