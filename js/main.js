window.addEventListener("scroll", function () {
	const navbar = document.getElementById("navbar")
	const scrollPos = window.scrollY

	if (scrollPos > 0) {
		navbar.style.backgroundColor = "rgba(2, 85, 125, 1)" // Cambia el color de fondo al hacer scroll
	} else {
		navbar.style.backgroundColor = "rgba(2, 85, 125, 0)" // Restaura el fondo transparente al volver al principio
	}
})

// Función para abrir la ventana emergente y reproducir el video
function openVideoModal() {
	let modal = document.getElementById("videoModal")
	let video = document.getElementById("videoPlayer")
	modal.style.display = "block" // Muestra la ventana emergente
	video.play() // Reproduce el video
}

// Función para cerrar la ventana emergente y pausar el video
function closeVideoModal() {
	let modal = document.getElementById("videoModal")
	let video = document.getElementById("videoPlayer")
	modal.style.display = "none" // Oculta la ventana emergente
	video.pause() // Pausa el video
}

// Evento click para el botón "play"
let playButtons = document.querySelectorAll(".play")
playButtons.forEach(function (button) {
	button.addEventListener("click", function () {
		openVideoModal() // Abre la ventana emergente al hacer click en el botón "play"
	})
})

// Evento click para el botón de cierre en la ventana emergente
let closeButton = document.querySelector(".close")
closeButton.addEventListener("click", function () {
	closeVideoModal() // Cierra la ventana emergente al hacer click en el botón de cierre
})

// Evento click fuera del video para cerrar la ventana emergente
window.addEventListener("click", function (event) {
	let modal = document.getElementById("videoModal")
	if (event.target == modal) {
		closeVideoModal() // Cierra la ventana emergente al hacer click fuera del video
	}
})
