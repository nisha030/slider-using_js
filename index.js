let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;

// Next button functionality
next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
};

// Prev button functionality
prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) { // Fixed condition
    itemActive = countItem - 1;
  }
  showSlider();
};

// Auto-slider functionality
let refreshInterval = setInterval(() => {
  next.click();
}, 5000);

function showSlider() {
  // Remove old active items
  let oldItem = document.querySelector('.slider .list .item.active');
  let oldThumbnail = document.querySelector('.thumbnail .item.active');
  if (oldItem) oldItem.classList.remove('active'); // Safeguard in case of no active item
  if (oldThumbnail) oldThumbnail.classList.remove('active');

  // Add active class to the new items
  items[itemActive].classList.add('active');
  thumbnails[itemActive].classList.add('active');

  // Clear auto-slider and restart
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 5000);
}

// Click thumbnail functionality
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    itemActive = index;
    showSlider();
  });
});
