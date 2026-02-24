import { adatLista } from "./adat.js";
import { 
    eredmenySzamolas, 
    veletlenLista, 
    listaKiir, 
} from "./fuggvenyek.js";

let gombElem = document.getElementById("gomb")
let tesztGomb = document.getElementById("tesztGomb");

let inputElem = document.getElementById("ertekeles")
let eredmenyElem = document.getElementById("eredmeny")
let asideElem = document.getElementById("szamok");
let articleElem = document.getElementById("tablazat");

gombElem.addEventListener("click", fv)
tesztGomb.addEventListener("click", fvTeszt);

function fv() {
    eredmenySzamolas(inputElem, eredmenyElem);
    let lista = veletlenLista();
    //tablaKiir(adatLista, articleElem);
}

function fvTeszt() {
    let lista = veletlenLista();
    listaKiir(lista, asideElem);
}