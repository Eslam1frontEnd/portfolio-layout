function scrollTo(element, duration) {
//   const start = window.pageYOffset;
//   const targetElement = document.querySelector('#about');
//   const targetPosition = targetElement.getBoundingClientRect().top;
  const targetPosition = element.offsetTop; // Get the target element's position from the top
//   console.log(targetPosition); // Output the target position for testing purposes

  document.querySelector('.avatar').style.opacity = '1';
  document.querySelector('.avatar').style.transform = 'translateZ(0)';
  document.querySelector('.brief').style.opacity = '1';
  document.querySelector('.brief').style.transform = 'translateZ(0)';
}

const aboutOffset = document.getElementById("about");
scrollTo(aboutOffset, 4000);




  