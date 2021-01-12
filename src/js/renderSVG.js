// const heroTitleSvg = document.querySelector('.hero__title')
// const heroTitleSvgText = 'Inspiration'

// const regLetterLong = /[qypgj]/g

// let y = regLetterLong.test('') ? '85%' : '80%'


function fitSvgTextElements(elements) {


    for (const el of elements) {

        const box = el.querySelectorAll('text') ?
            el.querySelectorAll('text') : false
        // console.log(box);

        let maxWidth, maxHeight

        maxWidth = box[0].getBBox().width
        maxHeight = box[0].getBBox().height

        if (box.length > 0) {

            for (let i = 1; i < box.length; i++) {

                (maxWidth > box[i].getBBox().width) ? maxWidth = maxWidth : maxWidth = box[i].getBBox().width

                maxHeight += box[i].getBBox().height

                // console.log(maxHeight);

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
    // let y = '65%'
    // const svg = `
    //     <svg
    //         shape-rendering="geometricPrecision"
    //         class= "${element.className.split(' ')[0]}__inspiration svg-text"
    //         xmlns="http://www.w3.org/2000/svg"
    //         dominant-baseline="middle"
    //         text-anchor="middle"
    //         >
    //             <text
    //                 dominant-baseline="middle"
    //                 text-anchor="middle"
    //                 text-rendering="geometricPrecision"
    //                  x="50%"
    //                  y= ${y}>
    //                 ${text}
    //              </text>
    //       </svg>
    // `
    // element.insertAdjacentHTML('afterbegin', svg)

    setTimeout(() => {
        const heroTitleSvgStyle = () => {
            const svgText = document.querySelector(`.hero__title__inspiration.svg-text`)
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

CreateSvgMainBlock()

// FAQ BLOCK-----------------------------------------------------------

const arrayFaqItemsTitles = document.querySelectorAll('.faq__toggle__items__item__title__question')

function CreateSvgTextFaqQuestions() {
    for (let i = 1; i < arrayFaqItemsTitles.length + 1; i++) {
        let num = i > 9 ? i : '0' + i.toString()
        let svg = `
             <svg 
                class="svg-text svg-text-faq" 
                shape-rendering="geometricPrecision"
                xmlns="http://www.w3.org/2000/svg">
                 <text 
                    text-rendering="geometricPrecision"
                    x="0" 
                    y="80%">
                        ${num}
                 </text>
             </svg>
        `
        arrayFaqItemsTitles[i - 1].insertAdjacentHTML('beforebegin', svg)

    }
}

CreateSvgTextFaqQuestions()


// BRANDS ------------------------------------------------------------------

// const arrayBrandsNumbers = [167, 346, 498, 298]
// const arrayBrandsBlock = document.querySelectorAll('.brands__count__block__number')
//
// function CreateSvgBrands() {
//     for (let i = 0; i < arrayBrandsBlock.length; i++) {
//         let svg = `
//             <svg
//                 class="svg-text-brands svg-text"
//                 shape-rendering="geometricPrecision"
//
//                 xmlns="http://www.w3.org/2000/svg">
//                     <text
//                         text-rendering="geometricPrecision"
//                         x="0"
//                         y="95%">
//                             ${arrayBrandsNumbers[i]}
//                     </text>
//              </svg>
//         `
//         arrayBrandsBlock[i].innerHTML = svg
//     }
// }
//
// CreateSvgBrands()


// TOGGLE IMAGES ------------------------------------------------------------

// const arrayToggleTitles = document.querySelectorAll('.toggle__block')
//
// const arrayToggleTitlesTextWithoutStroke = ['Target', 'Selling', 'Tools']
// const arrayToggleTitlesTextWithStroke = ['Audience', 'Format', 'Unique']
//
// function CreateSvgToggleImages() {
//     for (let i = 0; i < arrayToggleTitles.length; i++) {
//         let y = '80%'
//         let h1 = i == 2 ?
//             `
//                    <h1>
//
//                             <svg
//                             class="svg-text-toggle svg-text"
//                             shape-rendering="geometricPrecision"
//                             xmlns="http://www.w3.org/2000/svg">
//                                  <text
//                                     text-rendering="geometricPrecision"
//                                     x="0"
//                                     y=${y}>
//                                         ${arrayToggleTitlesTextWithStroke[i]}
//                                   </text>
//                              </svg>
//
//                           ${arrayToggleTitlesTextWithoutStroke[i]}
//                     </h1>
//             `
//             :
//             `
//                <h1>
//                     ${arrayToggleTitlesTextWithoutStroke[i]}
//
//                         <svg
//                         class="svg-text-toggle svg-text"
//                         shape-rendering="geometricPrecision"
//                         xmlns="http://www.w3.org/2000/svg">
//                              <text
//                                 text-rendering="geometricPrecision"
//                                 x="0"
//                                 y=${y}>
//                                     ${arrayToggleTitlesTextWithStroke[i]}
//                               </text>
//                          </svg>
//
//                 </h1>
//         `
//         arrayToggleTitles[i].insertAdjacentHTML('afterbegin', h1)
//     }
// }
//
// CreateSvgToggleImages()


// STAGES BLOCK -----------------------------------------------------------

// const stagesTitleSvgText = 'sadipscing'
// const arrayStagesTitleText = [' Lorem ipsum dolor sit amet, consetetur ', 'elitr']
//
// const stagesTitle = document.querySelector('.stages .container h1')
//
// function CreateSvgTextStagesTitle() {
//     let y = '80%'
//
//     let h1 = `
//
//            ${arrayStagesTitleText[0]}
//             <svg
//                   shape-rendering="geometricPrecision"
//                   class="svg-text-stages-title svg-text"
//                   xmlns="http://www.w3.org/2000/svg">
//                     <text
//                         x="0"
//                         text-rendering="geometricPrecision"
//                         y=${y}>
//                        ${stagesTitleSvgText}
//                     </text>
//             </svg>
//             ${arrayStagesTitleText[1]}
//
//     `
//
//     stagesTitle.innerHTML = h1
// }
//
// CreateSvgTextStagesTitle()

// const stagesItems = document.querySelectorAll('.stages__items__item__animate')
//
// const nameEveryStage = 'Stage'
// const arrayStagesItemsTitles = ['MVP', 'Beta Testing', 'Official Launch', 'Official Launch', 'Official Launch']
//
// function CreateSvgTextStagesItems() {
//
//     for (let i = 0; i < stagesItems.length; i++) {
//
//         let y = '90%'
//
//         let svg = `
//            <svg
//             shape-rendering="geometricPrecision"
//             class="svg-text svg-text-item-title"
//             xmlns="http://www.w3.org/2000/svg">
//
//                 <text x="0"  text-rendering="geometricPrecision"  y="35%">${nameEveryStage + ' ' + (i + 1)}</text>
//                 <text x="0"  text-rendering="geometricPrecision"  y=${y}>${arrayStagesItemsTitles[i]}</text>
//             </svg>
//         `
//         stagesItems[i].insertAdjacentHTML('beforebegin', svg)
//
//     }
// }
//
// CreateSvgTextStagesItems()


// People block -----------------------------------------------------------

// const arrayPeopleTitleSvgText = ['the', 'best', 'interior design', 'solution']
//
// const arrayPeopleTitleText = ['People who', 'create', 'for customers and professionals']
//
// const peopleTitleSvg = document.querySelector('.people__describe h1 .people__describe__wave')
//
// function CreateSvgTextPeopleTitle() {
//
//     let h1 = `
//         ${arrayPeopleTitleText[0]}
//         <br/>
//         ${arrayPeopleTitleText[1]}
//     `
//     for (let i = 0; i < arrayPeopleTitleSvgText.length; i++) {
//
//         let y = '80%'
//
//         h1 += `\n
//             <svg
//                 shape-rendering="geometricPrecision"
//                 class="svg-text svg-text-people"
//                 xmlns="http://www.w3.org/2000/svg">
//
//                 <text x="0"
//                       text-rendering="geometricPrecision"
//                       y=${y}>${arrayPeopleTitleSvgText[i]}</text>
//             </svg>
//        `
//     }
//
//     h1 += `\n
//         ${arrayPeopleTitleText[2]}
//     `
//
//     peopleTitleSvg.insertAdjacentHTML('beforebegin', h1)
//
// }
//
// CreateSvgTextPeopleTitle()


// WRITE US BLOCK -----------------------------------------------------

// const writeUsTitle = document.querySelector('.write__us__block h1')
//
// const writeUsSvgText = 'other'
//
// const arrayWriteUsTitleText = ['Have', 'questions?']
//
// function CreateSvgTextWriteUsTitle() {
//
//     let h1 = `
//         ${arrayWriteUsTitleText[0]}
//
//         <svg
//             class="svg-text svg-text-writeUs"
//             shape-rendering="geometricPrecision"
//             xmlns="http://www.w3.org/2000/svg">
//                 <text
//                     x="0"
//                     text-rendering="geometricPrecision"
//                     y="80%">
//                        ${writeUsSvgText}
//                 </text>
//          </svg>
//
//         ${arrayWriteUsTitleText[1]}
//     `
//
//     writeUsTitle.innerHTML = h1
// }
//
// CreateSvgTextWriteUsTitle()

// BETA BLOCK ------------------------------------------------------------

// const betaTitle = document.querySelector('.beta__block h1')
//
// const arrayBetaTitleText = ['Become the first', 'and get', 'annual subscription']
//
// const arrayBetaTitleSvgText = ['Beta', 'tester', 'a', 'free']
//
// function CreateSvgTextBetaTitle() {
//
//     let h1 = `
//         ${arrayBetaTitleText[0]}
//
//          <svg
//             class="svg-text svg-text-beta"
//             shape-rendering="geometricPrecision"
//             xmlns="http://www.w3.org/2000/svg">
//                 <text
//                     x="0"
//                     text-rendering="geometricPrecision"
//                     y="95%">
//                        ${arrayBetaTitleSvgText[0]}
//                 </text>
//          </svg>
//
//          <svg
//             class="svg-text svg-text-beta"
//             shape-rendering="geometricPrecision"
//             xmlns="http://www.w3.org/2000/svg">
//                 <text
//                     x="0"
//                     text-rendering="geometricPrecision"
//                     y="95%">
//                        ${arrayBetaTitleSvgText[1]}
//                 </text>
//          </svg>
//
//          <br/>
//
//          ${arrayBetaTitleText[1]}
//
//          <svg
//             class="svg-text svg-text-beta"
//             shape-rendering="geometricPrecision"
//             xmlns="http://www.w3.org/2000/svg">
//                 <text
//                     x="0"
//                     text-rendering="geometricPrecision"
//                     y="95%">
//                        ${arrayBetaTitleSvgText[2]}
//                 </text>
//          </svg>
//
//          <svg
//             class="svg-text svg-text-beta"
//             shape-rendering="geometricPrecision"
//             xmlns="http://www.w3.org/2000/svg">
//                 <text
//                     x="0"
//                     text-rendering="geometricPrecision"
//                     y="95%">
//                        ${arrayBetaTitleSvgText[3]}
//                 </text>
//          </svg>
//
//          <br>
//
//          ${arrayBetaTitleText[2]}
//
//     `
//     betaTitle.innerHTML = h1
//
// }
//
// CreateSvgTextBetaTitle()

