
const quoteObj = [
    {
        author: " - Oscar Wilde",
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfvNA9gzTKTG1XN6Qx7gLETARwEZn2X44pw&s"
    },
    {
        author: " - Emily Dickinson",
        quote: "That it will never come again is what makes life so sweet.",
        pictureURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Black-white_photograph_of_Emily_Dickinson2.png/800px-Black-white_photograph_of_Emily_Dickinson2.png"
    },
    {
        author: " - George Eliot",
        quote: "It is never too late to be what you might have been.",
        pictureURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/George_Eliot%2C_por_Fran%C3%A7ois_D%27Albert_Durade.jpg/345px-George_Eliot%2C_por_Fran%C3%A7ois_D%27Albert_Durade.jpg"
    },
    {
        author: " - Ralph Waldo Emerson",
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        pictureURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ralph_Waldo_Emerson_by_Josiah_Johnson_Hawes_1857.jpg/640px-Ralph_Waldo_Emerson_by_Josiah_Johnson_Hawes_1857.jpg"
    },
    {
        author: " - Haruki Murakami",
        quote: "Pain is inevitable. Suffering is optional.",
        pictureURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/20100115161528%21HarukiMurakami.png/640px-20100115161528%21HarukiMurakami.png"
    },
    {
        author: " - William Shakespeare",
        quote: "All the world's a stage, and all the men and women merely players.",
        pictureURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/640px-Shakespeare.jpg"
    },
    {
        author: " - Plato",
        quote: "Be kind, for everyone you meet is fighting a hard battle.",
        pictureURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Plato-raphael.jpg/640px-Plato-raphael.jpg"
    },
    {
        author: " - Emily Dickinson",
        quote: "Unable are the loved to die for love is immortality.",
        pictureURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Black-white_photograph_of_Emily_Dickinson2.png/800px-Black-white_photograph_of_Emily_Dickinson2.png"
    },
    {
        author: " - Sylvia Plath",
        quote: "Let me live, love, and say it well in good sentences.",
        pictureURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Sylvia_Plath.jpg/640px-Sylvia_Plath.jpg"
    },
    {
        author: " - C.S. Lewis",
        quote: "Don't let your happiness depend on something you may lose.",
        pictureURL: "https://upload.wikimedia.org/wikipedia/en/1/1e/C.s.lewis3.JPG"
    }
    
];

const randIndex = () =>{
     let randomIndex = Math.floor(Math.random()*10);
    return randomIndex;
}

const img = document.querySelector(".author");
const quote = document.querySelector('#quote');
const name = document.querySelector("#author-name");
const button = document.querySelector("#nextbtn").addEventListener('click',()=>{
    const index = randIndex();
    img.src = quoteObj[index].pictureURL;
    quote.innerText = quoteObj[index].quote;
    name.innerHTML = quoteObj[index].author;
})