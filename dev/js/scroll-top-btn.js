
/**
 * Set an element sticky
 * @param {*} navId 
 */
export function setupScrolltopBtn(btnId, pageYOffset) {
    const btnDomElt = document.getElementById(btnId);

    // 1st check
    toggleVisibility(btnDomElt, pageYOffset);

    window.addEventListener('scroll', function() {
        toggleVisibility(btnDomElt, pageYOffset);
    });
  
    btnDomElt.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}



function toggleVisibility(btnElt, pageYOffset) {
    if (window.pageYOffset > pageYOffset) { // Show the button after scrolling down 300px
        btnElt.style.display = 'block';
    } else {
        btnElt.style.display = 'none';
    }
}