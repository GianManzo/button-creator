const controls = document.getElementById('controls')
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn')
const btnReset = document.querySelector('.reset')

const handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value
  },
  height(value) {
    this.element.style.height = value + 'px'
  },
  width(value) {
    this.element.style.width = value + 'px'
  },
  border(value) {
    this.element.style.border = value
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px'
  },
  color(value) {
    this.element.style.color = value
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem'
  },
  fontFamily(value) {
    this.element.style.fontFamily = value
  },
  texto(value) {
    this.element.innerText = value
  }
}

function handleChange(event) {
  const name = event.target.name
  const value = event.target.value
  handleStyle[name](value)
  showCss()
  saveValues(name, value)
}

function setValues() {
  const properties = Object.keys(localStorage)
  properties.forEach(property => {
    handleStyle[property](localStorage[property])
    controls.elements[property].value = localStorage[property]
  })
  showCss()
}

function showCss() {
  cssText.innerHTML =
    '<span>' + btn.style.cssText.split('; ').join(';</span><span>')
}

function saveValues(name, value) {
  localStorage[name] = value
}

function reset() {
  localStorage.clear()
}

btnReset.addEventListener('click', reset)
controls.addEventListener('change', handleChange)
setValues()
