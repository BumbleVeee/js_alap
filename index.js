import { adatLista } from "./adat.js";
import { 
    eredmenySzamolas, 
    veletlenLista, 
    listaKiir, 
    tablazat,
} from "./fuggvenyek.js";

let gombElem = document.getElementById("gomb")
let tesztGomb = document.getElementById("tesztGomb");
let tablagomb = document.getElementById("tablaGomb");

let inputElem = document.getElementById("ertekeles")
let eredmenyElem = document.getElementById("eredmeny")
let asideElem = document.getElementById("szamok");
let articleElem = document.getElementById("tablazat");

gombElem.addEventListener("click", fv)
tesztGomb.addEventListener("click", fvTeszt);
tablagomb.addEventListener("click", tablazatTeszt);

function fv() {
    eredmenySzamolas(inputElem, eredmenyElem);
    let lista = veletlenLista();
    //tablaKiir(adatLista, articleElem);
}

function fvTeszt() {
    let lista = veletlenLista();
    listaKiir(lista, asideElem);
}

function tablazatTeszt() {
    let lista = adatLista;
    tablazat(lista, articleElem);
}