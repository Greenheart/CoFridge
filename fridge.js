import Event, { EVENT_TYPES } from './event.js'

class Fridge {
    constructor() {
        this.ui = {
            door: document.querySelector('.fridge-door'),
            doorInside: document.querySelector('.fridge-door-inside'),
            fridge: document.querySelector('.fridge'),
            fridgeContent: document.querySelector('.fridge-content')
        }
        this.init()
    }

    init() {
        ;[this.ui.door, this.ui.doorInside].forEach(el => {
            el.addEventListener('click', event => {
                this.openFridge()
                this.showFridgeItems()
            })
        })
    }

    openFridge() {
        this.ui.door.classList.toggle('door-open')
        this.ui.doorInside.classList.toggle('door-open')
    }

    showFridgeItems() {
        // Present fridge items based on data.
        this.getFridgeItems()
    }

    showEvents() {
        // use Event class to show all available events
        // Event types to show: Nearby & public. Only show private if you're friends with the host.
    }

    getFridgeItems() {
        // TODO: mock fridge item data.
        // Data sources:
        //  - Digital receipts
        //  - Online grocery stores
        //  - Scanned physical receipts
    }
}

export default Fridge
