window.onscroll = function() {
  handleLogoSize();
  handleScrollButton();
};

function handleLogoSize() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").classList.add("logo-small");
  } else {
    document.getElementById("logo").classList.remove("logo-small");
  }
}

function handleScrollButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.opacity = "100";
  } else {
    document.getElementById("myBtn").style.opacity = "0";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
