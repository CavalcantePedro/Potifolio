const bt_nav = document.querySelectorAll('#bt_nav');

bt_nav[0].style.color = "#3c77ad";

bt_nav.forEach((element,i) => {
    element.addEventListener('click', (event) => {
       switch (i) {
        case 0:
            element.style.color = "#3c77ad";
            bt_nav[1].style.color = "#ffffff";
            bt_nav[2].style.color = "#ffffff";
            break;
        case 1:
            element.style.color = "#3c77ad";
            bt_nav[0].style.color = "#ffffff";
            bt_nav[2].style.color = "#ffffff";
            break;
        case 2:
            element.style.color = "#3c77ad";
            bt_nav[0].style.color = "#ffffff";
            bt_nav[1].style.color = "#ffffff";
            break;
        default:
            break;
       }
    });
});
