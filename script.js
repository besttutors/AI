const newsContainer = document.getElementById("news-container");
const searchInput = document.getElementById("search");

let articles = [];

async function loadNews(){

newsContainer.innerHTML = "<h2>Loading AI News...</h2>";

try{

const response = await fetch(
"https://api.spaceflightnewsapi.net/v4/articles/"
);

const data = await response.json();

articles = data.results;

showNews(articles);

}
catch(error){

newsContainer.innerHTML =
"<h2>Failed To Load AI News</h2>";

console.log(error);

}

}

function showNews(news){

let output = "";

news.slice(0,12).forEach(article=>{

output += `
<div class="news-card">

<img src="${article.image_url}" alt="news image">

<h3>${article.title}</h3>

<p>
${article.summary.substring(0,140)}...
</p>

<a href="${article.url}" target="_blank">
Read Full News
</a>

</div>
`;

});

newsContainer.innerHTML = output;

}

searchInput.addEventListener("input",()=>{

const value = searchInput.value.toLowerCase();

const filtered = articles.filter(article=>
article.title.toLowerCase().includes(value)
);

showNews(filtered);

});

loadNews();
```javascript
const rssUrl =
"https://api.rss2json.com/v1/api.json?rss_url=https://openai.com/news/rss.xml";

fetch(rssUrl)
.then(res => res.json())
.then(data => {

let output = "";

data.items.slice(0,8).forEach(item => {

output += `
<div class="news-card">
<h3>${item.title}</h3>
<p>${item.description.substring(0,120)}...</p>
<a href="${item.link}" target="_blank">
Read More
</a>
</div>
`;

});

document.getElementById("news-container").innerHTML = output;

});
