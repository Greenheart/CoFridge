import Event, { EVENT_TYPES } from './event.js'

class Fridge {
    constructor() {
        this.ui = {
            door: document.querySelector('.fridge-door'),
            doorInside: document.querySelector('.fridge-door-inside'),
            fridge: document.querySelector('.fridge'),
            fridgeContent: document.querySelector('.fridge-content'),
            eventList: document.querySelector('.event-list')
        }
        this.events = Event.getEvents()
        this.init()
    }

    init() {
        ;[this.ui.door, this.ui.doorInside].forEach(el => {
            el.addEventListener('click', event => {
                this.openFridge()
                this.showEvents()
            })
        })
    }

    openFridge() {
        this.ui.door.classList.toggle('door-open')
        this.ui.doorInside.classList.toggle('door-open')

        // TODO:
        // show list of events
    }

    showFridgeItems() {
        // Present fridge items based on data.
        this.getFridgeItems()
    }

    showEvents() {
        // use Event class to show all available events
        // Event types to show: Nearby & public. Only show private if you're friends with the host.
        const html = this.events
            .map(event => {
                return `
                <li class="event">
                    <h3 class="name">${event.event_name}</h3>
                    <span class="location">Where: ${event.event_location}</span>
                    <button class="attend" data-id="${event.event_id}">Attend</button>
                </li>
            `
            })
            .join('')

        this.ui.eventList.innerHTML = html

        this.ui.eventList.querySelectorAll('button.attend').forEach(btn => {
            btn.addEventListener('click', clickEvent => {
                const eventDetail = this.events.find(
                    eventDetails =>
                        eventDetails.event_id == btn.dataset.event_id
                )

                this.showEventDetails(eventDetail)
            })
        })
    }

    showEventDetails(event) {
        // TODO: show details view.
        // Hide list.
    }

    getFridgeItems() {
        // TODO: mock fridge item data.
        // Data sources:
        //  - Digital receipts
        //  - Online grocery stores
        //  - Scanned physical receipts

        return [
            {
                food_item: 'banana',
                quantity: 3,
                expiration_date: '01-09-2019'
            },
            {
                food_item: 'eggs',
                quantity: 6,
                expiration_date: '14-09-2019'
            },
            {
                food_item: 'milk',
                quantity: 1,
                expiration_date: '17-09-2019'
            },
            {
                food_item: 'zucchini',
                quantity: 2,
                expiration_date: '13-09-2019'
            }
        ]
    }
}

export default Fridge
