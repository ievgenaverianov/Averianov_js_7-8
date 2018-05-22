$(function () {

  var $oTabsContainerElem = $('<div class="tabsContainer"></div>');
  $('body').append($oTabsContainerElem);

  var $oTabsMenuElem = $('<ul class="tabsMenu"></ul>');
  $oTabsContainerElem.append($oTabsMenuElem);

  var $oTabsMenuItemElem1 = $('<li class="tabsMenuItem tabsMenuItemActive" id="tabsMenuItem_1">Bruce Lee</li>');
  var $oTabsMenuItemElem2 = $('<li class="tabsMenuItem" id="tabsMenuItem_2">Goethe</li>');
  var $oTabsMenuItemElem3 = $('<li class="tabsMenuItem" id="tabsMenuItem_3">Marc Andreessen </li>');
  $oTabsMenuElem.append($oTabsMenuItemElem1, $oTabsMenuItemElem2, $oTabsMenuItemElem3);

  var $oTabsMenuItemElem = $('.tabsMenuItem');
  $oTabsMenuItemElem.attr('tabindex', '0');

  var $oTabsMenuItemContent1 = $('<div class="tabsMenuItemContent" id="tabsMenuItemContent1"><p>Because you might as ' +
    'well be dead. Seriously, if you always put limits on what you can do, physical or anything else, it’ll spread ' +
    'over into the rest of your life. It’ll spread into your work, into your morality, into your entire being. There ' +
    'are no limits. There are plateaus, but you must not stay there, you must go beyond them. If it kills you, it ' +
    'kills you. A man must constantly exceed his level.</p></div>');
  var $oTabsMenuItemContent2 = $('<div class="tabsMenuItemContent" id="tabsMenuItemContent2"><p>Daring ideas are like ' +
    'chessmen moved forward; they may be beaten, but they may start a winning game.</p></div>');
  var $oTabsMenuItemContent3 = $('<div class="tabsMenuItemContent" id="tabsMenuItemContent3"><p>Curious people are ' +
    'more likely to already have in their heads the building blocks for crafting a solution for any particular problem ' +
    'they come across, versus the more quote-unquote intelligent, but less curious, person who is trying to get by on ' +
    'logic and pure intellectual effort.</p></div>');
  $oTabsContainerElem.append($oTabsMenuItemContent1, $oTabsMenuItemContent2, $oTabsMenuItemContent3);

  $oTabsMenuItemContent1.css({
    display: 'block'
  });
  $oTabsMenuItemContent2.css({
    display: 'none'
  });
  $oTabsMenuItemContent3.css({
    display: 'none'
  });

  $oTabsMenuItemElem1.on('click', function () {
    $oTabsMenuItemElem1.addClass('tabsMenuItemActive');
    $oTabsMenuItemElem2.removeClass('tabsMenuItemActive');
    $oTabsMenuItemElem3.removeClass('tabsMenuItemActive');
    $oTabsMenuItemContent1.css({
      display: 'block'
    });
    $oTabsMenuItemContent2.css({
      display: 'none'
    });
    $oTabsMenuItemContent3.css({
      display: 'none'
    });
  });

  $oTabsMenuItemElem2.on('click', function () {
    $oTabsMenuItemElem1.removeClass('tabsMenuItemActive');
    $oTabsMenuItemElem2.addClass('tabsMenuItemActive');
    $oTabsMenuItemElem3.removeClass('tabsMenuItemActive');
    $oTabsMenuItemContent1.css({
      display: 'none'
    });
    $oTabsMenuItemContent2.css({
      display: 'block'
    });
    $oTabsMenuItemContent3.css({
      display: 'none'
    });
  });

  $oTabsMenuItemElem3.on('click', function () {
    $oTabsMenuItemElem1.removeClass('tabsMenuItemActive');
    $oTabsMenuItemElem2.removeClass('tabsMenuItemActive');
    $oTabsMenuItemElem3.addClass('tabsMenuItemActive');
    $oTabsMenuItemContent1.css({
      display: 'none'
    });
    $oTabsMenuItemContent2.css({
      display: 'none'
    });
    $oTabsMenuItemContent3.css({
      display: 'block'
    });
  });

  $oTabsMenuItemElem1.hover(function () {
    $(this).toggleClass('tabsMenuItemHover');
  });

  $oTabsMenuItemElem2.hover(function () {
    $(this).toggleClass('tabsMenuItemHover');
  });

  $oTabsMenuItemElem3.hover(function () {
    $(this).toggleClass('tabsMenuItemHover');
  });

})

