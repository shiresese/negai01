window.onload = function() {
  var charBox, charContents, menu, selectedChar, toggleButton;
  menu = document.querySelector(".menu-bar");
  toggleButton = document.querySelector("#toggleButton");
  toggleButton.addEventListener("click", function(e) {
    return menu.classList.toggle("open");
  });
  (document.querySelectorAll(".menu-item")).forEach(function(item) {
    return item.addEventListener("click", function(e) {
      return menu.classList.remove("open");
    });
  });
  charBox = document.querySelector(".char-box");
  charContents = document.querySelectorAll(".char-content");
  (document.querySelectorAll(".char-item")).forEach(function(item) {
    return item.addEventListener("click", function(e) {
      var height;
      height = 0;
      charContents.forEach(function(cc) {
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
