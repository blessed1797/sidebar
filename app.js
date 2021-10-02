const toggleBtn = document . querySelector(".sidebar-toggle");
const sidebar = document . querySelector(".sidebar");
const closebtn = document . querySelector(".close-btn");

toggleBtn.addEventListener("click", function() {
    console.log(sidebar.classList);
    if (sidebar.classList.contains("show-sidebar")){
        sidebar.classList.remove("show-sidebar");
    } else {
        sidebar.classList.add("show-sidebar");
    }
// sidebar.classList.toggle("show-sidebar");
});

closebtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
});
