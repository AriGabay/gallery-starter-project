// console.log('Starting up');
'use strict';

function init() {
  renderProjects();
  renderModals();
}
jQuery(document).ready(init);

function renderProjects() {
  var strHtmls = gProjects
    .map(function (project) {
      return `<div class="col-md-6 col-sm-12 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#${project.id}">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid image-thumbnail" src="${project.img}" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.title}</p>
        </div>
        </div>`;
    })
    .join('');
  $('.grid-container').html(strHtmls);
}

function renderModals() {
  var strHtmls = gProjects
    .map(function (project) {
      return `<div class="portfolio-modal modal fade" id="${project.id}" tabindex="-1" role="dialog" aria-hidden="true">
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
                <!-- Project Details Go Here -->
                <h2>${project.name}</h2>
                <p class="item-intro text-muted">${project.title}</p>
                <img class="img-fluid d-block mx-auto" src="${project.img}" alt="">
                <p>${project.desc}</p>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Link:<a target="_blank" href="${project.url}"> ${project.name}</a></li>
                  <li>Category: ${project.labels.join(', ')}</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>`;
    })
    .join('');
  $('.modals-container').html(strHtmls);
}

function getContact() {
  var $elSubject = $('.name-input').val();
  var $elMail = $('.email-input').val();
  var $elMsg = $('.message-input').val();
  var yourMail = `${$elMsg}%20My Mail is: ${$elMail}`
  var newUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=arigabay19988@gmail.com&su=${$elSubject}&body=${$elMsg}%20My Mail is: ${$elMail}`;
  window.location.href=newUrl
}
