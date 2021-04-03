/**
 * Grab all "desc" item (options) and store them into a variable (`options`)
 */
const options = document.querySelectorAll('.desc');
/**
 * Grab `selected-item` element and store it into a variable (`selectedOption`)
 */
const selectedOption = document.querySelector('.selected-item');

/**
 * Iterate over all grabbed options
 */
options.forEach((option) => {
  /**
   * For each grabhbed option in the list attach CLICK listener;
   * Meaning what will happen when user clicks...
   */
  option.addEventListener('click', event => {
    /**
     * When user clicks, take option's text, and put it into
     * `selectedOption`.
     */
    selectedOption.innerHTML = event.target.getAttribute('data-price');
  });
});