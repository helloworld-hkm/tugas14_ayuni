if(window.openDatabase){
    var mydb = openDatabase("Batik", '1.0', "WebSQL Database", 2 * 1024 * 1024);
    mydb.transaction(function(tx){
      tx.executeSql("create table if not exists user(username varchar(25) primary key, password varchar(25))");
      tx.executeSql("insert into user values ('nyuni', 'haii')");
    });
  }else{
    alert("Browser tidak mendukung WebSQL");
  }
  
  function login(){
    var username = document.getElementById("username").value;
    mydb.transaction(function(tx){
      tx.executeSql("select * from user where username = ?", [username], validasi);
    });
    }

    function validasi(transaction, results){
      var pass = document.getElementById("password").value;
    if(results.rows.length == 0){
      alert("username salah");
    }else{
      var row = results.rows.item(0);
      if(row.password == pass){
        myNavigator.pushPage('homepage');
      }else{
        alert("Password salah");
      }
    }
    reset();
  }
  
  function reset(){
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }

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
  
