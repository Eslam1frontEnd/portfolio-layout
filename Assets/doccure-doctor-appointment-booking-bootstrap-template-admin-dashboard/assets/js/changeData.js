//============================================
//===========change docProfile data===========
//============================================
window.addEventListener('load', ()=>{
    const source = localStorage.getItem('Src');
    const name = localStorage.getItem('docName');
    const speciality = localStorage.getItem('docSpeciality');
    const deprtmentImg = localStorage.getItem('docDepartmentImg');
    const department = localStorage.getItem('docDepartment');
    const rate = localStorage.getItem('ratting');
    const address = localStorage.getItem('docAddress');
    const popularity = localStorage.getItem('docPopularity');
    const feedback = localStorage.getItem('docFeedBack');
    const price = localStorage.getItem('docPrice');
  
    document.querySelector('#profile-image img').setAttribute('src',source);
    // document.querySelector('.nav-item .nav-link img').setAttribute('src',source);
    // document.querySelector('.user-header .avatar img').setAttribute('src',source);
    document.querySelector('.doc-info-cont .doc-name').textContent = name;
    // document.querySelector('.user-header .user-text h6').textContent = name;
    document.querySelector('.doc-info-cont .doc-speciality').textContent = speciality;
    document.querySelector('.doc-info-cont .doc-department img').setAttribute('src',deprtmentImg);
    document.querySelector('.doc-info-cont .doc-department span').textContent = department;
    document.querySelector('.doc-info-cont .rating span').textContent = rate;
    document.querySelector('.doc-info-cont .clinic-details .doc-location').textContent = address;
    document.querySelector('.doc-info-right .clini-infos .Popularity span').textContent = popularity;
    document.querySelector(".doc-info-right .clini-infos .Feedback span").textContent = feedback;
    //document.querySelector(".doc-info-right .clini-infos .address span").textContent = address;
    document.querySelector(".doc-info-right .clini-infos .Price strong").textContent = price;
  })