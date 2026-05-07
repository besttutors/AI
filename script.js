const newsContainer = document.getElementById("news-container");

async function loadNews() {

newsContainer.innerHTML = "<h2>Loading AI News...</h2>";

try {

const response = await fetch(
"https://api.spaceflightnewsapi.net/v4/articles/"
);

const data = await response.json();

let output = "";

data.results.slice(0,8).forEach(article => {

output += `
<div class="news-card">

<img src="${article.image_url}"
style="width:100%;border-radius:10px;">

<h3>${article.title}</h3>

<p>
${article.summary.substring(0,120)}...
</p>

<a href="${article.url}" target="_blank">
Read More
</a>

</div>
`;

});

newsContainer.innerHTML = output;

} catch(error){

newsContainer.innerHTML =
"<h2>Failed to load news</h2>";

console.log(error);

}

}

loadNews();
