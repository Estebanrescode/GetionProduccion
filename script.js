
let categoriaMuebles = 5;
let categoriaElectronica = 3;
let categoriaTextiles = 2;
let totalMuebles = 0, totalElectronica = 0, totalTextiles = 0;
let totalMueblesOperario = 0, totalElectronicaOperario = 0, totalTextilesOperario = 0;
let totalBonos = 0;
let operarioConMasProduccion = "";
let maxProduccion = 0;
let categoriaMasFabricada = "";
let produccionMuebles = 0, produccionElectronica = 0, produccionTextiles = 0;
let operarioNombre = "";
let seguir = true;

while (seguir) {

    operarioNombre = prompt("Ingrese el nombre del operario:");

    let muebles = 0, electronica = 0, textiles = 0;

    muebles = parseInt(prompt("¿Cuántos muebles fabrico?"));
    electronica = parseInt(prompt("¿Cuántos productos electricos fabrico?"));
    textiles = parseInt(prompt("¿Cuántos productos textiles fabrico?"));

    let bonoMuebles = muebles * categoriaMuebles;
    let bonoElectronica = electronica * categoriaElectronica;
    let bonoTextiles = textiles * categoriaTextiles;
    let bonoTotal = bonoMuebles + bonoElectronica + bonoTextiles;

    totalMuebles += muebles;
    totalElectronica += electronica;
    totalTextiles += textiles;
    totalBonos += bonoTotal;

    let totalProduccionOperario = muebles + electronica + textiles;
    if (totalProduccionOperario > maxProduccion) {
        maxProduccion = totalProduccionOperario;
        operarioConMasProduccion = operarioNombre;
    }

    produccionMuebles += muebles;
    produccionElectronica += electronica;
    produccionTextiles += textiles;

    if (produccionMuebles > produccionElectronica && produccionMuebles > produccionTextiles) {
        categoriaMasFabricada = "Muebles";
    } else if (produccionElectronica > produccionMuebles && produccionElectronica > produccionTextiles) {
        categoriaMasFabricada = "Electrónica";
    } else if (produccionTextiles > produccionMuebles && produccionTextiles > produccionElectronica) {
        categoriaMasFabricada = "Textiles";
    }

    alert("Operario: " + operarioNombre);
    alert("Bonos por muebles: $" + bonoMuebles);
    alert("Bonos por electrónica: $" + bonoElectronica);
    alert("Bonos por textiles: $" + bonoTextiles);
    alert("Total de bonos: $" + bonoTotal);

    let continuar = prompt("¿Desea registrar otro operario? (Sí/No)").toLowerCase();
    if (continuar !== "sí" && continuar !== "si") {
        seguir = false;
    }
}

alert("Resumen final de la producción:");
alert("Total de productos fabricados: Muebles: " + totalMuebles + ", Electrónica: " + totalElectronica + ", Textiles: " + totalTextiles);
alert("Total de bonos generados: $" + totalBonos);
alert("Operario con más producción: " + operarioConMasProduccion + " con " + maxProduccion + " productos fabricados.");
alert("Categoría de productos más fabricada: " + categoriaMasFabricada);
