window.onload = function() {
  var charBox, charContents, menu, selectedChar, toggleButton;
  smoothScroll.init({
    selector: '[data-scroll]',
    selectorHeader: null,
    speed: 500,
    easing: 'easeInOutCubic',
    offset: 50
  });
  menu = document.querySelector(".menu-bar");
  toggleButton = document.querySelector("#toggleButton");
  toggleButton.addEventListener("click", function(e) {
    return menu.classList.toggle("open");
  });
  Array.prototype.forEach.call(document.querySelectorAll(".menu-item"), function(item) {
    return item.addEventListener("click", function(e) {
      return menu.classList.remove("open");
    });
  });
  charBox = document.querySelector(".char-box");
  charContents = document.querySelectorAll(".char-content");
  Array.prototype.forEach.call(document.querySelectorAll(".char-item"), function(item) {
    return item.addEventListener("click", function(e) {
      var height;
      height = 0;
      Array.prototype.forEach.call(charContents, function(cc) {
        console.log(cc.id, item.id);
        if (cc.id === item.id) {
          cc.classList.add("char-selected");
          return height = cc.clientHeight;
        } else {
          return cc.classList.remove("char-selected");
        }
      });
      return charBox.style["height"] = height + "px";
    });
  });
  selectedChar = document.querySelector(".char-selected");
  console.log(selectedChar, selectedChar.clientHeight);
  return charBox.style["height"] = selectedChar.clientHeight + "px";
};
