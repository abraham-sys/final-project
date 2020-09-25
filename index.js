let inputBaru1 = document.createElement("input");
inputBaru1.type = "number";
inputBaru1.setAttribute("id", "input-1");

let inputBaru2 = document.createElement("input");
inputBaru2.type = "number";
inputBaru2.setAttribute("id", "input-2");

let inputBaru3 = document.createElement("input");
inputBaru3.type = "submit";
inputBaru3.value = "gambar!";
inputBaru3.setAttribute("id", "input-3");

let output = "";

document.getElementById("circle").onclick = instructionCircle;

function instructionCircle() {
  document.getElementById("instruct").innerHTML =
    "You chose circle! Next, input this number so we can draw it out for you:";

  document.getElementById("p-1").innerHTML = "Diameter: ";
  document.getElementById("p-1").appendChild(inputBaru1);
  document.getElementById("p-1").appendChild(inputBaru3);

  output = "circle";
}

document.getElementById("triangle").onclick = instructionTriangle;

function instructionTriangle() {
  document.getElementById("instruct").innerHTML =
    "You chose triangle! Next, input these numbers so we can draw it out for you:";

  document.getElementById("p-1").innerHTML = "Alas: ";
  document.getElementById("p-1").appendChild(inputBaru1);

  document.getElementById("p-2").innerHTML = "Tinggi: ";
  document.getElementById("p-2").appendChild(inputBaru2);
  document.getElementById("p-2").appendChild(inputBaru3);

  output = "triangle";
}

document.getElementById("rectangle").onclick = instructionRectangle;

function instructionRectangle() {
  document.getElementById("instruct").innerHTML =
    "You chose rectangle! Next, input these numbers so we can draw it out for you:";

  document.getElementById("p-1").innerHTML = "Panjang: ";
  document.getElementById("p-1").appendChild(inputBaru1);

  document.getElementById("p-2").innerHTML = "Lebar: ";
  document.getElementById("p-2").appendChild(inputBaru2);
  document.getElementById("p-2").appendChild(inputBaru3);

  output = "rectangle";
}

if (output === "circle") {
  document.getElementById("input-3").onclick = gambarLingkaran;

  function gambarLingkaran() {
    let diameter = document.getElementById("input-1").value;

    let circum = diameter * 100;

    document.getElementById("display-shape").style.width = `${circum}px`;
    document.getElementById("display-shape").style.height = `${circum}px`;

    document.getElementById("shape").style.backgroundColor = "white";
    document.getElementById("shape").style.border = "thick solid red";
    document.getElementById("shape").style.animation = "animate 4s 2";
    document.getElementById("shape").style.borderRadius = "50%";
  }
} else if (output === "triangle") {
  document.getElementById("input-3").onclick = gambarSegitiga;

  function gambarSegitiga() {
    let alas = document.getElementById("input-1").value;
    let tinggi = document.getElementById("input-2").value;

    let hitungan;

    if (alas > tinggi) hitungan = Math.ceil(alas / tinggi);
    else hitungan = Math.ceil(tinggi / alas);

    let circum = hitungan * 100;

    document.getElementById("display-shape").style.width = `${circum}px`;
    document.getElementById("display-shape").style.height = `${circum}px`;

    document.getElementById("shape").style.backgroundColor = "white";
    document.getElementById("shape").style.border = "thick solid red";
    document.getElementById("shape").style.animation =
      "animate 4s linear forwards";
  }
} else if (output === "rectangle") {
  document.getElementById("input-3").onclick = gambarRectangle;

  function gambarRectangle() {
    let panjang = document.getElementById("input-1").value;
    let lebar = document.getElementById("input-2").value;

    let hitungan;

    if (panjang > lebar) hitungan = Math.ceil(panjang / lebar);
    else hitungan = Math.ceil(lebar / panjang);

    let circum = hitungan * 100;

    document.getElementById("display-shape").style.width = `${circum}px`;
    document.getElementById("display-shape").style.height = `${circum}px`;

    document.getElementById("shape").style.backgroundColor = "white";
    document.getElementById("shape").style.border = "thick solid red";
    document.getElementById("shape").style.animation = "animate 4s 2";
  }
}
