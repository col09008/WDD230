let speed = parseFloat(document.getElementById("windSpeed").innerHTML)
let tempf = parseFloat(document.getElementById("temperature").innerHTML)
if ( speed>3.0 && tempf<=50) {

    let windChill = 35.74 + 0.6215 * tempf - 35.75 * speed ** 0.16 + 0.4275 * tempf * speed ** 0.16;
    document.getElementById("chilly").innerHTML = parseInt(windChill)

} else {

    document.getElementById("chilly").innerHTML = "N/A"

}