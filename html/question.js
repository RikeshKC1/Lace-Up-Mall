function submitForm() {
    const form = document.getElementById('shoe-preference-form');
    const selectedOption = form.querySelector('input[name="shoe-preference"]:checked');

    if (selectedOption) {
        const preference = selectedOption.value;
        alert(`Your preferred shoes for outdoor adventures are: ${preference}`);
    } else {
        alert("Please select a shoe preference.");
    }
}