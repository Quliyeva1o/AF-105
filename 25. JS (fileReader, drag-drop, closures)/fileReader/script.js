const addForm = document.querySelector("#add-form");
const fileInp = document.querySelector("input[type=file]");
const addBtn = document.querySelector(".add-btn");
const cardsRow = document.querySelector(".cards-row");

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const file = fileInp.files[0];
  const name = file.name;
  const size = Math.round(file.size / 1024);
  const type = file.type;

  if (!type.includes("image/")) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "File Type Invalid",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (size > 5000) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "File Size Error",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
      cardsRow.innerHTML += `  <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
            <div class="card">
                <div class="card-img-top">
                    <img src="${reader.result}" class="card-img-top" alt="${name}" title=${name}>
                </div>
                <div class="size">
                    ${size}KB
                </div>
            </div>
        </div>`;

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "File Added",
        showConfirmButton: false,
        timer: 1000,
      });
    };

    fileInp.value = "";
  }
});

const dropZone = document.querySelector(".drop-zone");

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  const reader = new FileReader();
  let dt = e.dataTransfer;
  let files = dt.files;
  console.log("items: ", dt.items);
  const size = Math.round(files[0].size / 1024);
  const name = files[0].name;
  reader.readAsDataURL(files[0]);
  reader.onloadend = function () {
    console.log("res:", reader.result);
    cardsRow.innerHTML += `  <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
            <div class="card">
                <div class="card-img-top">
                    <img src="${reader.result}" class="card-img-top" alt="${name}" title=${name}>
                </div>
                <div class="size">
                    ${size}KB
                </div>
            </div>
        </div>`;

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "File Added",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  fileInp.value = "";
});
