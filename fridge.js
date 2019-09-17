document.addEventListener('DOMContentLoaded', event => {
    const door = document.querySelector('.fridge-door')
    const fridge = document.querySelector('.fridge')

    function init() {
        door.addEventListener('click', event => {
            openFridge()
            showFridgeItems()
        })
    }

    function openFridge() {
        // TODO: animate door opening
    }

    function showFridgeItems() {
        // Present fridge items based on data.
        getFridgeItems()
    }

    function getFridgeItems() {
        // TODO: mock fridge item data.
        // Data sources:
        //  - Digital receipts
        //  - Online grocery stores
        //  - Scanned physical receipts
    }

    init()
})
