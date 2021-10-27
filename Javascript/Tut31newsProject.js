// 3b6e56aa9ad54372a1d51b92c41e1e45

console.log("this is news channel");

const xhr = new XMLHttpRequest();
xhr.open("GET", "Tut31newsProject.txt", true);

xhr.onreadystatechange = function () {
  console.log(this.readyState);
};

xhr.onload = function () {
  news = JSON.parse(this.responseText).articles;
  console.log(news);
  let accordionNews = document.querySelector(".accordionNews");
  html = "";
  news.forEach((element, index) => {
    html += `
    <div class="accordion-item">
        <h2 class="accordion-header " id="heading${index}">
          <button class="accordion-button d-flex collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
          <span><strong>Breaking News ${index + 1}</strong>   :<span><div>${element.title}</div>
          </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
          <div class="accordion-body">

${element.description}...<a class="link-info" href="${
      element["url"]
    }" target="_blank">Read More</a>
          </div>
        </div>
      </div>
    `;
  });
  accordionNews.innerHTML = html;
};
xhr.send();
