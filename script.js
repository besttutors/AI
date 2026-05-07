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
