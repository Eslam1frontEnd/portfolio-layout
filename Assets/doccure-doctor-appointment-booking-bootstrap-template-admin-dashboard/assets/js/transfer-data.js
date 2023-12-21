//============================================
//===========change docProfile data===========
//============================================
let el = document.querySelectorAll(".items .card");
// var classList = [];

for (i = 0; i < el.length; i++) {
  el.addEventListener(
    "click",
    function () {
      const source = this.querySelector(".doctor-img img").getAttribute("src");
      const Name = this.querySelector(".doc-info-cont .doc-name").textContent;

      const Specilaity = this.querySelector(
        ".doc-info-cont .doc-speciality"
      ).textContent;

      const deprtmentImg = this.querySelector(
        ".doc-info-cont .doc-department img"
      ).getAttribute("src");

      const Deprtment = this.querySelector(
        ".doc-info-cont .doc-department"
      ).textContent;

      const Rate = this.querySelector(
        ".doc-info-cont .rating span"
      ).textContent;

      const Address = this.querySelector(
        ".doc-info-cont .clinic-details .doc-location"
      ).textContent;

      const Popularity = this.querySelector(
        ".doc-info-right .clini-infos .Popularity span"
      ).textContent;

      const FeedBack = this.querySelector(
        ".doc-info-right .clini-infos .Feedback span"
      ).textContent;

      const Price = this.querySelector(
        ".doc-info-right .clini-infos .Price strong"
      ).textContent;

      localStorage.setItem("Src", source);
      localStorage.setItem("docName", Name);
      localStorage.setItem("docSpeciality", Specilaity);
      localStorage.setItem("docDepartmentImg", deprtmentImg);
      localStorage.setItem("docDepartment", Deprtment);
      localStorage.setItem("ratting", Rate);
      localStorage.setItem("docAddress", Address);
      localStorage.setItem("docPopularity", Popularity);
      localStorage.setItem("docFeedBack", FeedBack);
      localStorage.setItem("docPrice", Price);

      window.location.href = "doctor-profile.html"
    },
    false
  );
}
