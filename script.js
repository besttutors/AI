const newsContainer = document.getElementById("news-container");

fetch("https://hnrss.org/frontpage.jsonfeed")
.then(res => res.json())
.then(data => {

let output = "";

data.items.slice(0,8).forEach(item => {

output += `
<div class="news-card">
<h3>${item.title}</h3>
<p>${item.content_text || "Latest AI update"}</p>

<a href="${item.url}" target="_blank">
Read More
</a>
</div>
`;

});

newsContainer.innerHTML = output;

})
.catch(error => {

newsContainer.innerHTML =
"<p>Failed to load AI news.</p>";

console.log(error);

});
