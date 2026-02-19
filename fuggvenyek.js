import { adatLista } from "./adat.js";

export function eredmenySzamolas(inputElem, eredmenyElem) {
    
    let szoveg=""
    switch (Number(inputElem.value)) {
    case 1:
        szoveg="Elégtelen"
        break;
    case 2:
        szoveg="Elégséges"
        break;
    case 3:
        szoveg="Közepes"
        break;
    case 4:
        szoveg="Jó"
        break;
    case 5:
        szoveg="Jeles"
        break;
    default:
        szoveg="HIBAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        break;
    }
    eredmenyElem.innerHTML=szoveg
}

function fv2() {

    let lista = {}
    for (let index = 0; index < 12; index++) {
        let vszam=Math.floor(Math.random()*111-10)
        lista += vszam
    }
}