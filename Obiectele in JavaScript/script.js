const magazin = {
  produs1: { nume: "Lapte", pret: 25 },
  produs2: { nume: "Paine", pret: 10 },
  produs3: { nume: "Oua", pret: 30 }
};

console.log(magazin.produs2.nume);

magazin.produs3.pret = 28;
magazin.produs4 = {nume:"Cafea", pret: 45}

for(const el in magazin){
    console.log(`Produs: ${magazin[el].nume} - ${magazin[el].pret} lei`);
}