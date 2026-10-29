
function kirimPesan(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value;

  alert(`Terima kasih ${nama}, pesan Anda berhasil terkirim!`);

  event.target.reset();
}

function beli(namaProduk) {
  alert(`Produk "${namaProduk}" berhasil ditambahkan ke keranjang!`);
}

// Upload foto utama dan foto produk
function previewImage(input, targetId) {
  const file = input.files?.[0];

  if (!file) return;

  if (!file.type.startsWith("image/")) {
    alert("Silakan pilih file gambar yang valid.");
    input.value = "";
    return;
  }

  const reader = new FileReader();

  reader.onload = function (event) {
    document.getElementById(targetId).src =
      event.target.result;
  };

  reader.readAsDataURL(file);
}

document.getElementById("heroUpload").addEventListener("change", function () {
  previewImage(this, "heroImage");
});

document.getElementById("productUpload").addEventListener("change", function () {
  const nomorProduk =
    document.getElementById("productSelect").value;

  previewImage(this, `productImage${nomorProduk}`);
});

// Pengaturan warna website
const pengaturanWarna = [
  ["bgColor", "--page-bg"],
  ["headerColor", "--header-bg"],
  ["footerColor", "--footer-bg"],
  ["accentColor", "--pink-primary"]
];

pengaturanWarna.forEach(([id, variabel]) => {
  const input = document.getElementById(id);

  input.addEventListener("input", function () {
    document.documentElement.style.setProperty(
      variabel,
      this.value
    );
  });
});

// Reset warna ke pengaturan awal
document.getElementById("resetSettings").addEventListener("click", function () {
  const warnaAwal = {
    bgColor: "#fff7fb",
    headerColor: "#ffffff",
    footerColor: "#3d2434",
    accentColor: "#e84393"
  };

  pengaturanWarna.forEach(([id]) => {
    const input = document.getElementById(id);

    input.value = warnaAwal[id];
    input.dispatchEvent(new Event("input"));
  });
});
