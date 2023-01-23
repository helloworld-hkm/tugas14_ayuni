window.fn = {};
window.fn.open = function () {
    var menu = document.getElementById('menu');
    menu.open();
  };
  
  window.fn.load = function(page) {
    var content = document.getElementById('content');
    var menu = document.getElementById('menu');
    content.load(page)
      .then(menu.close.bind(menu));
  };

function simpan() {
    var id = document.getElementById('id').value;
      var nama = document.getElementById('Batik').value;
      var size = document.getElementById('Size').value;
      var pilihan_warna=document.getElementById("Pilihan_Warna").value;
      var total=0;
     
      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let tanggal = `${day}-${month}-${year}`;
      var jumlah = document.getElementById('jumlah').value;
      var jml=parseInt(jumlah);
       if (size=="M") {
        total =48000*jml;
      }else if (size=="L") {
        total =52000*jml;
      }else if (size=="XL") {
        total =63000*jml;
      }else if (size=="XXL") {
        total =74000*jml;
      }else if (size=="XXXL") {
        total =87000*jml;
      }
      localStorage.setItem("id", id);
      localStorage.setItem("nama", nama);
      localStorage.setItem("size", size);
      localStorage.setItem("jumlah", jumlah);
      localStorage.setItem("tanggal",tanggal);
      localStorage.setItem("total",total);
      localStorage.setItem("warna",pilihan_warna);
      document.getElementById('tabbar').setActiveTab(1);
      fn.load('shop.html')
}
  
