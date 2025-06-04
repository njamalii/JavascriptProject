# Javascript Project
---
## About project
---
The name of website is **Chessy**.

This website sells chess equipment and has articles to read in article page.

This website has 6 pages:
1. Articles
2. Shopping
3. Contact Us
4. Sign-in/Login
5. Basket
6. Main page

For the Article and Shopping page I used Postman to add data to json server and using ajax I used Get method to get data for Article and Shopping page.

This is part of Get method for Articles page:

 	`var settings = {
            "url": "http://localhost:3000/articles",
            "method": "GET",
            "timeout": 0,
        };

        $.ajax(settings).done(function (response) {
            for (item of response) {
                $("#articles").append(`<div class="card bg-secondary text-center card-at col-4 d-inline-block mt-5 margin ">
                    <img class="card-img-top " height="200px" src="${item.image}" alt="Card image">
    <div class="card-body">
      <h4 class="card-title">${item.title}</h4>
      <p class="card-text fst-italic">${item.content}</p>
      <a href="/singleArticle.html?id=${item.id}" class="btn btn-success">Read</a>
      <hr>
      <p class="text-light">More than 500 viewers</p>
    </div></div>`);
            }
        });`
  
## Frameworks and Programming languages
---
1. Html
2. Css
3. Bootstrap5(Framework)
4. Javascript
5. ajax
