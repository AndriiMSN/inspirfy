const heroTitleSvg = document.querySelector('.hero__title')
const heroTitleSvgText = 'Inspiration'

const regLetterLong = /^[qypgj]/g

function CreateSvgMainBlock(text, element) {
    const y = regLetterLong.test(text) ? '60%' : '65%'
    const svg = `
        <svg 
            shape-rendering="geometricPrecision" 
            class= "${element.className.split(' ')[0]}__inspiration"
            viewBox="0 0 1173 233"
            xmlns="http://www.w3.org/2000/svg">
                <text 
                    text-rendering="geometricPrecision"
                     x="0" 
                     y= ${y}>
                    ${text}
                 </text>
          </svg>
    `
    element.insertAdjacentHTML('afterbegin', svg)
}

CreateSvgMainBlock(heroTitleSvgText, heroTitleSvg)

// BRANDS ------------------------------------------------------------------

const arrayBrandsNumbers = [167, 346, 498, 999]
const arrayBrandsBlock = document.querySelectorAll('.brands__count__block__number')

function CreateSvgBrands() {
    for (let i = 0; i < arrayBrandsBlock.length; i++) {
        let svg = `
            <svg 
                class="" 
                viewBox="0 0 158 90" 
                xmlns="http://www.w3.org/2000/svg">
                    <text 
                        x="0" 
                        y="95%">${arrayBrandsNumbers[i]}
                    </text>
             </svg>
        `
        arrayBrandsBlock[i].innerHTML = svg
    }
}

CreateSvgBrands()


// TOGGLE IMAGES ------------------------------------------------------------

const arrayToggleTitles = document.querySelectorAll('.toggle__block__span')


