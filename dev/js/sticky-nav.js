
/**
 * Set an element sticky
 * @param {*} navId 
 */
export function setElementSticky(navId) {
    const stickyDiv = document.getElementById(navId);
    const offsetTop = stickyDiv.offsetTop;
  
    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= offsetTop) {
            stickyDiv.classList.add('is-fixed');
        } else {
            stickyDiv.classList.remove('is-fixed');
        }
    });
}