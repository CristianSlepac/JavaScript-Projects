const produsA = { nume: "Laptop", pret: 3500 };
const produsB = { nume: "Laptop", pret: 3500 };

const suntEgale = (obj1, obj2) => {
    const chei1 = Object.keys(obj1);
    const chei2 = Object.keys(obj2);

    if (chei1.length !== chei2.length) return false;

    for (let cheie of chei1) {
        if (!(cheie in obj2)) return false;
        if (obj1[cheie] !== obj2[cheie]) return false;
    }

    return true;
}

const resultFromSuntEgale = suntEgale(produsA, produsB);

if(resultFromSuntEgale === true){
    console.log("produsA si produsB sunt egale !")
}
if(resultFromSuntEgale === false){
    console.log("produsA si produsB nu sunt egale !")
}



