/**
 * Creates a NavCards navigable interface object.
 * @param {HTMLElement|string} container The container element or its `id`.
 */
function NavCards(container) {
    this.container = (container instanceof HTMLElement)
        ? container
        : document.getElementById(container);

    if (!this.container)
        throw `Invalid Argument ${container}: "container" must be of type (string | HTMLElement).`;

    this.cards = {};

    // index cards
    var items = this.container.getElementsByClassName('nav-card'),
        actionsPattern = /([^:]+)\s*:\s*([^;]+)\s*;?/g;

    for (let item of items)
        this.cards[item.dataset.name] = item;

    // attach nav actions
    for (let item of items) {
        // query actions
        let navEls = item.querySelectorAll('[data-nav]');

        // parse and attach
        for (let el of navEls) {
            let actions = el.dataset.nav,
                action;

            while (action = actionsPattern.exec(actions)) {
                if (action[2]) {
                    let name = action[2];
                    el.addEventListener(action[1], () => this.showCard(name));
                }
            }
        }
    }

    // get acive card
    this.activeCard = container.querySelector('.nav-card.show');
}

/**
 * Shows the provided card by name.
 * @param {string} name Name of the card to show.
 */
NavCards.prototype.showCard = function (name) {
    if (this.activeCard)
        this.activeCard.classList.remove('show');

    this.activeCard = this.cards[name];

    if (this.activeCard)
        this.activeCard.classList.add('show')
};

const navCards = {};

(function () {
    var containers = document.getElementsByClassName('nav-container');

    for (let container of containers)
        navCards[container.id || container.dataset.name] = new NavCards(container);
})();