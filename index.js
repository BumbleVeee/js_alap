import { adatLista } from "./adat.js";
import { eredmenySzamolas } from "./fuggvenyek.js";

let gombElem = document.getElementById("gomb")
let inputElem = document.getElementById("ertekeles")
let eredmenyElem = document.getElementById("eredmeny")

gombElem.addEventListener("click", fv)

function fv() {
    eredmenySzamolas(inputElem, eredmenyElem)
}