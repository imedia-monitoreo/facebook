window.addEventListener('load', function() {
  var formPage = document.getElementById('form-page')
  var containerPage = document.getElementById('container-page')

  formPage.addEventListener('submit', function(event) {
    event.preventDefault();
    containerPage.innerHTML = `<h4 class="mdl-cell mdl-cell--12-col">Posts</h4>
                              <div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
                                <div class="section__circle-container__circle mdl-color--primary"></div>
                              </div>
                              <div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                                <h5>Lorem ipsum dolor sit amet</h5>
                                Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation
                                nostrud quis.

                                <span class="mdl-chip mdl-chip--deletable">
                                  <span class="mdl-chip__text">Me gusta(5)</span>
                                  <a href="#" class="mdl-chip__action">
                                    <i class="material-icons">thumb_up_alt</i>
                                  </a>
                                </span>
                                <span class="mdl-chip mdl-chip--deletable">
                                  <span class="mdl-chip__text">Compartidos(5)</span>
                                  <a href="#" class="mdl-chip__action">
                                    <i class="material-icons">share</i>
                                  </a>
                                </span>
                                <span class="mdl-chip mdl-chip--deletable">
                                  <span class="mdl-chip__text">Comentarios(10)</span>
                                  <button id="button-comments" type="button" class="mdl-chip__action">
                                    <i class="material-icons">chat_bubble</i>
                                  </button>
                                </span>
                              </div>
                              <div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
                                <div class="section__circle-container__circle mdl-color--primary"></div>
                              </div>
                              <div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                                <h5>Lorem ipsum dolor sit amet</h5>
                                Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation
                                nostrud quis.

                                <span class="mdl-chip mdl-chip--deletable">
                                  <span class="mdl-chip__text">Me gusta(5)</span>
                                  <a href="#" class="mdl-chip__action">
                                    <i class="material-icons">thumb_up_alt</i>
                                  </a>
                                </span>
                                <span class="mdl-chip mdl-chip--deletable">
                                  <span class="mdl-chip__text">Compartidos(5)</span>
                                  <a href="#" class="mdl-chip__action">
                                    <i class="material-icons">share</i>
                                  </a>
                                </span>
                                <span id="button-comments" class="mdl-chip mdl-chip--deletable cursor">
                                  <span class="mdl-chip__text">Comentarios(10)</span>
                                  <button type="button" class="mdl-chip__action">
                                    <i class="material-icons">chat_bubble</i>
                                  </button>
                                </span>
                              </div>
                              <div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
                                <div class="section__circle-container__circle mdl-color--primary"></div>
                              </div>
                              <div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                                <h5>Lorem ipsum dolor sit amet</h5>
                                Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation
                                nostrud quis.

                                <span class="mdl-chip mdl-chip--deletable">
                                  <span class="mdl-chip__text">Me gusta(5)</span>
                                  <a href="#" class="mdl-chip__action">
                                    <i class="material-icons">thumb_up_alt</i>
                                  </a>
                                </span>
                                <span class="mdl-chip mdl-chip--deletable">
                                  <span class="mdl-chip__text">Compartidos(5)</span>
                                  <a href="#" class="mdl-chip__action">
                                    <i class="material-icons">share</i>
                                  </a>
                                </span>
                                <span class="mdl-chip mdl-chip--deletable">
                                  <span class="mdl-chip__text">Comentarios(10)</span>
                                  <button id="button-comments" type="button" class="mdl-chip__action">
                                    <i class="material-icons">chat_bubble</i>
                                  </button>
                                </span>
                              </div>
                              <div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
                                <div class="section__circle-container__circle mdl-color--primary"></div>
                              </div>
                              <div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                                <h5>Lorem ipsum dolor sit amet</h5>
                                Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation
                                nostrud quis.

                                <span class="mdl-chip mdl-chip--deletable">
                                  <span class="mdl-chip__text">Me gusta(5)</span>
                                  <a href="#" class="mdl-chip__action">
                                    <i class="material-icons">thumb_up_alt</i>
                                  </a>
                                </span>
                                <span class="mdl-chip mdl-chip--deletable">
                                  <span class="mdl-chip__text">Compartidos(5)</span>
                                  <a href="#" class="mdl-chip__action">
                                    <i class="material-icons">share</i>
                                  </a>
                                </span>
                                <span class="mdl-chip mdl-chip--deletable">
                                  <span class="mdl-chip__text">Comentarios(10)</span>
                                  <button id="button-comments" type="button" class="mdl-chip__action">
                                    <i class="material-icons">chat_bubble</i>
                                  </button>
                                </span>
                              </div>`

    var buttonComments = document.getElementById('button-comments')
    
    buttonComments.addEventListener('click', function(event) {
      var containerComments = document.getElementById('container-comments')
      containerComments.innerHTML = ` <h4 class="mdl-cell mdl-cell--12-col">Comentarios</h4>
                                      <table class="mdl-data-table mdl-js-data-table">
                                        <thead>
                                          <tr>
                                            <th class="mdl-data-table__cell--non-numeric">Usuario</th>
                                            <th class="mdl-data-table__cell--non-numeric">Comentario</th>
                                            <th class="mdl-data-table__cell--non-numeric">Sentimiento</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td class="mdl-data-table__cell--non-numeric">
                                              <i class="material-icons mdl-list__item-avatar">person</i>
                                            </td>
                                            <td class="mdl-data-table__cell--non-numeric">
                                              <span>Bryan Cranston</span>
                                              <p class="mdl-list__item-text-body">
                                                Bryan Cranston played the role of Walter in Breaking Bad.
                                              </p>
                                            </td class="mdl-data-table__cell--non-numeric">
                                            <td class="mdl-data-table__cell--non-numeric">
                                              <label for="positivo" id="pos">
                                                <button type="button" class="mdl-chip__action">
                                                  <i class="material-icons">brightness_1</i>
                                                </button>
                                                <div class="mdl-tooltip" data-mdl-for="pos">
                                                  positivo
                                                </div>
                                              </label>
                                              <label for="neutro" id="neu">
                                                <button type="button" class="mdl-chip__action">
                                                  <i class="material-icons">brightness_1</i>
                                                </button>
                                                <div class="mdl-tooltip" data-mdl-for="neu">
                                                  Neutro
                                                </div>
                                              </label>
                                              <label for="negativo" id="neg">
                                                <button type="button" class="mdl-chip__action">
                                                  <i class="material-icons">brightness_1</i>
                                                </button>
                                                <div class="mdl-tooltip" data-mdl-for="neg">
                                                  Negativo
                                                </div>
                                              </label>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table class="mdl-data-table mdl-js-data-table">
                                        <thead>
                                          <tr>
                                            <th class="mdl-data-table__cell--non-numeric">Usuario</th>
                                            <th class="mdl-data-table__cell--non-numeric">Comentario</th>
                                            <th class="mdl-data-table__cell--non-numeric">Sentimiento</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td class="mdl-data-table__cell--non-numeric">
                                              <i class="material-icons mdl-list__item-avatar">person</i>
                                            </td>
                                            <td class="mdl-data-table__cell--non-numeric">
                                              <span>Bryan Cranston</span>
                                              <p class="mdl-list__item-text-body">
                                                Bryan Cranston played the role of Walter in Breaking Bad.
                                              </p>
                                            </td class="mdl-data-table__cell--non-numeric">
                                            <td class="mdl-data-table__cell--non-numeric">
                                              <label for="positivo" id="pos">
                                                <button type="button" class="mdl-chip__action">
                                                  <i class="material-icons">brightness_1</i>
                                                </button>
                                                <div class="mdl-tooltip" data-mdl-for="pos">
                                                  positivo
                                                </div>
                                              </label>
                                              <label for="neutro" id="neu">
                                                <button type="button" class="mdl-chip__action">
                                                  <i class="material-icons">brightness_1</i>
                                                </button>
                                                <div class="mdl-tooltip" data-mdl-for="neu">
                                                  Neutro
                                                </div>
                                              </label>
                                              <label for="negativo" id="neg">
                                                <button type="button" class="mdl-chip__action">
                                                  <i class="material-icons">brightness_1</i>
                                                </button>
                                                <div class="mdl-tooltip" data-mdl-for="neg">
                                                  Negativo
                                                </div>
                                              </label>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table class="mdl-data-table mdl-js-data-table">
                                        <thead>
                                          <tr>
                                            <th class="mdl-data-table__cell--non-numeric">Usuario</th>
                                            <th class="mdl-data-table__cell--non-numeric">Comentario</th>
                                            <th class="mdl-data-table__cell--non-numeric">Sentimiento</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td class="mdl-data-table__cell--non-numeric">
                                              <i class="material-icons mdl-list__item-avatar">person</i>
                                            </td>
                                            <td class="mdl-data-table__cell--non-numeric">
                                              <span>Bryan Cranston</span>
                                              <p class="mdl-list__item-text-body">
                                                Bryan Cranston played the role of Walter in Breaking Bad.
                                              </p>
                                            </td class="mdl-data-table__cell--non-numeric">
                                            <td class="mdl-data-table__cell--non-numeric">
                                              <label for="positivo" id="pos">
                                                <button type="button" class="mdl-chip__action">
                                                  <i class="material-icons">brightness_1</i>
                                                </button>
                                                <div class="mdl-tooltip" data-mdl-for="pos">
                                                  positivo
                                                </div>
                                              </label>
                                              <label for="neutro" id="neu">
                                                <button type="button" class="mdl-chip__action">
                                                  <i class="material-icons">brightness_1</i>
                                                </button>
                                                <div class="mdl-tooltip" data-mdl-for="neu">
                                                  Neutro
                                                </div>
                                              </label>
                                              <label for="negativo" id="neg">
                                                <button type="button" class="mdl-chip__action">
                                                  <i class="material-icons">brightness_1</i>
                                                </button>
                                                <div class="mdl-tooltip" data-mdl-for="neg">
                                                  Negativo
                                                </div>
                                              </label>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table class="mdl-data-table mdl-js-data-table">
                                        <thead>
                                          <tr>
                                            <th class="mdl-data-table__cell--non-numeric">Usuario</th>
                                            <th class="mdl-data-table__cell--non-numeric">Comentario</th>
                                            <th class="mdl-data-table__cell--non-numeric">Sentimiento</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td class="mdl-data-table__cell--non-numeric">
                                              <i class="material-icons mdl-list__item-avatar">person</i>
                                            </td>
                                            <td class="mdl-data-table__cell--non-numeric">
                                              <span>Bryan Cranston</span>
                                              <p class="mdl-list__item-text-body">
                                                Bryan Cranston played the role of Walter in Breaking Bad.
                                              </p>
                                            </td class="mdl-data-table__cell--non-numeric">
                                            <td class="mdl-data-table__cell--non-numeric">
                                              <label for="positivo" id="pos">
                                                <button type="button" class="mdl-chip__action">
                                                  <i class="material-icons">brightness_1</i>
                                                </button>
                                                <div class="mdl-tooltip" data-mdl-for="pos">
                                                  positivo
                                                </div>
                                              </label>
                                              <label for="neutro" id="neu">
                                                <button type="button" class="mdl-chip__action">
                                                  <i class="material-icons">brightness_1</i>
                                                </button>
                                                <div class="mdl-tooltip" data-mdl-for="neu">
                                                  Neutro
                                                </div>
                                              </label>
                                              <label for="negativo" id="neg">
                                                <button type="button" class="mdl-chip__action">
                                                  <i class="material-icons">brightness_1</i>
                                                </button>
                                                <div class="mdl-tooltip" data-mdl-for="neg">
                                                  Negativo
                                                </div>
                                              </label>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table class="mdl-data-table mdl-js-data-table">
                                        <thead>
                                          <tr>
                                            <th class="mdl-data-table__cell--non-numeric">Usuario</th>
                                            <th class="mdl-data-table__cell--non-numeric">Comentario</th>
                                            <th class="mdl-data-table__cell--non-numeric">Sentimiento</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td class="mdl-data-table__cell--non-numeric">
                                              <i class="material-icons mdl-list__item-avatar">person</i>
                                            </td>
                                            <td class="mdl-data-table__cell--non-numeric">
                                              <span>Bryan Cranston</span>
                                              <p class="mdl-list__item-text-body">
                                                Bryan Cranston played the role of Walter in Breaking Bad.
                                              </p>
                                            </td class="mdl-data-table__cell--non-numeric">
                                            <td class="mdl-data-table__cell--non-numeric">
                                              <label for="positivo" id="pos">
                                                <button type="button" class="mdl-chip__action">
                                                  <i class="material-icons">brightness_1</i>
                                                </button>
                                                <div class="mdl-tooltip" data-mdl-for="pos">
                                                  positivo
                                                </div>
                                              </label>
                                              <label for="neutro" id="neu">
                                                <button type="button" class="mdl-chip__action">
                                                  <i class="material-icons">brightness_1</i>
                                                </button>
                                                <div class="mdl-tooltip" data-mdl-for="neu">
                                                  Neutro
                                                </div>
                                              </label>
                                              <label for="negativo" id="neg">
                                                <button type="button" class="mdl-chip__action">
                                                  <i class="material-icons">brightness_1</i>
                                                </button>
                                                <div class="mdl-tooltip" data-mdl-for="neg">
                                                  Negativo
                                                </div>
                                              </label>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>`
                                      
    })             
  });
})