const AboutBlock = document.querySelector('.about')
const ArrowBtn = document.querySelector('.arrow__up')
const PeopleBlock = document.querySelector('.people')
const WriteUsBlock = document.querySelector('.write__us')

let lastScrollOffset = 0
let isScrollTop = false
window.addEventListener('scroll', (e) => {
	
	
	// if(lastScrollOffset > pageYOffset){
	// 	console.log('up')
	// } else {
	// 	console.log('down')
	// }
	
	
	if (document.documentElement.clientWidth < 1366) {
		// console.log('less')
		if (pageYOffset < 1) {
			
			ArrowBtn.classList.remove('show')
			ArrowBtn.classList.add('disabled')
		} else {
			if (lastScrollOffset > pageYOffset) {
				ArrowBtn.classList.remove('init')
				ArrowBtn.classList.remove('disabled')
				ArrowBtn.classList.add('show')
				isScrollTop = true
			} else {
				if (isScrollTop) {
					ArrowBtn.classList.remove('show')
					ArrowBtn.classList.add('disabled')
				}
				
			}
			
		}
		lastScrollOffset = pageYOffset <= 0 ? 0 : pageYOffset
	} else {
		if (pageYOffset < 1) {
			
			ArrowBtn.classList.remove('show')
			ArrowBtn.classList.add('disabled')
		} else {
			ArrowBtn.classList.remove('init')
			ArrowBtn.classList.remove('disabled')
			ArrowBtn.classList.add('show')
		}
	}
	let clientHeight = document.documentElement.clientHeight
	
	
	if (
		(
			(pageYOffset + clientHeight) > (AboutBlock.offsetTop + 35)
			&&
			pageYOffset < (AboutBlock.offsetTop + AboutBlock.clientHeight - clientHeight + 35)
		)
		||
		(
			(pageYOffset + clientHeight) > (PeopleBlock.offsetTop + 35)
			&&
			pageYOffset < (PeopleBlock.offsetTop + PeopleBlock.clientHeight - clientHeight + 35)
		)
		||
		(
			(pageYOffset + clientHeight) > (WriteUsBlock.offsetTop + 35)
			&&
			pageYOffset < (WriteUsBlock.offsetTop + WriteUsBlock.clientHeight - clientHeight + 35)
		)
	
	
	) {
		
		ArrowBtn.classList.add('gray')
	} else {
		ArrowBtn.classList.remove('gray')
	}
	
	return isScrollTop, lastScrollOffset
	
}, {passive: false})