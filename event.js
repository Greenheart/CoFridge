class Event {
    // Represents an event that people can go to.
    constructor(eventType) {
        // List of participants.
        this.participants = [
            {
                name,
                ingredients
            }
        ]
        this.type = eventType
    }

    static getEvents() {
        return [
            {
                event_id: 1,
                event_name: 'Pasta night',
                participants: ['kalle', 'linda', 'lotta'],
                event_location: "Kalle's place",
                food_items: {
                    food_item: 'tomatoes',
                    food_item: 'basil',
                    food_item: 'parmesan'
                }
            },
            {
                event_id: 2,
                event_name: 'Sunday dinner',
                participants: ['lotta', 'petter', 'thomas'],
                event_location: 'Shared kitchen',
                food_items: {
                    food_item: 'eggs',
                    food_item: 'basil',
                    food_item: 'parmesan'
                }
            },
            {
                event_id: 3,
                event_name: 'Leftover brunch',
                participants: {
                    participant: 'lotta',
                    participant: 'linda'
                },
                event_location: 'Casa Svea',
                food_items: ['david', 'oscar']
            }
        ]
    }

    join() {}
}

const EVENT_TYPES = {
    PRIVATE: 'private',
    NEARBY: 'nearby',
    PUBLIC: 'public'
}

export default Event
export { EVENT_TYPES }
