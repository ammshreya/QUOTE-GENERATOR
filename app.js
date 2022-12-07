const text = document.querySelector(".quote");
const author = document.querySelector(".author");
const nextBtn = document.querySelector(".next");

const getQuote = async () => {
  //it return a promise so async is used
  const res = await fetch("https://type.fit/api/quotes");
  const quotes = await res.json();
  const num = Math.floor(Math.random() * quotes.length);
  //IT WILL RETURN A REAL VALUE BUT WE NEED A INTEGER IN ORDER TO ACCESS..SO FLOOR FUNCTION IS USED THERE
  const tweetBtn = document.querySelector(".twitter-share-button");

  
  const item = quotes[num];
  //THIS GIVES RANDOM QUOTES AND THE AUTHOR...USED TO ACCESS THE PARTICULAR MEMBER OF THE Array
    // console.log(item);
    // console.log(num);
  const quote = item.text;
  const authorName = item.author;
  text.innerText = quote;
  author.innerText = authorName;

  tweetBtn.href = `https://twitter.com/intent/tweet?text=${quote}.${authorName}`;
};
nextBtn.addEventListener("click", getQuote);
//BY USING THIS WHENEVER THE NEXT BUTTON IS CLICKED IT GIVES A NEWQUOTE

getQuote();
//WE WILL GET A ARAY CONTAINING A TEXT AND A AUTHOR BUT WE NEED ONLY THE QUOTES AND AUTHOR NOT THE ENTIRE ARRAY
