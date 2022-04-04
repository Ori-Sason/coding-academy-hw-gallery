'use strict'

$(document).ready(init)

function init() {
  renderPortfolioItems()
  onPortfolioModal()
}

function renderPortfolioItems() {
  const projects = getProjects()
  const strHtml = projects.map(
    (proj) =>
      `<div class="col-md-4 col-sm-6 portfolio-item">
    <a
      class="portfolio-link"
      data-toggle="modal"
      href="#portfolioModal"
      onclick="onPortfolioModal('${proj.id}')"
    >
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-eye fa-3x"></i>
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

  $('.portfolio-grid').html(strHtml)
}

function onPortfolioModal(projId) {
  if (!projId) return

  const proj = getProjById(projId)
  const $elModal = $('.modal-dialog')
  $elModal.find('h2').text(proj.name)
  $elModal.find('.modal-title').text(proj.title)
  $elModal.find('img').attr('src', `img/portfolio/${proj.id}.png`)
  $elModal.find('.modal-desc').text(proj.desc)
  $elModal.find('li:nth-of-type(1) span').text(proj.publishedAt)
  $elModal.find('li:nth-of-type(2) span').text(proj.dayAtCourse)
  $elModal.find('li:nth-of-type(3) span').text(proj.labels.join(', '))
  
  $elModal.find('button').off('click', onGoToProject)
  $elModal.find('button').click({ id: proj.id }, onGoToProject)
}

function onGoToProject(ev) {
  const proj = getProjById(ev.data.id)
  const url = proj.url ? proj.url : `projs/${proj.id}/`
  window.open(url, '_blank')
}
