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

const homepage = '[page-subtype="home"]';
keepElementRemoved(homepage);

const related = '#related';
keepElementRemoved(related);

const endScreenContent = '.ytp-endscreen-content';
keepElementRemoved(endScreenContent);

function keepElementRemoved(selector) {
   (function remove() {
    const element = document.querySelector(selector);
    if (element) {
      element.remove();
    }
    setTimeout(remove, 200);
  })();
}
