const timer = (selector, deadline) => {
    function getTimeRemaining(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date())
        const seconds = Math.floor(time/1000 %60)
        const minutes = Math.floor(time/(1000*60) %60)
        const hours = Math.floor(time/(1000*60*60) %24)
        const days = Math.floor(time/(1000*60*60*24))
        return {
            'total': time,
            days,
            hours,
            minutes,
            seconds
        }
    }

    function setClock(selector, deadline) {
        const timer = document.querySelector(selector)
        const days = timer.querySelector('#days')
        const hours = timer.querySelector('#hours')
        const minutes = timer.querySelector('#minutes')
        const seconds = timer.querySelector('#seconds')
        const interval = setInterval(updateClock, 1000)

        function updateClock() {
            const timeObj = getTimeRemaining(deadline)
            days.innerText = addZeroToTimer(timeObj.days)
            hours.innerText = addZeroToTimer(timeObj.hours)
            minutes.innerText = addZeroToTimer(timeObj.minutes)
            seconds.innerText = addZeroToTimer(timeObj.seconds)

            if (timeObj.total <= 0) {
                days.innerText = '00'
                hours.innerText = '00'
                minutes.innerText = '00'
                seconds.innerText = '00'

                clearInterval(interval)
            }
        }
    }

    function addZeroToTimer(number) {
        const time = (number <= 9) ? '0' + number : number
        return time
    }
    setClock(selector, deadline)
}
export {timer}