// Time section


var date = new Date();
const elementDate = document.getElementById("printDate");
const elementDay = document.getElementById("printDay");
const elementTime = document.getElementById("printTime");
const listOfDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

function printDate() {
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();

  elementDate.innerHTML = day + " / " + month + " / " + year;
}

function printDay() {
  date = new Date();
  var numberOfDay = date.getDay();
  var day = listOfDays[numberOfDay];
  elementDay.innerHTML = day;
}

function printTime() {
  date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours > 12) {
    hours = hours - 12;
    elementTime.innerHTML = hours + " : " + minutes + " : " + seconds + "  PM ";
  } else if (hours < 12) {
    elementTime.innerHTML = hours + " : " + minutes + " : " + seconds + "  AM ";
  } else if (hours = 12) {
    elementTime.innerHTML = hours + " : " + minutes + " : " + seconds + "  PM ";
  }
}

setInterval(function() {
  printTime();
  printDate();
  printDay();
}, 1000);


// Faq section
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");
    const showMoreBtn = document.getElementById("showMoreBtn");
    let showMore = false;
  
    items.forEach((item, index) => {
      item.querySelector(".FAQ-title").addEventListener("click", () => {
        if (item.classList.contains("selected")) {
          item.classList.remove("selected");
          item.querySelector(".FAQ-content").classList.remove("show");
        } else {
          document.querySelectorAll(".item").forEach((el) => {
            el.classList.remove("selected");
            el.querySelector(".FAQ-content").classList.remove("show");
          });
          item.classList.add("selected");
          item.querySelector(".FAQ-content").classList.add("show");
        }
      });
    });
  
    showMoreBtn.addEventListener("click", () => {
      showMore = !showMore;
      const itemsToShow = showMore ? items.length : 4;
      document.querySelectorAll(".item").forEach((item, index) => {
        item.style.display = index < itemsToShow ? "block" : "none";
      });
      showMoreBtn.textContent = showMore ? "Show Less" : "Show More";
    });
  
    // Initialize the FAQ display
    document.querySelectorAll(".item").forEach((item, index) => {
      item.style.display = index < 4 ? "block" : "none";
    });
  });

  
	
  function empty(){
    //var error=""
    if(document.getElementById('req1').value=="")
    {
      //error+="Enter Firstname";
      alert("Enter first name");
    }/*
    if(document.getElementById('req2').value=="")
    {
      alert("Enter last name");
    }*/
    if(document.getElementById('req3').value=="")
    {
      alert("Enter email address");
    }
    /*
    if(document.getElementById('req4').value=="")
    {
      alert("Enter contact number");
    }
    if(req4.value.length!=10)
    {
      alert('Note : Contact no must be 10 digits')
    }*/
    if(document.getElementById('req5').value=="")
    {
      alert("Password");
      return false;
    }
  }


  function emailValidate(element,message)
{
  var emailExp=/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0]{2,4}$/;
  if(element.value.length>0)
  {
    if(element.value.match(emailExp))
    {
      return true;
    }
    else
    {
      alert(message);
      element.focus();
      return false;
    }
    return true;
  }
  /*else
  {
      alert('Please fill email id');
      element.focus();
      return false;
    
  }*/
}

function isNumeric(element,message)
{
  var numericExpression=/^[0-9]+$/;
  if(element.value.match(numericExpression))
  {
    return true;
  }
  else{
    alert(message);
    element.focus();
    return false;
  }
}
function Selection(element,message)
{

  if(element.value == "Gender")
  {
    alert(message);
    element.focus();
    return false;
  }
  else{
  
    return true;
  }
  
}





  