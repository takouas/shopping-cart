
const arrayAdd = Array.from(document.getElementsByClassName('btnAdd'))
const arrayPrice = Array.from(document.getElementsByClassName('shop-item-price'))
const arrayProduit = Array.from(document.getElementsByClassName('card-title'))

const arrayQuantiteProduit = Array.from(document.getElementsByClassName('quantite'))

const imageDelet = Array.from(document.getElementsByClassName('imageDelet'))
const elementProduit = Array.from(document.getElementsByClassName("elementProduit"))
const elementPrix = Array.from(document.getElementsByClassName("elementPrix"))


const arrayMoins = Array.from(document.getElementsByClassName('delete'))
const totalSomme = document.getElementById('somme')
const totalCount = document.getElementById('shopping')
let total = 0;
for (let i = 0; i < arrayAdd.length; i++) {

    arrayAdd[i].addEventListener('click', function () {
        totalCount.style.listStyle = "none";

        shopping.innerHTML++
        arrayQuantiteProduit[i].innerHTML++

        total += Number(arrayPrice[i].innerHTML)
        totalSomme.innerHTML = total

        totalCount.style.display = "inline";
        totalSomme.style.display = "inline";

        arrayQuantiteProduit[i].style.visibility = "visible";
        elementProduit[i].style.visibility = "visible";
        elementPrix[i].style.visibility = "visible";
        imageDelet[i].style.visibility = "visible";
    })
}

for (let j = 0; j < arrayMoins.length; j++) {
    arrayMoins[j].addEventListener('click', function () {


        if (arrayQuantiteProduit[j].innerHTML > 0) {
            arrayQuantiteProduit[j].innerHTML--
            totalCount.innerHTML--
            total -= Number(arrayPrice[j].innerHTML)
            totalSomme.innerHTML = total
        }
        if (arrayQuantiteProduit[j].innerHTML == 0) {
            arrayQuantiteProduit[j].style.visibility = "hidden";
            elementProduit[j].style.visibility = " hidden";
            elementPrix[j].style.visibility = " hidden";
            imageDelet[j].style.visibility = " hidden";

        }

    })
}


function reloadPage() {
    window.location.reload()
}



