function sumarCuadros(arrayNumeros) {
    let sumaTotal = 0;

    arrayNumeros.forEach(numero => {
        sumaTotal += numero;
        const numeroStr = numero.toString();

        console.log(`+${'-'.repeat(numeroStr.length)}+`);
        console.log(`| ${numeroStr} |`);
        console.log(`+${'-'.repeat(numeroStr.length)}+`);
    });

 
    const sumaStr = sumaTotal.toString();
    console.log(`+${'='.repeat(sumaStr.length)}+`);
    console.log(`| ${sumaStr} |`);
    console.log(`+${'='.repeat(sumaStr.length)}+`);
}

const arrayNumeros = [1, 23, 453, 3267, 12354, 123456];
sumarCuadros(arrayNumeros);
