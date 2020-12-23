/**
 * YEDEK PARCACI KEREM
 * Yedek parcaci Kerem'in aldigi yedek parcalar bir karisik ve düzensiz olarak bir arrayde toplanmistir.
 * Bu Array'deki parca isimlerine asagidaki islemler uygulanacaktir.
 * 1. Parca isimleri büyük harflere cevrilecek,
 * 2. Parca isimlerinden sayilar cikartilacak,
 * 3. Parca isimleri tersine cevrilecek,
 * 4. Her parcanin basina KEREMAG_ eklenecek,
 * 5. Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir.
 */

let autoSparePartsList = ["Radyatör23", "Sanziman34", "Filtre3", "Direksiyon5", "Kaporta2", "ayna09"]
/**
 * Parca isimlerini büyük harfe ceviren fonksiyon
 * @param {*} pSparePartList 
 */
function doUpperCase(pSparePartList) {
    let upperCasePartsList = pSparePartList.map(part => part.toUpperCase())
    return upperCasePartsList
}
/**
 * Parca isimlerinden sayilari cikaran fonksiyon
 * @param {*} pPartList 
 */
function doWithoutNumberPartList(pPartList){
let withoutNumberPartList =[]
pPartList.map(part => {
    withoutNumberPartList.push(part.replace(/[0-9]/g,""))
})
return withoutNumberPartList
}
/**
 * Parcalari ters ceviren fonksiyon
 * @param {*} pPartList 
 */
function reverseParts(pPartList) {
    let reversePartList = []
    pPartList.map(part => {
    reversePartList.push(part.split("").reverse().join(""))
    })
    return reversePartList
}
/**
 * Parcalarin Basina Marka ekleyen Fonksiyon
 * @param {*} pPartList 
 */
function addBrand (pPartList){
    let addedBrandPartList= pPartList.map(part=> "KEREMAG_"+part)
    return addedBrandPartList   
}
/**
 * Tarih ekleyen fonksiyon
 * @param {*} pPartList 
 */
function addDate (pPartList){
  let addedDatePartList= pPartList.map(part=>part+" "+Date())  
  return addedDatePartList
}

let upperCasePartList = doUpperCase(autoSparePartsList)
let withoutNumberPartList = doWithoutNumberPartList(upperCasePartList)
let reversePartList = reverseParts(withoutNumberPartList)
let addedBrandPartList= addBrand(reversePartList)
let addedDatePartList = addDate(addedBrandPartList)

//Düzenlenmis Parca Listesinin Konsola Yazdirilmasi
console.log(addedDatePartList)






