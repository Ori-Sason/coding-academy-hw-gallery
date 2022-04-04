'use strict'

$(document).ready(renderPortfolioItems)

function renderPortfolioItems() {
  const projects = getProjects()
  const strHtml = projects.map(
    (proj) =>
      `<div class="col-md-4 col-sm-6 portfolio-item">
    <a
      class="portfolio-link"
      data-toggle="modal"
      href="#portfolioModal1"
    >
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img
        class="img-fluid"
        src="${proj.imgUrl}"
        alt=""
      />
    </a>
    <div class="portfolio-caption">
      <h4>${proj.name}</h4>
      <p class="text-muted">${proj.labels.join(', ')}</p>
    </div>
  </div>`
  )

  $('.portfolio-grid').html(strHtml.join(''))
}
