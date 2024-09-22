// 981. Time Based Key-Value Store
// Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

// Implement the TimeMap class:

// TimeMap() Initializes the object of the data structure.
// void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
// String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".

//SOLUTION:



class TimeMap {
    constructor() {
        this.map = {};
    }

    set(key, value, timestamp) {
        if (!this.map[key]) {
            this.map[key] = [];
        }
        this.map[key].push([timestamp, value]);
    }

    get(key, timestamp) {
        if (!this.map[key]) return "";
        const values = this.map[key];
        let left = 0;
        let right = values.length - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (values[mid][0] <= timestamp) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return right >= 0 ? values[right][1] : "";
    }
}
