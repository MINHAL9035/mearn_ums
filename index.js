

function countDown(num) {

    var start = num

    const interval = setInterval(() => {
        console.log(start)
        start = start - 1
        if (start === -1) {
            clearInterval(interval)
        }

    }, 1000)


}

countDown(5)