/* Email links: the page carries the address split in two data attributes
   (data-mail-user, data-mail-domain) instead of a mailto: link, so it does
   not appear whole in the HTML. This joins the halves into the real link.
   Markup: _includes/author-profile.html. */
(function () {
  var links = document.querySelectorAll('[data-mail-user][data-mail-domain]');
  for (var i = 0; i < links.length; i++) {
    var a = links[i];
    a.href = 'mailto:' + a.getAttribute('data-mail-user') + '@' + a.getAttribute('data-mail-domain');
  }
})();
