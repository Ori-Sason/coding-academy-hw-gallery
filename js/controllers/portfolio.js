'use strict'

$(document).ready(init)

function init() {
  renderPortfolioItems()
  renderPortfolioModals()
}

function renderPortfolioItems() {
  const projects = getProjects()
  const strHtml = projects.map(
    (proj) =>
      `<div class="col-md-4 col-sm-6 portfolio-item">
    <a
      class="portfolio-link"
      data-toggle="modal"
      href="#portfolioModal-${proj.id}"
    >
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img
        class="img-fluid"
        src="img/portfolio/${proj.id}.png"
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

function renderPortfolioModals() {
  const projects = getProjects()
  const strHtml = projects.map(
    (proj) => `<div
  class="portfolio-modal modal fade"
  id="portfolioModal-${proj.id}"
  tabindex="-1"
  role="dialog"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl"></div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="modal-body">
              <h2>${proj.name}</h2>
              <p class="item-intro text-muted">
                ${proj.title}
              </p>
              <img
                class="img-fluid d-block mx-auto"
                src="img/portfolio/${proj.id}.png"
                alt=""
              />
              <p>
                ${proj.desc}
              </p>
              <ul class="list-inline text-left">
                <li><b>Date:</b> ${proj.publishedAt}</li>
                <li><b>Day at course:</b> ${proj.dayAtCourse}</li>
                <li><b>Category:</b> ${proj.labels.join(', ')}</li>
              </ul>
              <button
                class="btn btn-primary"
                data-dismiss="modal"
                onclick=(window.open("${proj.url? proj.url : 'projs/'+ proj.id +'/'}"))
                type="button"
              >
                <i class="fa fa-play"></i>
                Go To Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
  )

  $('.portfolio-modals').html(strHtml)
}
