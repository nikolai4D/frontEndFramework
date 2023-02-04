/**
 * A one level deep key-value store for dynamic data.
 * The data is stored in a Map, where the key is the dataKey and the value is a DynamicRecord.
 * Use meaningful dataKeys to avoid confusion (e.g. 'projects__project1' instead of 'project1')
 * @constructor
 */
export function Store() {
    this.dataMap = new Map()
}

export function DynamicRecord(data = null, subscribers = []) {
    this.data = data;
    this.subscribers = new WeakSet(subscribers);
}

DynamicRecord.prototype.addSubscriber = function(subscriber) {
    this.subscribers.add(subscriber);
}

DynamicRecord.prototype.removeSubscriber = function(subscriber) {
    this.subscribers.delete(subscriber);
}

Store.prototype.setData = function(dataKey, dataValue, subscribers = []) {
    if (!this.dataMap.has(dataKey)) {

        let record = new DynamicRecord(dataValue, subscribers);
        this.dataMap.set(dataKey, record);

    } else {

        this.dataMap.get(dataKey).data = dataValue;

    }

    this.notifySubscribers(dataKey);

}

Store.prototype.getData = function(dataKey) {
    const record = this.dataMap.get(dataKey);
    if (record) return record.data;
    else throw new Error(`No data found for dataKey: ${dataKey}`);
}

Store.prototype.notifySubscribers = function(dataKey) {
    for (let subscriber of this.data[dataKey].subscribers) {
        if(subscriber.updateDynamicData) subscriber.updateDynamicData(dataKey)
    }
}