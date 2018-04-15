$(function () {

  var $oFormContainerElem = $('<div class="formContainer"></div>');
  $('body').append($oFormContainerElem);

  var $oFormElem = $('<form></form>');
  var $oShowHelpButton = $('<button >Show help</button>');
  $oFormContainerElem.append($oFormElem, $oShowHelpButton);

  var $oFirstNameElem = $('<div class="formItem firstNameForm"></div>');
  var $oLastNameElem = $('<div class="formItem lastNameForm"></div>');
  var $oAddressElem = $('<div class="formItem addressForm"></div>');
  $oFormElem.append($oFirstNameElem, $oLastNameElem, $oAddressElem);

  var $oFirstNameLabel = $('<label for="firstNameInput">First name</label>');
  var $oFirstNameInput = $('<input class="formInput" id="firstNameInput">');
  var $oFirstNameInputTitle = $('<div class="inputTitle" id="firstNameInputTitle">Please provide your first name.</div>');
  $oFirstNameElem.append($oFirstNameLabel, $oFirstNameInput, $oFirstNameInputTitle);

  var $oLastNameLabel = $('<label for="lastNameInput">Last name</label>');
  var $oLastNameInput = $('<input class="formInput" id="lastNameInput">');
  var $oLastNameInputTitle = $('<div class="inputTitle" id="lastNameInputTitle">Please provide also your last name.</div>');
  $oLastNameElem.append($oLastNameLabel, $oLastNameInput, $oLastNameInputTitle);

  var $oAddressLabel = $('<label for="addressInput">Address</label>');
  var $oAddressInput = $('<input class="formInput" id="addressInput">');
  var $oAddressInputTitle = $('<div class="inputTitle" id="inputTitleAddress">Your home or work address. </div>');
  $oAddressElem.append($oAddressLabel, $oAddressInput, $oAddressInputTitle);

  var $oInputTitle = $('.inputTitle');

  $oFirstNameInput.mouseover(function () {
    $oInputTitle.removeClass('inputTitleVisible');
    $oFirstNameInputTitle.toggleClass('inputTitleVisible');
  });
  $oFirstNameInput.mouseout(function () {
    $oInputTitle.removeClass('inputTitleVisible');
  });
  $oLastNameInput.mouseover(function () {
    $oInputTitle.removeClass('inputTitleVisible');
    $oLastNameInputTitle.toggleClass('inputTitleVisible');
  });
  $oLastNameInput.mouseout(function () {
    $oInputTitle.removeClass('inputTitleVisible');
  });
  $oAddressInput.mouseover(function () {
    $oInputTitle.removeClass('inputTitleVisible');
    $oAddressInputTitle.toggleClass('inputTitleVisible');
  });
  $oAddressInput.mouseout(function () {
    $oInputTitle.removeClass('inputTitleVisible');
  });

  $oShowHelpButton.on('click', function () {
    $oInputTitle.addClass('inputTitleVisible');
  });

})

