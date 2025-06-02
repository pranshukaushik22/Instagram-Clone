const profilePhotos = document.getElementsByClassName('profilephoto');
const goHome = document.getElementsByClassName('homePage');
const openReels = document.getElementsByClassName('openReel');
const opentheSearch = document.getElementsByClassName('openSearch');
const opentheMessage = document.getElementsByClassName('openMessage');


// Iterate over the collection and add event listener to each element
for (let i = 0; i < profilePhotos.length; i++) {
  profilePhotos[i].addEventListener('click', function(event) {
    event.preventDefault();
    openProfilePage();
  });
}

function openProfilePage() {
  location.href = 'profile.html';
}





for (let i = 0; i < opentheSearch.length; i++) {
  opentheSearch[i].addEventListener('click', function(event) {
    event.preventDefault();
    openSearchPage();
  });
}

function openSearchPage() {
  location.href = 'search.html';
}



for (let i = 0; i < openReels.length; i++) {
  openReels[i].addEventListener('click', function(event) {
    event.preventDefault();
    openReelPage();
  });
}

function openReelPage() {
  location.href = 'reels.html';
}




for (let i = 0; i < goHome.length; i++) {
  goHome[i].addEventListener('click', function(event) {
    event.preventDefault();
    openHomePage();
  });
}

function openHomePage() {
  location.href='index.html';
}



for (let i = 0; i < opentheMessage.length; i++) {
  opentheMessage[i].addEventListener('click', function(event) {
    event.preventDefault();
    openMsgPage();
  });
}

function openMsgPage() {
  location.href='message.html';
}


//posts likes 
// Get all post-image and post-video elements
const postImages = document.querySelectorAll('.post-image');
const postVideos = document.querySelectorAll('.post-image[autoplay]');

// Function to like a post
let touchCount = 0;

function likePost(event) {
  // Get the heart icon element
  const heartIcon = event.target.parentNode.querySelector('.icon');

  // Check if the heart icon is already liked
  if (event.type === 'dblclick') {
    if (heartIcon.src.includes('like.PNG')) {
      // If liked, change the heart icon to red
      heartIcon.src = 'like_red.PNG'; // Replace 'like_red.PNG' with the actual path to the red heart icon
    } else {
      // If not liked, change the heart icon back to normal
      heartIcon.src = 'like.PNG';
    }
  } else if (event.type === 'touchstart') {
    touchCount++;
    if (touchCount === 2) {
      if (heartIcon.src.includes('like.PNG')) {
        // If liked, change the heart icon to red
        heartIcon.src = 'like_red.PNG'; // Replace 'like_red.PNG' with the actual path to the red heart icon
      } else {
        // If not liked, change the heart icon back to normal
        heartIcon.src = 'like.PNG';
      }
      touchCount = 0;
    }
  }
}

// Add event listener to post-images and post-videos
postImages.forEach((image) => {
  image.addEventListener('dblclick', likePost);
  image.addEventListener('touchstart', likePost);
});

postVideos.forEach((video) => {
  video.addEventListener('dblclick', likePost);
  video.addEventListener('touchstart', likePost);
});

