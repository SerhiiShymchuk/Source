const forms = () => {
    const form = document.querySelectorAll('form')
    const input = document.querySelectorAll('input')
    const phoneInput = document.querySelectorAll('input[name="user_phone"]')
    const message = {
        loading: 'Загрузка',
        success: 'Спасибо скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так',
    }

    //валідація інпутів для номера телефону
    phoneInput.forEach(inputElem => {
        inputElem.addEventListener('input', () => {
            inputElem.value = inputElem.value.replace(/\D/, '')
        })
    })

    form.forEach(formElem => {
        formElem.addEventListener('submit', (e) => {
            e.preventDefault()

            let divMessage = document.createElement('div')
            divMessage.classList.add('status')
            formElem.append(divMessage)

            const formData = new FormData(formElem)

            postData('./assets/server.php', formData)
            .then(res => {
                console.log(res)
                divMessage.innerText = message.success
            })
            .catch(() => {
                divMessage.innerText = message.failure
            })
            .finally(() => {
                clearInputs()
                setTimeout(() => {
                    divMessage.remove()
                }, 5000);
            })
        })
    })

    async function postData(url, data) {
        document.getElementsByClassName('status').innerText = message.loading
        const result = await fetch(url, {
            method: 'POST',
            body: data,
        })
        return await result.text()
    }
    function clearInputs() {
        input.forEach(inputElem => {
            inputElem.value = ''
        })
    }
}
export default forms