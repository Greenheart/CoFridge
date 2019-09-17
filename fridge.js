import Event, { EVENT_TYPES } from 'event.js'

class Fridge {
    constructor() {
        this.ui = {
            door: document.querySelector('.fridge-door'),
            fridge: document.querySelector('.fridge')
        }
        this.init()
    }

    init() {
        this.ui.door.addEventListener('click', event => {
            this.openFridge()
            this.showFridgeItems()
        })
    }

    openFridge() {
        // TODO: animate door opening
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
