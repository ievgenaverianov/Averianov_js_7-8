$(function () {

  $('body').append('<div class="tabsContainer"></div>');
  var $oTabsContainerElem = $('.tabsContainer');
  $oTabsContainerElem.append('<ul class="tabsMenu"></ul>');

  var $oTabsMenuElem = $('.tabsMenu');
  $oTabsMenuElem.append('<li class="tabsMenuItem tabsMenuItemActive" id="tabsMenuItem_1">Bruce Lee</li>');
  $oTabsMenuElem.append('<li class="tabsMenuItem" id="tabsMenuItem_2">Goethe</li>');
  $oTabsMenuElem.append('<li class="tabsMenuItem" id="tabsMenuItem_3">Marc Andreessen </li>');

  var $oTabsMenuItemElem = $('.tabsMenuItem');
  $oTabsMenuItemElem.attr('tabindex', '0');

  var $oTabsMenuItemElem1 = $('#tabsMenuItem_1');
  var $oTabsMenuItemElem2 = $('#tabsMenuItem_2');
  var $oTabsMenuItemElem3 = $('#tabsMenuItem_3');

  $oTabsContainerElem.append('<div class="tabsMenuItemContent" id="tabsMenuItemContent1"><p>Because you might as well be dead. ' +
    'Seriously, if you always put limits on what you can do, physical or anything else, it’ll spread over into the rest' +
    ' of your life. It’ll spread into your work, into your morality, into your entire being. There are no limits. There ' +
    'are plateaus, but you must not stay there, you must go beyond them. If it kills you, it kills you. A man must ' +
    'constantly exceed his level.</p></div>');
  $oTabsContainerElem.append('<div class="tabsMenuItemContent" id="tabsMenuItemContent2"><p>Daring ideas are like chessmen moved ' +
    'forward; they may be beaten, but they may start a winning game.</p></div>');
  $oTabsContainerElem.append('<div class="tabsMenuItemContent" id="tabsMenuItemContent3"><p>Curious people are more likely to ' +
    'already have in their heads the building blocks for crafting a solution for any particular problem they come ' +
    'across, versus the more quote-unquote intelligent, but less curious, person who is trying to get by on logic ' +
    'and pure intellectual effort.</p></div>');


  var $oTabsMenuItemContent1 = $('#tabsMenuItemContent1');
  $oTabsMenuItemContent1.css({
    display: 'block'
  });
  var $oTabsMenuItemContent2 = $('#tabsMenuItemContent2');
  $oTabsMenuItemContent2.css({
    display: 'none'
  });
  var $oTabsMenuItemContent3 = $('#tabsMenuItemContent3');
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

