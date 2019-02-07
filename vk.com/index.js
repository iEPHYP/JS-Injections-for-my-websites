Element.prototype.remove = function() {
  this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
  for (var i = this.length - 1; i >= 0; i--) {
    if (this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
};

$(() => {
  const accountIsEPHYP = document.querySelector('a[href="/ephyp"]');
  if (accountIsEPHYP) {
    const wallContent = "#wide_column";
    keepElementRemoved(wallContent);

    const gamesAdds = ".apps_feedRightAppsBlock";
    keepElementRemoved(gamesAdds);

    const leftAds = "#ads_left";
    keepElementRemoved(leftAds);
  }
});

function keepElementRemoved(selector) {
  (function remove() {
    const element = document.querySelector(selector);
    if (element) {
      element.remove();
    }
    setTimeout(remove, 100);
  })();
}
