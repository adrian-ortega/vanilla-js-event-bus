import BusEvent from './BusEvent';

/**
 * This is a simple event bus used to communicate between components of the
 * customizer app. Subscribe using .on() and dispatch using .emit()
 */
class EventBus {
	constructor(debug = false) {
		this.debug = debug
		this.events = [];
	}

	/**
	 * @param {String} eventType
	 * @return {BusEvent}
	 */
	getEvent(eventType) {
		return this.events.find(pair => pair.eventType === eventType);
	}

	/**
	 * @param {String} eventType
	 * @param {function} callback
	 */
	addEvent(eventType, callback) {
		this.events.push(new BusEvent(eventType, callback));
	}

	/**
	 * @param {String} eventType
	 * @param {function} callback
	 */
	on(eventType, callback) {
		const event = this.getEvent(eventType);

		if (event) {
			event.subscribe(callback);
		} else {
			this.addEvent(eventType, callback);
		}
	}

	/**
	 * @param {String} eventType
	 * @param {*} args
	 */
	emit(eventType, args = null) {
		const eventCallbacksPair = this.getEvent(eventType);
		if (eventCallbacksPair) {
			eventCallbacksPair.dispatch(args);
		}
	}
}

export default new EventBus();