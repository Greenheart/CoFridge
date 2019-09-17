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

    join() {}
}

const EVENT_TYPES = {
    PRIVATE: 'private',
    NEARBY: 'nearby',
    PUBLIC: 'public'
}

export default Event
export { EVENT_TYPES }
