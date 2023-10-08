document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('inputText');
    const countButton = document.getElementById('countButton');
    const result = document.getElementById('result');

    countButton.addEventListener('click', function () {
        const text = inputText.value.toLowerCase(); // Convert input to lowercase for case-insensitive counting
        const vowels = 'aeiou';
        let vowelCount = 0;

        for (let i = 0; i < text.length; i++) {
            if (vowels.includes(text[i])) {
                vowelCount++;
            }
        }

        result.textContent = `Number of vowels: ${vowelCount}`;
    });
});
