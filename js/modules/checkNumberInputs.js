const checkNumberInputs = (selector) => {
    const inputs = document.querySelectorAll(selector)

    inputs.forEach(inputElem => {
        inputElem.addEventListener('input', () => {
            inputElem.value = inputElem.value.replace(/\D/, '')
        })
    })
}
export default checkNumberInputs