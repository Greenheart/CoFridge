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

    getEvents() {
        return [
            {
                event_id: 1,
                event_name: 'Pasta night',
                participants: {
                    participant: 'kalle',
                    participant: 'linda',
                    participant: 'lotta'
                },
                event_location: "Kalle's",
                food_items: {
                    food_item: 'tomatoes',
                    food_item: 'basil',
                    food_item: 'parmesan'
                }
            },
            {
                event_id: 2,
                event_name: 'Sunday dinner',
                participants: {
                    participant: 'kalle',
                    participant: 'linda'
                },
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
                food_items: {
                    food_item: 'eggs',
                    food_item: 'banana',
                    food_item: 'juice'
                }
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
