'use strict'
var gCurrProject;
function init() {
  renderPortabeloGrid()
  renderPortabeloModal()
}

function renderPortabeloGrid() {
  var projs = getExProjects();
  var strHtmls = projs.map(function (proj) {
    gCurrProject=proj
    return `        <div class="col-md-4 col-sm-6 portfolio-item">
    <a class= " portfolio-link" data-toggle="modal" href="#portfolioModal">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="img/portfolio/${proj.id}.jpg" alt="">
      </a>
      <div class="portfolio-caption">
      <h4>${proj.labels[0]}</h4>
      <p class="text-muted">${proj.labels[1]}</p>
      </div>
      </div> `
  })
  $('.put-the-proj-her').html(strHtmls)
}

function renderPortabeloModal() {
  var projs = getExProjects();
  var strHtmls = projs.forEach(function (proj) {

    return `     <h2>Project Name</h2>
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.jpg" alt="">
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                  blanditiis
                  dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                  cupiditate,
                  maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client:${proj.labels[0]}</li>
                  <li>Category:${proj.labels[1]}</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>`
  })
  document.querySelector('.modal-body').innerHTML = strHtmls;
}

function openMpdal() {
  $('.portfolio-modal').hidden=false;
}