const images = () => {
    const imagePopup = document.createElement('div')
    const bigImage = document.createElement('img')
    const worksSection = document.querySelector('.works')

    imagePopup.classList.add('popup')
    imagePopup.append(bigImage)
    worksSection.append(imagePopup)

    imagePopup.style.display = 'none'
    imagePopup.style.justifyContent = 'center'
    imagePopup.style.alignItems = 'center'

    worksSection.addEventListener('click', (e) => {
        e.preventDefault()
        const target = e.target
        if (target && target.classList.contains('preview')) {
            imagePopup.style.display = 'flex'
            const path = target.parentElement.getAttribute('href')
            bigImage.src = path
        }
        if (target && target.matches('div.popup')) imagePopup.style.display = 'none'
    })
}

export {images}