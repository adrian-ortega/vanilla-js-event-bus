/**
 * A single event. Stored within the EventBus using the subscription name
 * @property {String} eventType
 * @property {Array|function[]} callbacks
 */
export default class BusEvent {
	constructor(type, callback = () => {}) {
		this.eventType = type;
		this.callbacks = [callback];
	}

	/**
	 * Subscribes a callback to this event
	 * @param callback
	 */
	subscribe (callback = () => {}) {
		this.callbacks.push(callback);
	}

	/**
	 * Fires an event
	 * @param {*} args
	 */
	dispatch (args = null) {
		this.callbacks.forEach(callback => callback(args));
	}
}
