function start() {
    if (window.innerHeight > window.innerWidth) {

        document.getElementById("card").style.width = '64vw';
    }
}

function animation() {

    document.getElementById("tab").style.transform = 'rotateX(180deg)';

    setTimeout(function() {

        document.getElementById("envelope").style.transform = 'translate(0px, 6vh)';

        document.getElementById("front").style.transform = 'translate(0px, 6vh)';

    }, 1000);

    setTimeout(function() {

        document.getElementById("envelope").style.opacity = '0';

        document.getElementById("front").style.opacity = '0';

    }, 1000);

    setTimeout(function() {

        document.getElementById("card").style.transform = 'rotate(0deg)';

        if (window.innerHeight > window.innerWidth) {

            document.getElementById("card").style.width = '50vw';
        } else {
            document.getElementById("card").style.width = '50vh';
        }

        document.getElementById("envelope").style.display = 'none';

        document.getElementById("front").style.display = 'none';

    }, 2800);

    setTimeout(function() {
        if (window.innerHeight > window.innerWidth) {

            document.getElementById("card").style.width = '64vw';
        } else {
            document.getElementById("card").style.width = '64vh';
        }
    }, 3500);

}