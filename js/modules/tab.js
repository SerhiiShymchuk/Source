const tabs = (headerSelector, tabSelectors, contentSelectors, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelectors),
        content = document.querySelectorAll(contentSelectors);

    function hideTabContent() {
        content.forEach(el => {
            el.style.display = 'none'
        })
        tab.forEach(el => {
            el.classList.remove(activeClass)
        })
    }

    function showTabContent(index = 0) {
        content[index].style.display = display
        tab[index].classList.add(activeClass)
    }

    hideTabContent()
    showTabContent()

    header.addEventListener('click', (e) => {
        const target = e.target
        if (target &&
                (target.classList.contains(tabSelectors.slice(1)) || 
                target.parentElement.classList.contains(tabSelectors.slice(1)))) {
            tab.forEach((el, index) => {
                if (target == el || target.parentElement == el) {
                    hideTabContent()
                    showTabContent(index)
                }
            })
        }
    })

}

export default tabs