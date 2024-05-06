
/*let r = true*/
/*

let r = 45 == 45?true:false

document.write(r)*/

/*
let arrayObject =[45,78,'salom','matn',true,false,'Javascript','olma',125];

let oddiyObject = {ism: "islom",yoshi:18, mahallasi:"oltintopgan", dosti:"sardor"}
*/

/*
console.log(oddiyObject.ism, oddiyObject.yoshi)
*/


/*
function savatchaniTekshirdik(UzatilganContainer=[12,"text",true,false,80]) {
    if (UzatilganContainer.length == 0){
        document.write("savachaning ichida " + UzatilganContainer.length + " dona malumot bor")
    }else {
        document.write("savachaning ichida " + UzatilganContainer.length + " ta malumot bor")
    }
}
let container = [12,17,"matn",true];
savatchaniTekshirdik()*/

let sana = new Date ();

sana.setFullYear(2009)
sana.setMonth(9)
sana.setDate(5)

let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftakuni = sana.getDay();

let oylar = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentyabr", "oktyabr", "noyabr", "dekabr"]
let kunlar =["yakshanba", "dushanba", "seyshanba", "chorshamba", "payshanba", "juma", "shanba"]

document.write("bugun " + yil + "-yil " + oylar[oy] + "ning " + kun + "-kuni.Haftaning " + kunlar[haftakuni] + " kuni.")