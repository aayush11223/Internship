//  function to throttle another function.

function throttle(func, delay) {
    let lastCall = 0;

    return function () {
        let now = Date.now();

        if (now - lastCall >= delay) {
            func();
            lastCall = now;
        }
    };
}