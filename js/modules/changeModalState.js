import checkNumberInputs from './checkNumberInputs.js'

const changeModalState = (modalState) => {
    const windowForms = document.querySelectorAll('.balcon_icons_img')
    const windowWidth = document.getElementById('width') 
    const windowHeight = document.getElementById('height')
    const windowType = document.getElementById('view_type')
    const windowProfile = document.querySelectorAll('.checkbox')

    windowForms.forEach((form, i) => {
        form.addEventListener('click', () => {
            modalState.form = i
            //console.log(modalState)
        })
    })

    checkNumberInputs('width')
    checkNumberInputs('height')
}
export default changeModalState