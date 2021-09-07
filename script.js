const nilai =["70", "75", "80", "85", "90", "95", "100"];

const tampilkan=()=> {
  var valueNilai = document.getElementById("nilai").value;
  var valueNama = document.getElementById("nama").value;
  (nilai.indexOf(valueNilai) >-1)?console.log(valueNama+" nilai kamu "+valueNilai+" : Lulus"):console.log(valueNama+" nilai kamu "+valueNilai+" : Maaf kamu belum lulus");
}