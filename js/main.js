// This code makes use of ping.js
// which is a small library which makes pings in JS
// It can be found on github


// Ping google.com
doPing("http://google.com", "ping-google");

// Bind submit event to form
var form = document.getElementById('ping_form');
form.addEventListener('submit', ping_url, false);

// function to evaluate and send ping
function ping_url(e) {
    e.preventDefault();
    var value = document.getElementById('url').value;
    if(typeof value != 'undefined') {
        doPing(value, "test-ping");
    }
}

// function which actually does the ping
function doPing(url, id) {
    var p = new Ping();

    p.ping(url, function(err, data) {
        if(err) {
            console.log("error loading resource");
            data = data + " " + err;
        }
        document.getElementById(id).innerHTML = data;
    });
}