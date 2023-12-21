window.onload = function(){
    let proj_data = {
        project1: {
            name: "learningSystem",
            imgSrc: "./4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.webp"
        },
        project2: {
            name: "hourseClub",
            imgSrc: "Hourse Club.png"
        },
        project3: {
            name: "bankWebSite",
            imgSrc: "Bank.png"
        },
        project4: {
            name: "bookingApp",
            imgSrc: "/Assets/img/UI App.png"
        },
    };

    let projects = Object.values(proj_data);
    let imageElement = document.querySelector(".project-show img");

    imageElement.setAttribute('src', projects[0].imgSrc)
}


let proj_items = document.querySelectorAll(".project-field");

let proj_data = {
    project1: {
        name: "learningSystem",
        imgSrc: "./4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.webp"
    },
    project2: {
        name: "hourseClub",
        imgSrc: "/Horse Templete.gif"
    },
    project3: {
        name: "bankWebSite",
        imgSrc: "/ezgif.com-video-to-gif.gif"
    },
    project4: {
        name: "bookingApp",
        imgSrc: "/Showreel-Grid-Mobile-[remix].gif"
    },
};

proj_items.forEach((el) => {
  el.addEventListener("click", setSource);
});

function setSource() {
    let projects = Object.values(proj_data);

    let imageElement = document.querySelector(".project-show img");

    for(i = 0; i < projects.length; i++){
        if(projects[i].name === this.dataset.project){
            imageElement.setAttribute('src', projects[i].imgSrc);
        }

        // this.remove('.active-field');
    }
}

proj_items.forEach((el) => {
    el.addEventListener('click', changeActivity);
  });
  
  function changeActivity() {
    if (this.getAttribute('class') === 'active-field') {
      this.classList.remove('active-field');
    } else {
      proj_items.forEach((el) => {
        el.classList.remove('active-field');
      });
      this.classList.add('active-field');
    }
  }

setTimeout(function(){
    document.querySelector('.app-body').style.opacity = "1";
    document.querySelector('.app-body').style.transition = "linear";
}, 3100);