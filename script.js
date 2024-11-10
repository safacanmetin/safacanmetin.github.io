function newQuote() {
    var quotes = ["Durmak ölüm, taklit uşaklıktır, çalışmak ve yetişmek ise hayat ve hürriyettir.",
    "Akılsız başın cezasını ayaklar çeker.",
    "Be the change that you wish to see in the world. Mahatma Gandhi",
    "The more you learn, the higher you'll see, The quicker you grow, the stronger you'll be. Robin Sharma" ,   
    "Wealth is the slave of wise man. The master of a fool.",
    "There are no shortcuts to any place worth going.",    
    "If you have no critics you’ll likely have no success.",
    "If you want to shine like the sun, first burn like the sun.",
    "If it is important to you, you will find a way. If not, you’ll find an excuse."


    ];

    const random = Math.floor(Math.random() * quotes.length);

    document.getElementById("demo").innerHTML = quotes[random];
}

window.onload = function() {
  newQuote(); // Initial quote
  setInterval(newQuote, 4000); // Change quote every 4 seconds
};



function toggleDropdown() {
  var dropdown = document.getElementById("skills-dropdown");
  var items = dropdown.querySelectorAll("li");

  // Toggle visibility
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
      dropdown.style.display = "block";

      // Trigger reflow to reset animations
      items.forEach((item, index) => {
          item.style.animation = 'none'; // Remove previous animation
          item.offsetHeight;  // Trigger reflow
          item.style.animation = ''; // Reset animation
          item.style.animationDelay = `${index * 0.1}s`; // Set delay based on index
      });
  } else {
      dropdown.style.display = "none";
  }
}