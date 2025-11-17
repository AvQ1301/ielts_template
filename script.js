// Sample data for testing
const sampleData = [
    {
        Question: "What is the meaning of 'ubiquitous'?",
        Example: "Smartphones have become ubiquitous in modern society.",
        Answer: "Present, appearing, or found everywhere",
        Explanation: "Ubiquitous means existing or being everywhere at the same time. It comes from the Latin word 'ubique' meaning 'everywhere'.",
        Notes: "Commonly used in academic writing. Synonyms: omnipresent, pervasive, widespread."
    },
    {
        Question: "What is the past perfect tense used for?",
        Example: "She had finished her homework before her friends arrived.",
        Answer: "To describe an action that was completed before another past action",
        Explanation: "The past perfect tense (had + past participle) is used to show that one action happened before another action in the past. It helps establish the order of events.",
        Notes: "Structure: Subject + had + past participle. Often used with 'before', 'after', 'when', 'by the time'."
    },
    {
        Question: "What is the main idea of this passage?",
        Example: "Climate change is one of the most pressing issues of our time. Scientists worldwide agree that human activities, particularly the burning of fossil fuels, have significantly contributed to rising global temperatures.",
        Answer: "Climate change is a critical issue caused primarily by human activities",
        Explanation: "The main idea is the central point the author wants to convey. In this passage, it's that climate change is urgent and caused by human actions.",
        Notes: "To find the main idea, look for the topic sentence (usually the first sentence) and supporting details."
    }
];

let currentCardIndex = 0;
let isFlipped = false;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadCard(currentCardIndex);
    
    // Event listeners
    document.getElementById('flipBtn').addEventListener('click', flipCard);
    document.getElementById('nextBtn').addEventListener('click', nextCard);
    document.getElementById('prevBtn').addEventListener('click', prevCard);
    document.getElementById('sampleSelect').addEventListener('change', function(e) {
        currentCardIndex = parseInt(e.target.value);
        loadCard(currentCardIndex);
        resetFlip();
    });
});

function loadCard(index) {
    const data = sampleData[index];
    const card = document.getElementById('ankiCard');
    
    // Replace Anki template variables with actual data
    const frontHTML = card.querySelector('.card-front').innerHTML;
    const backHTML = card.querySelector('.card-back').innerHTML;
    
    // Update front
    const frontContent = card.querySelector('.card-front .card-content');
    frontContent.innerHTML = `
        <h2 class="card-title">Front Side</h2>
        <div class="card-field">
            <div class="field-label">Question:</div>
            <div class="field-content">${data.Question}</div>
        </div>
        <div class="card-field">
            <div class="field-label">Example:</div>
            <div class="field-content">${data.Example}</div>
        </div>
    `;
    
    // Update back
    const backContent = card.querySelector('.card-back .card-content');
    backContent.innerHTML = `
        <h2 class="card-title">Back Side</h2>
        <div class="card-field">
            <div class="field-label">Answer:</div>
            <div class="field-content">${data.Answer}</div>
        </div>
        <div class="card-field">
            <div class="field-label">Explanation:</div>
            <div class="field-content">${data.Explanation}</div>
        </div>
        <div class="card-field">
            <div class="field-label">Notes:</div>
            <div class="field-content">${data.Notes}</div>
        </div>
    `;
}

function flipCard() {
    const card = document.getElementById('ankiCard');
    isFlipped = !isFlipped;
    
    if (isFlipped) {
        card.classList.add('flipped');
        document.getElementById('cardFront').style.display = 'none';
        document.getElementById('cardBack').style.display = 'block';
    } else {
        card.classList.remove('flipped');
        document.getElementById('cardFront').style.display = 'block';
        document.getElementById('cardBack').style.display = 'none';
    }
}

function resetFlip() {
    isFlipped = false;
    const card = document.getElementById('ankiCard');
    card.classList.remove('flipped');
    document.getElementById('cardFront').style.display = 'block';
    document.getElementById('cardBack').style.display = 'none';
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % sampleData.length;
    document.getElementById('sampleSelect').value = currentCardIndex;
    loadCard(currentCardIndex);
    resetFlip();
}

function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + sampleData.length) % sampleData.length;
    document.getElementById('sampleSelect').value = currentCardIndex;
    loadCard(currentCardIndex);
    resetFlip();
}
