const title1 = document.querySelector('#title-1')
const title2 = document.querySelector('#title-2')
const title3 = document.querySelector('#title-3')
const title4 = document.querySelector('#title-4')

function showContent(title) {
	const lastIndex = title.id[title.id.length - 1]
	const paragraph = document.querySelector(`#p-${lastIndex}`)
	const icon = document.querySelector(`#icon-${lastIndex}`)

	if (icon.src.includes('icon-plus.svg')) {
		icon.src = '../assets/images/icon-minus.svg'
		paragraph.classList.replace('hidden', 'show')
	} else {
		paragraph.classList.replace('show', 'hidden')
		icon.src = '../assets/images/icon-plus.svg'
	}
}

title1.addEventListener('click', () => {
	showContent(title1)
})

title2.addEventListener('click', () => {
	showContent(title2)
})

title3.addEventListener('click', () => {
	showContent(title3)
})

title4.addEventListener('click', () => {
	showContent(title4)
})
