const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0

  document.addEventListener("keydown", function(event) {
    var key = parseInt(event.detail || e.which)
    if (key === code[index]) {
      index++

      if (index === code.length - 1) {
        alert("I see what you did there...")
      }
    } else {
      index = 0
    }
  })
}
