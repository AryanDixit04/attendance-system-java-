// Function to handle selection of autocomplete suggestion
function selectAutocompleteSuggestion(suggestion) {
    // Update input field with selected suggestion
    inputField.value = suggestion;
    // Clear suggestions dropdown
    clearAutocompleteSuggestions();
}

// Event listener for keyboard navigation
inputField.addEventListener('keydown', function(event) {
    const keyCode = event.keyCode;
    if (keyCode === 13 || keyCode === 9) { // Enter or Tab key
        // Handle selection based on currently highlighted suggestion
        const highlightedSuggestion = document.querySelector('.autocomplete-suggestion.highlighted');
        if (highlightedSuggestion) {
            selectAutocompleteSuggestion(highlightedSuggestion.textContent);
            event.preventDefault(); // Prevent default behavior (e.g., form submission)
        }
    } else if (keyCode === 38) { // Up arrow key
        // Navigate upwards in suggestions dropdown
        navigateAutocompleteSuggestions('up');
        event.preventDefault(); // Prevent scrolling behavior
    } else if (keyCode === 40) { // Down arrow key
        // Navigate downwards in suggestions dropdown
        navigateAutocompleteSuggestions('down');
        event.preventDefault(); // Prevent scrolling behavior
    }
});

// Function to navigate autocomplete suggestions dropdown
function navigateAutocompleteSuggestions(direction) {
    const highlightedSuggestion = document.querySelector('.autocomplete-suggestion.highlighted');
    if (highlightedSuggestion) {
        highlightedSuggestion.classList.remove('highlighted');
        const sibling = direction === 'up' ? highlightedSuggestion.previousElementSibling : highlightedSuggestion.nextElementSibling;
        if (sibling) {
            sibling.classList.add('highlighted');
        } else if (direction === 'up') {
            suggestionsDropdown.lastChild.classList.add('highlighted');
        } else {
            suggestionsDropdown.firstChild.classList.add('highlighted');
        }
    } else if (direction === 'down') {
        suggestionsDropdown.firstChild.classList.add('highlighted');
    } else {
        suggestionsDropdown.lastChild.classList.add('highlighted');
    }
}