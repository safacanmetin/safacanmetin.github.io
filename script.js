function myFunction() {
    var quotes = ["Durmak ölüm, taklit uşaklıktır, çalışmak ve yetişmek ise hayat ve hürriyettir.",
    "Be the change that you wish to see in the world. Mahatma Gandhi",
    "The more you learn, the higher you'll see, The quicker you grow, the stronger you'll be. Robin Sharma"    
     
        ];

    const random = Math.floor(Math.random() * quotes.length);

    document.getElementById("demo").innerHTML = quotes[random];
}

$(document).ready(function(){
    return myFunction();
  });


// $(window).bind("beforeunload",function(event) {
//     return myFunction();
    
// });

