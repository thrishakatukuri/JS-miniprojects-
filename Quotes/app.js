
document.getElementById('btn').addEventListener('click',()=> {
function randomQuotes(){
        let randomNumbers = Math.floor(Math.random()*100);
        console.log(randomNumbers);
        let quotes = fetch('https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then((response)=>{return response.json()})
    
        .then((data) => {
      let quotesArray = data.quotes;
      let randomIndex = Math.floor(Math.random() * quotesArray.length);
      let quote = quotesArray[randomIndex].quote;
      let author = quotesArray[randomIndex].author;
    
      document.getElementById("quoteText").textContent = `"${quote}"`;
      document.getElementById("authorText").textContent = `— ${author}`;
    })
}randomQuotes()
})
