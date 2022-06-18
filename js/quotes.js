const quotes = [
    {
        quote:"In the end, it's not the years in your life that count. It's the life in your years.",
        author:"Abraham Lincoln",
    },
    {
        quote:"Life is either a daring adventure or nothing at all.",
        author:"Helen Keller",
    },
    {
        quote:"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        author:"Dr. Seuss",
    },
    {
        quote:"I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom.",
        author:"Rosa Parks",
    },
    {
        quote:"Being happy never goes out of style.",
        author:"Lilly Pulitzer",
    },
    {
        quote:"All you need in this life is ignorance and confidence; then success is sure.",
        author:"Mark Twain",
    },
    {
        quote:"Never lose sight of the face that the most important yard stick to your success is how you treat other people.",
        author:"Barbara Bush",
    },
    {
        quote:"I don't go by the rule book…I lead from the heart, not the head.",
        author:"Princess Diana",
    },
    {
        quote:"Life is a mountain. Your goal is to find your path, not to reach the top.",
        author:"Maxime Lagacé",
    },
    {
        quote:"If you spend too much time thinking about a thing, you’ll never get it done.",
        author:"Bruce Lee",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

