const quotes = [
    { id: 0, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance you must keep moving.", likes: 0 },
    { id: 1, author: "Isaac Newton", quote: "If I have seen further it is by standing on the shoulders of Giants.", likes: 0 },
    { id: 2, author: "Yoda", quote: "Do, or do not. There is no try.", likes: 0 },
    { id: 3, author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken.", likes: 0 },
    { id: 4, author: "Maya Angelou", quote: "If you don't like something, change it. If you can't change it, change your attitude.", likes: 0 },
    { id: 5, author: "Mahatma Gandhi", quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.", likes: 0 },
    { id: 6, author: "Mark Twain", quote: "The secret of getting ahead is getting started.", likes: 0 },
    { id: 7, author: "Eleanor Roosevelt", quote: "The future belongs to those who believe in the beauty of their dreams.", likes: 0 },
    { id: 8, author: "Friedrich Nietzsche", quote: "He who has a why to live can bear almost any how.", likes: 0 },
    { id: 9, author: "Confucius", quote: "It does not matter how slowly you go as long as you do not stop.", likes: 0 },
    { id: 10, author: "Dalai Lama", quote: "Happiness is not something ready-made. It comes from your own actions.", likes: 0 },
    { id: 11, author: "Aristotle", quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", likes: 0 },
    { id: 12, author: "John Lennon", quote: "Life is what happens when you're busy making other plans.", likes: 0 },
    { id: 13, author: "Winston Churchill", quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", likes: 0 },
    { id: 14, author: "Steve Jobs", quote: "Your time is limited, so don't waste it living someone else's life.", likes: 0 },
    { id: 15, author: "Dr. Seuss", quote: "Don't cry because it's over, smile because it happened.", likes: 0 },
    { id: 20, author: "Albert Einstein", quote: "Imagination is more important than knowledge.", likes: 0 },
    { id: 21, author: "Albert Einstein", quote: "The important thing is not to stop questioning. Curiosity has its own reason for existing.", likes: 0 },
    { id: 22, author: "Albert Einstein", quote: "Anyone who has never made a mistake has never tried anything new.", likes: 0 },
    { id: 23, author: "Albert Einstein", quote: "Try not to become a man of success, but rather try to become a man of value.", likes: 0 },
    { id: 24, author: "Albert Einstein", quote: "In the middle of difficulty lies opportunity.", likes: 0 }
];

let lastQuoteIndex = -1;

const getRandomQuote = () => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex);
    lastQuoteIndex = randomIndex;
    return quotes[randomIndex];
};

const displayQuote = (quoteObj) => {
    document.getElementById("quote").innerText = quoteObj.quote;
    document.getElementById("author").innerText = `${quoteObj.author}`;
};

document.getElementById("generateQuote").addEventListener("click", () => {
    const randomQuote = getRandomQuote();
    displayQuote(randomQuote);
});

// Part 2: Add Buttons

document.getElementById("addQuoteForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const newQuoteText = document.getElementById("newQuote").value;
    const newAuthorText = document.getElementById("newAuthor").value;
    const newId = quotes.length;
    quotes.push({ id: newId, author: newAuthorText, quote: newQuoteText, likes: 0 });
    document.getElementById("newQuote").value = "";
    document.getElementById("newAuthor").value = "";
});

const getCurrentQuote = () => quotes[lastQuoteIndex];

document.getElementById("charCountWithSpaces").addEventListener("click", () => {
    const currentQuote = getCurrentQuote().quote;
    alert(`Character count (with spaces): ${currentQuote.length}`);
});

document.getElementById("charCountWithoutSpaces").addEventListener("click", () => {
    const currentQuote = getCurrentQuote().quote;
    alert(`Character count (without spaces): ${currentQuote.replace(/\s/g, "").length}`);
});

document.getElementById("wordCount").addEventListener("click", () => {
    const currentQuote = getCurrentQuote().quote;
    alert(`Word count: ${currentQuote.split(/\s+/).length}`);
});

document.getElementById("likeQuote").addEventListener("click", () => {
    const currentQuote = getCurrentQuote();
    currentQuote.likes += 1;
    alert(`Likes: ${currentQuote.likes}`);
});

// Part 3: Filter Form

let filteredQuotes = [];
let currentFilterIndex = 0;

document.getElementById("filterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const filterAuthor = document.getElementById("filterAuthor").value;
    filteredQuotes = quotes.filter(q => q.author.toLowerCase() === filterAuthor.toLowerCase());
    if (filteredQuotes.length > 0) {
        currentFilterIndex = 0;
        displayQuote(filteredQuotes[currentFilterIndex]);
    } else {
        alert("No quotes found for this author.");
    }
});

document.getElementById("prevQuote").addEventListener("click", () => {
    if (filteredQuotes.length > 0) {
        currentFilterIndex = (currentFilterIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
        displayQuote(filteredQuotes[currentFilterIndex]);
    }
});

document.getElementById("nextQuote").addEventListener("click", () => {
    if (filteredQuotes.length > 0) {
        currentFilterIndex = (currentFilterIndex + 1) % filteredQuotes.length;
        displayQuote(filteredQuotes[currentFilterIndex]);
    }
});
