var menue_list = document.querySelectorAll(".user-menue-list li");
var div_info = document.querySelectorAll(".main-content-card-body-data");
console.log(div_info);
menue_list.forEach((e) => {
  e.addEventListener("click", () => {
    menue_list.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");

    div_info.forEach((e) => {
      e.style.display = "none";
    });
    var data_show = e.getAttribute("data-show");
    // console.log(data_show);
    div_info.forEach((div) => {
      if (div.classList.contains(data_show)) {
        div.style.display = "block";
      }
    });
  });
});
