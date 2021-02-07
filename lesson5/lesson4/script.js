function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}

try {
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', options);
} catch (e) {
    alert('Error with code or your browser does not support Locale');
}

pancake_day = days[d.getDay()]
console.log(pancake_day)

if (pancake_day == "Friday") {

    var newItem = document.createElement("p");
    newItem.setAttribute("id", "pancake");
    var textnode = document.createTextNode("Saturday = Preston Pancakes in the Park! 9:00 a.m.");
    newItem.appendChild(textnode);

    var list = document.getElementById("header");
    list.insertBefore(newItem, list.childNodes[0]);



}


