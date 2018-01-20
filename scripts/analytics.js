'use strict';

// Google Analytics
(function (i, s, o, g, r, a, m) {
i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
  (i[r].q = i[r].q || []).push(arguments)
}, i[r].l = 1 * new Date(); a = s.createElement(o),
  m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-112740575-1', 'auto');
// End Google Analytics

ga('send', 'pageview', window.location.href);

document.addEventListener('DOMContentLoaded', () => {
  const track = socialName => ga('send', 'event', 'Social link', 'click', socialName);
  const links = document.getElementById('social').getElementsByTagName('a');

  for (let link of links) {
    link.addEventListener('click', () => track(link.getAttribute('title')));
  }
});