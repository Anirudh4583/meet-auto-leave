backgroundstate();

function backgroundstate() {
    let bgWork = localStorage.getItem('bgWork');

    // if the script is working in the backgroung
    if (bgWork === 1) {
        // show plan icon and hide plane slash icon
        document.querySelector('.fa-plane-slash').style.visibility = 'hidden';
        document.querySelector('.fa-plane').style.visibility = 'visible';
        // disable input field
        document.querySelector('.inputVal').disabled = true;

    } else if (bgWork === 0) {
        // show plan icon and hide plane slash icon
        document.querySelector('.fa-plane-slash').style.visibility = 'visible';
        document.querySelector('.fa-plane').style.visibility = 'hidden';
        // disable input field
        document.querySelector('.inputVal').value = '';
    }
}

document.querySelector('.fa-check').addEventListener('click', () => {
    let value = document.querySelector('.inputVal').value;

    if (value != '') {
        if (value < 0) {
            document.querySelector(".inputvalue").style.border = "2px solid red";
            setTimeout(() => {
                document.querySelector(".inputvalue").style.border = "1px solid black";
            }, 2500);
        }
    }
});