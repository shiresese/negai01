window.onload = ->
  smoothScroll.init
    selector: '[data-scroll]',
    selectorHeader: null,
    speed: 500,
    easing: 'easeInOutCubic',
    offset: 50
  menu = document.querySelector ".menu-bar"
  toggleButton = document.querySelector "#toggleButton"
  toggleButton.addEventListener "click", (e) ->
    menu.classList.toggle("open")
  Array.prototype.forEach.call document.querySelectorAll(".menu-item"), (item) ->
    item.addEventListener "click", (e) ->
      menu.classList.remove("open")

  charBox = document.querySelector ".char-box"
  charContents = document.querySelectorAll ".char-content"
  Array.prototype.forEach.call document.querySelectorAll(".char-item"), (item) ->
    item.addEventListener "click", (e) ->
      height = 0
      Array.prototype.forEach.call charContents, (cc) ->
        console.log cc.id, item.id
        if cc.id is item.id
          cc.classList.add "char-selected"
          height = cc.clientHeight
        else
          cc.classList.remove "char-selected"
      charBox.style["height"] = "#{height}px"

  selectedChar = document.querySelector ".char-selected"
  console.log selectedChar, selectedChar.clientHeight
  charBox.style["height"] = "#{selectedChar.clientHeight}px"
