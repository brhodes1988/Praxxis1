const translationDict = {
    'A': '🐸', 'B': '🐍', 'C': '🐢', 'D': '🐸🐢', 'E': '🐸🐍', 'F': '🐸🐸', 'G': '🐸🐍🐢', 'H': '🐍🐸', 'I': '🐢🐸',
    'J': '🐸🐍🐍', 'K': '🐢🐢', 'L': '🐍🐢', 'M': '🐢🐍', 'N': '🐍🐍', 'O': '🐸🐢🐢', 'P': '🐢🐢🐢', 'Q': '🐢🐢🐸',
    'R': '🐸🐢🐍', 'S': '🐍🐢🐍', 'T': '🐢🐸🐢', 'U': '🐸🐍🐸', 'V': '🐢🐍🐢', 'W': '🐍🐸🐍', 'X': '🐢🐍🐍🐢', 
    'Y': '🐍🐢🐸', 'Z': '🐸🐢🐍🐢',
    'a': '🐸', 'b': '🐍', 'c': '🐢', 'd': '🐸🐢', 'e': '🐸🐍', 'f': '🐸🐸', 'g': '🐸🐍🐢', 'h': '🐍🐸', 'i': '🐢🐸',
    'j': '🐸🐍🐍', 'k': '🐢🐢', 'l': '🐍🐢', 'm': '🐢🐍', 'n': '🐍🐍', 'o': '🐸🐢🐢', 'p': '🐢🐢🐢', 'q': '🐢🐢🐸',
    'r': '🐸🐢🐍', 's': '🐍🐢🐍', 't': '🐢🐸🐢', 'u': '🐸🐍🐸', 'v': '🐢🐍🐢', 'w': '🐍🐸🐍', 'x': '🐢🐍🐍🐢', 
    'y': '🐍🐢🐸', 'z': '🐸🐢🐍🐢'
};

// Create a reverse translation dictionary
const reverseTranslationDict = Object.fromEntries(
    Object.entries(translationDict).map(([key, value]) => [value, key])
);

function translateText() {
    const inputText = document.getElementById('inputText').value;
    let translatedText = '';
    for (let char of inputText) {
        translatedText += translationDict[char] || char;
    }
    document.getElementById('outputText').innerText = translatedText;
}

function reverseTranslateText() {
    const inputTranslatedText = document.getElementById('inputTranslatedText').value;
    let englishText = '';
    for (let char of inputTranslatedText) {
        englishText += reverseTranslationDict[char] || char;
    }
    document.getElementById('outputEnglishText').innerText = englishText;
}
