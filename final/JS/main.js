function toggleMenu() {
    document.getElementsByClassName("nav_bar")[0].classList.toggle("responsive");
   }

//Footer Current Date
   const day1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   const month1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   var d = new Date();
   var day = d.getDay(); 
   var date = d.getDate();
   var month = d.getMonth();
   var year = d.getFullYear();
   var dateString = day1[day] + ', ' + date + ' ' + month1[month] + ' ' + year;
   document.getElementById("currentDate").innerHTML = dateString;

