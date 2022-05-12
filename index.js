class nave {
    constructor(name, numeroDeTripulantes) {
        this.name = name
        this.peoplequantity = numeroDeTripulantes
        this.engate = "false"
        this.doorStatus = "true"
    }

}

let listaNaves = []

function showMenu() {
    let option
    while (option != "1" && option != "2" && option != "3") {
        option = prompt('[1] Realizar engate' +
        '\n[2] Imprimir naves' +
        '\n[3] Sair do Programa')
    return option
 }
}




do{
    option = showMenu()
    switch (option) {
        case "1":
            let naveNome = prompt("Digite o nome da nave")
            let quantidadeDePessoas = prompt("Digite a quantidade de Tripulantes")
            const NaveEspacial = new nave(naveNome, quantidadeDePessoas)
            NaveEspacial.engate = "true"
            NaveEspacial.doorStatus = "false"
            listaNaves.push(NaveEspacial)
            break
        case "2":
            alert(listaNaves.map(item => item.name))
            break
        case "3":
            alert("Sair do Programa")
            break
        default:
            showMenu()
        }
}while (option != "3")