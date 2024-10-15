// Sidebar toggle
function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    if (sidebar.style.display === "block") {
      sidebar.style.display = "none";
    } else {
      sidebar.style.display = "block";
    }
  }
  
  // Modal Image Gallery
  function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  // Toggle Description
  function toggleDescription(productId) {
    var shortDesc = document.getElementById(productId + "-short");
    var fullDesc = document.getElementById(productId + "-full");
    var link = event.target;
  
    if (fullDesc.style.display === "none") {
      fullDesc.style.display = "inline";
      shortDesc.style.display = "none";
      link.innerHTML = "Read less";
    } else {
      fullDesc.style.display = "none";
      shortDesc.style.display = "inline";
      link.innerHTML = "Read more";
    }
  }
  function toggleDescription(productId) {
    var shortDesc = document.getElementById(productId + '-short');
    var fullDesc = document.getElementById(productId + '-full');
    var link = event.target;
  
    if (fullDesc.style.display === "none") {
        fullDesc.style.display = "inline";
        shortDesc.style.display = "none";
        link.innerHTML = "Read less";
    } else {
        fullDesc.style.display = "none";
        shortDesc.style.display = "inline";
        link.innerHTML = "Read more";
    }
  }
  // Function to toggle product descriptions
function toggleDescription(productId) {
  const shortDesc = document.getElementById(`${productId}-short`);
  const fullDesc = document.getElementById(`${productId}-full`);

  if (fullDesc.classList.contains('hidden')) {
    fullDesc.classList.remove('hidden');
    shortDesc.classList.add('hidden');
  } else {
    fullDesc.classList.add('hidden');
    shortDesc.classList.remove('hidden');
  }
}

// Animated counters for the stats section
const counters = document.querySelectorAll('.stat-number');
const speed = 200; // speed of the counter

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
// Function to close the welcome message
function closeWelcomeMessage() {
  document.getElementById('welcomeMessage').classList.add('hidden');
}