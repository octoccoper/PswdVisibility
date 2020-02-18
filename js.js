document.addEventListener("DOMContentLoaded", function() {
  const divs = document.querySelectorAll('.show-password');


    divs.forEach(function(element) {
    element.addEventListener("click", function() {
        changeInputVisibility(this);
    });
})

  console.log("js file worked!",divs);
});

changeInputVisibility = () => {
  console.log("changeInputVisibility worked!");
}

