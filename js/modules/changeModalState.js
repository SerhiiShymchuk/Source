import checkNumberInputs from './checkNumberInputs.js'

const changeModalState = (modalState) => {
    const windowForms = document.querySelectorAll('.balcon_icons_img')
    // const windowWidth = document.getElementById('width') 
    // const windowHeight = document.getElementById('height')
    // const windowType = document.getElementById('view_type')
    const windowWidth = document.querySelectorAll('#width') 
    const windowHeight = document.querySelectorAll('#height')
    const windowType = document.querySelectorAll('#view_type')
    const windowProfile = document.querySelectorAll('.checkbox')

    checkNumberInputs('#width')
    checkNumberInputs('#height')

    function bindActionToElements(event, element, stateProperty) {
        element.forEach((form, i) => {
                form.addEventListener(event, () => {
                    // if (element.length > 1) modalState[stateProperty] = i
                    // else modalState[stateProperty] = form.value //записую в стейт значення з інпута
                    // console.log(modalState)
                    if (form.tagName === 'SPAN') {
                        modalState[stateProperty] = i
                    } else if (form.tagName === 'INPUT') {
                        if (form.getAttribute('type') === 'checkbox') {
                            (i === 0) ? modalState[stateProperty] = "Холодное": modalState[stateProperty] = "Теплое"
                            element.forEach((box, j) => {
                                box.checked = false
                                if (j === i) box.checked = true
                            })
                        }
                        else {modalState[stateProperty] = form.value}
                    } else if (form.tagName === 'SELECT') {
                        modalState[stateProperty] = form.value
                    }
                    console.log(modalState)
                })
            })
        //так як елементів може бути різна кількість від 1 і більше то можна перевіряти псевдомасив по типу або просто викосристати квіріселекторОл щоб скрізь були псевдомасиви елементів 
    }
    bindActionToElements('click', windowForms, 'form')
    bindActionToElements('input', windowWidth, 'width')
    bindActionToElements('input', windowHeight, 'height')
    bindActionToElements('change', windowType, 'type')
    bindActionToElements('change', windowProfile, 'profile')

    // windowForms.forEach((form, i) => {
    //     form.addEventListener('click', () => {
    //         modalState.form = i
    //         console.log(modalState)
    //     })
    // })
}
export default changeModalState