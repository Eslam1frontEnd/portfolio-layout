let cursor = document.querySelector(".cursor");
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

let proj_data = {
    project1: {
        name: "learningSystem",
        imgSrc: "./Assets/img/projects-img/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.webp"
    },
    project2: {
        name: "hourseClub",
        imgSrc: "./Assets/img/projects-img/Horse Templete.gif"
    },
    project3: {
        name: "bankWebSite",
        imgSrc: "./Assets/img/projects-img/ezgif.com-video-to-gif.gif"
    },
    project4: {
        name: "bookingApp",
        imgSrc: "./Assets/img/projects-img/Showreel-Grid-Mobile-[remix].gif"
    },
};

document.querySelectorAll('.project-card').forEach((e)=>{
    e.addEventListener('mouseover', ()=>{
        let projects = Object.values(proj_data);

        cursor.style.mixBlendMode = "normal";
        document.querySelector('.cursor img').style.width = "500px";
        document.querySelector('.cursor img').style.height = "350px";
        document.querySelector('.cursor img').style.display = "block";
        for(i = 0; i < projects.length; i++){
            if(projects[i].name === e.dataset.project){
                document.querySelector('.cursor img').setAttribute('src', projects[i].imgSrc);
            }
        }
    })
    e.addEventListener('mouseleave', ()=>{
        document.querySelector('.cursor img').style.display = "none";
        cursor.setAttribute('class','cursor');
    })
})
