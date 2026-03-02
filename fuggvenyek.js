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

// 2. feladat - random
export function veletlenLista() {
    let lista = [];
    for (let i = 0; i < 12; i++) {
        let vszam = Math.floor(Math.random() * 111-10);
        lista.push(vszam);
    }
    return lista;
}

//2 . feladat 
export function listaKiir(lista, asideElem) {
    asideElem.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        let div = document.createElement("div");
        div.classList.add("kor");
        div.textContent = lista[i];
        asideElem.appendChild(div);
    }
}

//3. feladat
export function tablazat(lista, articleElem) {
    let tabla = "<table>";
    for (let i = 0; i < lista.length; i++) {
        tabla += "<tr><td>" + lista[i].nev + "</td><td>" + lista[i].atlag + "</td></tr>";
    }
    tabla += "</table>";

    articleElem.innerHTML = tabla;
}