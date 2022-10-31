let btn = document.querySelector('.btn'),
spinIcon = document.querySelector('.spinner'),
btntext = document.querySelector('.btn-text');

btn.addEventListener('click',() => {
    btn.classList.add('checked');
    btn.style.cursor = "wait";
    btntext.textContent = 'loading';

    setTimeout(() => {
        btn.style.pointerEvents = "none";
        btn.style.cursor
        spinIcon.classList.replace("fa-spin","check")
        spinIcon.classList.replace("fa-circle-notch", "fa-check");
        btntext.textContent = "Done";
    }, 2000)
})