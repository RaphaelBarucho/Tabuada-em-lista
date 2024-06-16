function enviar() {
  let valorpn = document.getElementById("primeiroNumero").value;

  if (valorpn === '') {
    window.alert("você não colocou nenhum valor, digite um valor!");
  } else {
    resultado1 = valorpn * 1
    resultado2 = valorpn * 2
    resultado3 = valorpn * 3
    resultado4 = valorpn * 4
    resultado5 = valorpn * 5
    resultado6 = valorpn * 6
    resultado7 = valorpn * 7
    resultado8 = valorpn * 8
    resultado9 = valorpn * 9
    resultado10 = valorpn * 10

    let option = document.getElementsByClassName("option");

    option[0].innerText = `${valorpn} x 1 = ${resultado1}`
    option[1].innerText = `${valorpn} x 2 = ${resultado2}`
    option[2].innerText = `${valorpn} x 3 = ${resultado3}`
    option[3].innerText = `${valorpn} x 4 = ${resultado4}`
    option[4].innerText = `${valorpn} x 5 = ${resultado5}`
    option[5].innerText = `${valorpn} x 6 = ${resultado6}`
    option[6].innerText = `${valorpn} x 7 = ${resultado7}`
    option[7].innerText = `${valorpn} x 8 = ${resultado8}`
    option[8].innerText = `${valorpn} x 9 = ${resultado9}`
    option[9].innerText = `${valorpn} x 10 = ${resultado10}`
  }
}
