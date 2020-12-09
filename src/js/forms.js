// Start Earning popup
const Email = document.querySelector('#start-earning-email')
const Phone = document.querySelector('#start-earning-phone')

const AllInputs = document.querySelectorAll('.start__earning__form__input input[type=text]')
const Textarea = document.querySelector('#start-earning-message')
const Submit = document.querySelector('#start__earning__submit')

const regEmail = /\S+@\S+\.\S+/;

// Lets Talk popup

const EmailLetsTalk = document.querySelector('#lets__talk__email')

const AllInputsLetsTalk = document.querySelectorAll('.lets__talk__form__input input[type=text]')
const TextareaLetsTalk = document.querySelector('#lets__talk__message')
const SubmitLetsTalk = document.querySelector('#lets__talk__form__submit')


// LETS TALK ...........................................................................................................

SubmitLetsTalk.addEventListener('click', (e) => {
	e.preventDefault()
	ValidateForm(EmailLetsTalk, null, AllInputsLetsTalk, TextareaLetsTalk)
})

// SubmitLetsTalk.addEventListener('touchstart', (e) => {
// 	e.preventDefault()
// 	ValidateForm(EmailLetsTalk, null, AllInputsLetsTalk, TextareaLetsTalk)
// })

EmailLetsTalk.addEventListener('blur', () => {
	ValidateEmail(EmailLetsTalk)
})

EmailLetsTalk.addEventListener('input', () => {
	ValidateEmail(EmailLetsTalk)
})

AllInputsLetsTalk.forEach((el) => {
	el.addEventListener('blur', () => {
		CheckEmptyInputs(el)
	})
	el.addEventListener('input', () => {
		CheckEmptyInputs(el)
	})
})

TextareaLetsTalk.addEventListener('blur', () => {
	CheckEmptyInputs(TextareaLetsTalk)
})
TextareaLetsTalk.addEventListener('input', () => {
	CheckEmptyInputs(TextareaLetsTalk)
})


// START EARNING .......................................................................................................

// Phone mask
Inputmask({
	mask: "+999 999 999 999 999",
	showMaskOnHover: true,
	placeholder: " ",
}).mask(Phone);


Submit.addEventListener('click', (e) => {
	e.preventDefault()
	ValidateForm(Email, Phone, AllInputs, Textarea)
})

// Submit.addEventListener('touchstart', (e) => {
// 	e.preventDefault()
// 	ValidateForm(Email, Phone, AllInputs, Textarea)
// })

Email.addEventListener('blur', () => {
	ValidateEmail(Email)
})

Email.addEventListener('input', () => {
	ValidateEmail(Email)
})

Phone.addEventListener('blur', () => {
	ValidatePhone(Phone)
})

Phone.addEventListener('input', () => {
	ValidatePhone(Phone)
})

AllInputs.forEach((el) => {
	el.addEventListener('blur', () => {
		CheckEmptyInputs(el)
	})
	el.addEventListener('input', () => {
		CheckEmptyInputs(el)
	})
})

Textarea.addEventListener('blur', () => {
	CheckEmptyInputs(Textarea)
})
Textarea.addEventListener('input', () => {
	CheckEmptyInputs(Textarea)
})

//.........................................................................................................................

function ValidateForm(email, phone, allInputs, textarea) {
	
	let counter = 0
	
	// Check empty inputs
	
	allInputs.forEach((el) => {
		
		CheckEmptyInputs(el) && counter++
		
	})
	
	// Check textarea is empty
	
	CheckEmptyInputs(textarea) && counter++
	
	// Validate Email
	
	ValidateEmail(email) && counter++
	
	// Validate Phone
	if (phone) {
		ValidatePhone(phone) && counter++
	}
	
	
	counter > 0 ? alert('INVALID ')
		: alert('VALID')
	
}


function CheckEmptyInputs(el) {
	if (el.value === '' || el.value.length === 0) {
		el.parentNode.classList.add('error')
		return true
	} else {
		el.parentNode.classList.remove('error')
		return false
	}
}

function ValidateEmail(email) {
	if (!regEmail.test(email.value)) {
		email.parentNode.classList.add('error')
		return true
	} else {
		email.parentNode.classList.remove('error')
		return false
	}
}

function ValidatePhone(phone) {
	if (phone.value.length === 0 || phone.value.toString().match(/[0-9]/g).length < 8) {
		phone.parentNode.classList.add('error')
		return true
	} else {
		phone.parentNode.classList.remove('error')
		return false
	}
}



