function picture(){
    // Get reference to the tab button and the picture div
const pictureTab = document.getElementById('im');
const pictureDiv = document.getElementById('images');

// Add click event listener to the tab button
pictureTab.addEventListener('click', function() {
  // Toggle the display property of the picture div
  if (pictureDiv.style.display === 'block') {
    pictureDiv.style.display = 'none';
  } else {
    pictureDiv.style.display = 'block';
  }
});

}