const img=document.getElementById("myimg");
                img.addEventListener("click",
                function()
                {
                    img.classList.toggle("rotated");
                });
            const img2=document.getElementById("myimg2");
                img2.addEventListener("click",
                    function()
                    {
                        img2.classList.toggle("rotated");
                    });
            const img3=document.getElementById("myimg3");
                img3.addEventListener("click",
                    function()
                    {
                        img3.classList.toggle("rotated");
                    });
            const img4=document.getElementById("myimg4");
                img4.addEventListener("click",
                    function()
                    {
                        img4.classList.toggle("rotated");
                    });
            const img5=document.getElementById("myimg5");
                img5.addEventListener("click",
                    function()
                    {
                        img5.classList.toggle("rotated");
                    });
            const flag_ig=document.getElementById("flag");
            flag_ig.addEventListener("click",
                function()
                {
                    flag_ig.classList.toggle("rotated");
                });

function showTab(tabId, clickedButton) {
      document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));

      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('text-blue-900', 'border-blue-900');
        btn.classList.add('text-blue-900', 'border-transparent');
      });
      document.getElementById(tabId).classList.remove('hidden');
      clickedButton.classList.add('text-blue-900', 'border-blue-900');
      clickedButton.classList.remove('text-blue-900', 'border-transparent');
    }
const newsItems = [
  '<span class="date">11 JUN 2025</span> <a href="#"> | NBF (New Bunker Factor*) update </a>',
  '<span class="date">11 JUN 2025</span><a href="#"> | Green Fuel Surcharge (GFS) update</a>',
  '<span class="date">15 JUN 2025</span><a href="#"> | Israel war situation update</a>',
  '<span class="date">04 JUN 2025</span><a href="#"> | New Emission Fee (NEF) charge update - July 1st, 2025</a>'
];

let currentIndex = 0;

const newsBox = document.getElementById("news-box");
const newsContent = document.getElementById("news-content");

function showNextNews() {
  newsBox.style.transform = "translateY(-24px)";
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % newsItems.length;
    newsContent.innerHTML = newsItems[currentIndex];
    newsBox.style.transition = "none";
    newsBox.style.transform = "translateY(24px)"; 
    void newsBox.offsetWidth;
    newsBox.style.transition = "transform 0.5s ease-in-out";
    newsBox.style.transform = "translateY(0)";
  }, 500);
}

setInterval(showNextNews, 3000); 

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const wrapper = document.querySelector(".wrapper");

    const firstCard = carousel.querySelector(".card");
    const firstCardWidth = firstCard.offsetWidth;

    let isDragging = false,
        startX,
        startScrollLeft,
        timeoutId;

    const dragStart = (e) => { 
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;
    
        // Calculate the new scroll position
        const newScrollLeft = startScrollLeft - (e.pageX - startX);
    
        // Check if the new scroll position exceeds 
        // the carousel boundaries
        if (newScrollLeft <= 0 || newScrollLeft >= 
            carousel.scrollWidth - carousel.offsetWidth) {
            
            // If so, prevent further dragging
            isDragging = false;
            return;
        }
    
        // Otherwise, update the scroll position of the carousel
        carousel.scrollLeft = newScrollLeft;
    };

    const dragStop = () => {
        isDragging = false; 
        carousel.classList.remove("dragging");
    };

    const autoPlay = () => {
    
        // Return if window is smaller than 800
        if (window.innerWidth < 800) return; 
        
        // Calculate the total width of all cards
        const totalCardWidth = carousel.scrollWidth;
        
        // Calculate the maximum scroll position
        const maxScrollLeft = totalCardWidth - carousel.offsetWidth;
        
        // If the carousel is at the end, stop autoplay
        if (carousel.scrollLeft >= maxScrollLeft) return;
        
        // Autoplay the carousel after every 2500ms
        timeoutId = setTimeout(() => 
            carousel.scrollLeft += firstCardWidth, 2500);
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    wrapper.addEventListener("mouseenter", () => 
        clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);

    // Add event listeners for the arrow buttons to 
    // scroll the carousel left and right
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ? 
                -firstCardWidth : firstCardWidth;
        });
    });
});
