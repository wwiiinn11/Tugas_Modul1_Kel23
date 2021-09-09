const nilai =["70", "75", "80", "85", "90", "95", "100"];
const fungsiAwait= async ()=> {
await showNilai ();
await tambahan();
}


const showNilai=()=> {
  var valueNilai = document.getElementById("nilai").value;
  var valueNama = document.getElementById("nama").value;
  (nilai.indexOf(valueNilai) >-1)?console.log(valueNama+" nilai kamu "+valueNilai+" : Selamat Kamu Lulus"):console.log(valueNama+" nilai kamu "+valueNilai+" : Maaf kamu belum lulus");
}


const tambahan=()=> {
  var valueNilai = document.getElementById("nilai").value;
  (nilai.indexOf(valueNilai) >-1)?console.log("Perhatankan!"):console.log("Yuk bisa yuk!");
}