async function createNews() {
  const key = "310caba4b7714db19c1177db67ca3e4a";
  var topicname = document.getElementById("topicBox").value;
  var topic = topicname.replaceAll(" ", "");

  var url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${key}`;

  console.log(topic);

  // Clear existing news cards from the container
  var newsContainer = document.getElementById("newsContainer");
  newsContainer.innerHTML = "";

  await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      var res = data.articles;

      console.log(res);

      res.forEach((elem) => {
        var newscard = document.createElement("div");
        newscard.innerHTML = `
                    <div class="container text-center">
                        <div class="row justify-content-md-center">
                            <div class="col-12">
                                <div class="card" style="width: 18rem;">
                                    <img src="${elem.urlToImage}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${topicname} news</h5>
                                        <p class="card-text">${elem.description}</p>
                                        <a href="${elem.url}" class="btn btn-primary">Open Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

        newscard.setAttribute("id", "newsCard");

        newsContainer.appendChild(newscard);
      });
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}
