fetch("{{ url_for('static', filename = '/users.json')}}")

function home(){
    location.href="http://127.0.0.1:3000/aether/";
}

function sales(){
    location.href="http://127.0.0.1:3000/aether/sales";
}

function bulk(){
    location.href="http://127.0.0.1:3000/aether/bulk";
}

function balance(){
    location.href="http://127.0.0.1:3000/aether/balance";
}

function contacts(){
    location.href="http://127.0.0.1:3000/aether/contacts";
}

function account(){
    location.href="http://127.0.0.1:3000/aether/account";
}

function enter(){
    var id_name = document.getElementById("name").innerHTML;
    var id_pass = document.getElementById("pass").innerHTML;
    JSON.stringify(id_name);
    JSON.stringify(id_pass);
    location.href = "http://127.0.0.1:3000/aether/"
}

