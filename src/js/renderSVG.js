const heroTitleSvg = document.querySelector('.hero__title')
const heroTitleSvgText = 'Inspiration'

const regLetterLong = /^[qypgj]/g

function CreateSvgMainBlock(text, element) {
    let y = regLetterLong.test(text) ? '60%' : '65%'
    const svg = `
        <svg 
            shape-rendering="geometricPrecision" 
            class= "${element.className.split(' ')[0]}__inspiration svg-text"
            xmlns="http://www.w3.org/2000/svg"
            dominant-baseline="middle"
            text-anchor="middle"
            >
                <text 
                    dominant-baseline="middle"
                    text-anchor="middle"
                    text-rendering="geometricPrecision"
                     x="50%" 
                     y= ${y}>
                    ${text}
                 </text>
          </svg>
    `
    element.insertAdjacentHTML('afterbegin', svg)

    setTimeout(() => {
        const heroTitleSvgStyle = () => {
            const svgText = document.querySelector(`.${element.className.split(' ')[0]}__inspiration.svg-text`)
            const box = svgText.querySelector('text').getBBox()
            svgText.style.width = `${box.width}px`
            svgText.style.height = `${box.height}px`
        }
        heroTitleSvgStyle()
        window.addEventListener('resize', () => {
            heroTitleSvgStyle()
        })
    }, 1000)
}

CreateSvgMainBlock(heroTitleSvgText, heroTitleSvg)

// BRANDS ------------------------------------------------------------------

const arrayBrandsNumbers = [167, 346, 498, 298]
const arrayBrandsBlock = document.querySelectorAll('.brands__count__block__number')

function CreateSvgBrands() {
    for (let i = 0; i < arrayBrandsBlock.length; i++) {
        let svg = `
            <svg 
                class="svg-text-brands svg-text" 
                shape-rendering="geometricPrecision"
                
                xmlns="http://www.w3.org/2000/svg">
                    <text 
                        text-rendering="geometricPrecision"
                        x="0" 
                        y="95%">
                            ${arrayBrandsNumbers[i]}
                    </text>
             </svg>
        `
        arrayBrandsBlock[i].innerHTML = svg
    }
}

CreateSvgBrands()


// TOGGLE IMAGES ------------------------------------------------------------

const arrayToggleTitles = document.querySelectorAll('.toggle__block')

const arrayToggleTitlesTextWithoutStroke = ['Target', 'Selling', 'Tools']
const arrayToggleTitlesTextWithStroke = ['Audience', 'Format', 'Unique']

function CreateSvgToggleImages() {
    for (let i = 0; i < arrayToggleTitles.length; i++) {
        let y = regLetterLong.test(arrayToggleTitlesTextWithStroke[i]) ? '85%' : '80%'
        let h1 = i == 2 ?
            `
                   <h1>
                        
                            <svg 
                            class="svg-text-toggle svg-text" 
                            shape-rendering="geometricPrecision"
                            xmlns="http://www.w3.org/2000/svg">
                                 <text 
                                    text-rendering="geometricPrecision" 
                                    x="0" 
                                    y=${y}>
                                        ${arrayToggleTitlesTextWithStroke[i]}
                                  </text>
                             </svg>
                         
                          ${arrayToggleTitlesTextWithoutStroke[i]}
                    </h1>
            `
            :
            `
               <h1>
                    ${arrayToggleTitlesTextWithoutStroke[i]}
                    
                        <svg 
                        class="svg-text-toggle svg-text" 
                        shape-rendering="geometricPrecision"
                        xmlns="http://www.w3.org/2000/svg">
                             <text 
                                text-rendering="geometricPrecision" 
                                x="0" 
                                y=${y}>
                                    ${arrayToggleTitlesTextWithStroke[i]}
                              </text>
                         </svg>
                     
                </h1>
        `
        arrayToggleTitles[i].insertAdjacentHTML('afterbegin', h1)
    }
}

CreateSvgToggleImages()

function fitSvgTextElements(elements) {


    for (const el of elements) {
        const box = el.querySelector('text') ?
            el.querySelector('text').getBBox() : false
        el ? el.style.width = `${box.width}px` : false
        el ? el.style.height = `${box.height}px` : false
    }
}

setTimeout(() => {
    const elements = document.querySelectorAll('.svg-text')
    fitSvgTextElements(elements)
    window.addEventListener('resize', () => {
        fitSvgTextElements(elements)
    });
}, 4000)



