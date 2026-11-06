function generateNumber() {

    const min = Math.ceil(document.getElementById('minimo').value);
    const max = Math.floor(document.getElementById('maximo').value);


    if (min >= max) {
        alert("O valor mínimo deve ser menor que o valor máximo.");
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        alert(result);
    }
}