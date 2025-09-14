const obiect1 = { a: 1, b: 2 };
const obiect2 = { b: 3, c: 4 };
const obiect3 = { d: 5 };

function mergeObjects(obj, ...alteObj) {
    return { ...obj, ...alteObj.reduce((acc, curr) => ({ ...acc, ...curr }), {}) };
}

const rezultat = mergeObjects(obiect1, obiect2, obiect3);
console.log(rezultat);
