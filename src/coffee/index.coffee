window.onload = ->
  smoothScroll.init
    selector: '[data-scroll]',
    selectorHeader: null,
    speed: 500,
    easing: 'easeInOutCubic',
    offset: 0
  menu = document.querySelector ".menu-bar"
  toggleButton = document.querySelector "#toggleButton"
  toggleButton.addEventListener "click", (e) ->
    menu.classList.toggle("open")
  (document.querySelectorAll ".menu-item").forEach (item) ->
    item.addEventListener "click", (e) ->
      menu.classList.remove("open")

  charBox = document.querySelector ".char-box"
  charContents = document.querySelectorAll ".char-content"
  (document.querySelectorAll ".char-item").forEach (item) ->
    item.addEventListener "click", (e) ->
      height = 0
      charContents.forEach (cc) ->
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
