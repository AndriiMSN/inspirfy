const heroTitleSvg = document.querySelector('.hero__title')
const heroTitleSvgText = 'Inspiration'

const regLetterLong = /^[qypgj]/g

// let y = regLetterLong.test('') ? '85%' : '80%'


function fitSvgTextElements(elements) {


    for (const el of elements) {

        const box = el.querySelectorAll('text') ?
            el.querySelectorAll('text') : false
        console.log(box);

        let maxWidth, maxHeight

        maxWidth = box[0].getBBox().width
        maxHeight = box[0].getBBox().height

        if (box.length > 0) {

            for (let i = 1; i < box.length; i++) {

                (maxWidth > box[i].getBBox().width) ? maxWidth = maxWidth : maxWidth = box[i].getBBox().width

                maxHeight += box[i].getBBox().height

                console.log(maxHeight);

            }

        }
        el ? el.style.width = `${maxWidth}px` : false
        el ? el.style.height = `${maxHeight}px` : false
    }
}

setTimeout(() => {
    const elements = document.querySelectorAll('.svg-text')
    fitSvgTextElements(elements)
    window.addEventListener('resize', () => {
        fitSvgTextElements(elements)
    });
}, 4000)


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


// STAGES BLOCK -----------------------------------------------------------

const stagesTitleSvgText = 'sadipscing'

const stagesTitle = document.querySelector('.stages .container h1')

function CreateSvgTextStagesTitle() {
    let y = regLetterLong.test(stagesTitleSvgText) ? '85%' : '80%'

    let h1 = `
        
            Lorem ipsum dolor sit amet, 
            consetetur 
            <svg
                  shape-rendering="geometricPrecision"
                  class="svg-text-stages-title svg-text"
                  xmlns="http://www.w3.org/2000/svg">
                    <text 
                        x="0" 
                        y=${y}>
                       sadipscing
                    </text>
            </svg>
            elitr
        
    `

    stagesTitle.innerHTML = h1
}

CreateSvgTextStagesTitle()

const stagesItems = document.querySelectorAll('.stages__items__item__animate')

const nameEveryStage = 'Stage'
const arrayStagesItemsTitles = ['MVP', 'Beta Testing', 'Official Launch', 'Official Launch', 'Official Launch']

function CreateSvgTextStagesItems() {

    for (let i = 0; i < stagesItems.length; i++) {

        let y = regLetterLong.test(arrayStagesItemsTitles[i]) ? '90%' : '85%'

        let svg = `
           <svg 
            shape-rendering="geometricPrecision"
            class="svg-text svg-text-item-title" 
            xmlns="http://www.w3.org/2000/svg">
               
                <text x="0"  text-rendering="geometricPrecision"  y="35%">${nameEveryStage + ' ' + (i + 1)}</text>
                <text x="0"  text-rendering="geometricPrecision"  y=${y}>${arrayStagesItemsTitles[i]}</text>
            </svg>
        `
        stagesItems[i].insertAdjacentHTML('beforebegin', svg)

    }
}

CreateSvgTextStagesItems()



