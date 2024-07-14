// Function to display autocomplete suggestions in dropdown
function displayAutocompleteSuggestions(suggestions) {
    // Clear previous suggestions
    clearAutocompleteSuggestions();

    // Display new suggestions in dropdown
    suggestions.forEach(suggestion => {
        const suggestionElement = document.createElement('div');
        suggestionElement.textContent = suggestion;
        suggestionElement.classList.add('autocomplete-suggestion');
        // Add click event listener to handle selection
        suggestionElement.addEventListener('click', function() {
            selectAutocompleteSuggestion(suggestion);
        });
        suggestionsDropdown.appendChild(suggestionElement);
    });
}

// Function to clear autocomplete suggestions dropdown
function clearAutocompleteSuggestions() {
    while (suggestionsDropdown.firstChild) {
        suggestionsDropdown.removeChild(suggestionsDropdown.firstChild);
    }
}