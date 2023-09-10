function home(){
    location.href="http://127.0.0.1:5000/aether/";
}

function sales(){
    location.href="http://127.0.0.1:5000/aether/sales";
}

function bulk(){
    location.href="http://127.0.0.1:5000/aether/bulk";
}

function balance(){
    location.href="http://127.0.0.1:5000/aether/balance";
}

function contacts(){
    location.href="http://127.0.0.1:5000/aether/contacts";
}

function account(){
    location.href="http://127.0.0.1:5000/aether/account";
}

function enter(){
    var id_name = document.getElementById("name").value;
    var id_pass = document.getElementById("pass").value;
    console.log(id_name);
    console.log(id_pass);
}

function contact_store(){
    var name = document.getElementById("namea").value;
    var contact = document.getElementById("cont").value;
    console.log(name);
    console.log(contact);
}

function update(){
    var bal = 1000
    document.getElementById("update_display").html = bal
}
