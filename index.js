const sizeInputShape = document.querySelector("#size-input");
const shapeMaker = document.querySelector("#shape-maker");

const circle = document.getElementById("circle");
const triangle = document.getElementById("triangle");
const rectangle = document.getElementById("rectangle");

circle.addEventListener("click", function () {
  sizeInputShape.innerHTML = `<p>Diameter: <input id="diameter" type="number" min="1"> <input id="gambar" type="submit" value="gambar!"></p>`;

  const gambar = document.getElementById("gambar");

  gambar.addEventListener("click", function () {
    const diameter = document.getElementById("diameter").value;

    shapeMaker.style.margin = "50px auto";
    shapeMaker.style.border = "none";
    shapeMaker.style.backgroundColor = "#32e0c4";
    shapeMaker.style.width = `${diameter * 100}px`;
    shapeMaker.style.height = `${diameter * 100}px`;
    shapeMaker.style.borderRadius = "50%";
    shapeMaker.animate(
      [
        { width: "0", height: "0" },
        { width: `${diameter * 100}px`, height: `${diameter * 100}px` },
      ],
      {
        duration: 2000,
      }
    );
  });
});

triangle.addEventListener("click", function () {
  sizeInputShape.innerHTML = `<p>Alas: <input id="alas" type="number" min="1"> Tinggi: <input id="tinggi" type="number" min="1"> <input id="gambar" type="submit" value="gambar!"></p>`;

  const gambar = document.getElementById("gambar");

  gambar.addEventListener("click", function () {
    const alas = document.getElementById("alas").value;
    const tinggi = document.getElementById("tinggi").value;

    shapeMaker.style.borderRadius = "0";
    shapeMaker.style.margin = "50px auto";
    shapeMaker.style.width = "0";
    shapeMaker.style.height = "0";
    shapeMaker.style.backgroundColor = "white";
    shapeMaker.style.borderBottom = `${alas * 100}px solid #F2E86D`;
    shapeMaker.style.borderLeft = `${tinggi * 50}px solid transparent`;
    shapeMaker.style.borderRight = `${tinggi * 50}px solid transparent`;
    shapeMaker.animate(
      [
        {
          borderLeft: "0px solid transparent",
          borderRight: "0px solid transparent",
          borderBottom: "0px solid #F2E86D",
        },
        {
          borderLeft: `${tinggi * 50}px solid transparent`,
          borderRight: `${tinggi * 50}px solid transparent`,
          borderBottom: `${alas * 100}px solid #F2E86D`,
        },
      ],
      {
        duration: 2000,
      }
    );
  });
});

rectangle.addEventListener("click", function () {
  sizeInputShape.innerHTML = `<p>Panjang: <input id="panjang" type="number" min="1"> Lebar: <input id="lebar" type="number" min="1"> <input id="gambar" type="submit" value="gambar!"></p>`;

  const gambar = document.getElementById("gambar");

  gambar.addEventListener("click", function () {
    const panjang = document.getElementById("panjang").value;
    const lebar = document.getElementById("lebar").value;

    shapeMaker.style.margin = "50px auto";
    shapeMaker.style.border = "none";
    shapeMaker.style.backgroundColor = "#a2d5f2";
    shapeMaker.style.width = `${panjang * 100}px`;
    shapeMaker.style.height = `${lebar * 100}px`;
    shapeMaker.style.borderRadius = "0";
    shapeMaker.animate(
      [
        { width: "0", height: "0" },
        { width: `${panjang * 100}px`, height: `${lebar * 100}px` },
      ],
      {
        duration: 2000,
      }
    );
  });
});
