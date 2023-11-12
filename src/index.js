let nomeHeroi = "Igor Diniz"
let experienciaXp = 20000
let nivel

switch (true){
    case experienciaXp <= 1000:
    nivel = "Ferro"
    break 

    case experienciaXp  <=2000:
    nivel = "Bronze"
    break

    case experienciaXp  <=5000:
    nivel = "Prata"
    break

    case experienciaXp  <=7000:
    nivel = "Ouro"
    break

    case experienciaXp  <=8000:
    nivel = "Platina"
    break

    case experienciaXp  <=9000:
    nivel = "Ascendente"
    break

    case experienciaXp  <=10000:
    nivel = "Imortal"
    break

    case experienciaXp  <=10001:
    nivel = "Radiante"
    break

    default:
        nivel = "nivel indefinido"

    }
console.log("O heroi de Nome " + nomeHeroi + " possui o nivel de " + nivel + " em Xp")