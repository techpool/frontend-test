openTab("places-cards");

function openTab(tabname) {
    var i;
    var x = document.getElementsByClassName("tab-element");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(tabname).style.display = "block"; 
    console.log("hi")
}

var list = document.getElementsByClassName('card');

for (var i = 0; i < list.length; i++) {
	var src = list[i].getAttribute('data-image');
	list[i].style.backgroundImage="url('" + src + "')";
}