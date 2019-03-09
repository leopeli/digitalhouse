const zoom = document.querySelectorAll('.galeria-item');
const addZoomImg = document.querySelectorAll('.galeria-item img');

function animaZoom(event) {
    event.currentTarget.classList.add('galeria-item--zoom')
}

function desanimaZoom(event) {
  event.currentTarget.classList.remove('galeria-item--zoom')
}

zoom.forEach((zoom) => {
  zoom.addEventListener('mouseover', animaZoom)
})

zoom.forEach((zoom) => {
  zoom.addEventListener('mouseout', desanimaZoom)
})