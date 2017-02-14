class BaseSortClass {
    constructor(array) {
        this._array = [];
        this.array = array;
        this._actionsArray = [];
    }

    set array(value) {
        if (Array.isArray(value)) {
            this._array = value;
        }
    }

    get array() {
        return this._array.slice();
    }

    get actionsArray() {
        return this._actionsArray.slice();
    }

    toString() {
        return this.array.toString();
    }

    swap(first, second) {
        let temp = this._array[first];
        this._array[first] = this._array[second];
        this._array[second] = temp;

        if(first != second) {
            this._actionsArray.push({
                from: first,
                to: second,
                action: 'swap'
            });
        }
    }

    noSwap(first, second) {
        this._actionsArray.push({
            from: first,
            to: second,
            action: 'noSwap'
        });
    }

    compare(first, second, from, to) {
        let result = 1;
        if (first > second) {
            result = 1;
        } else if (first === second) {
            result = 0;
        } else {
            result = -1;
        }

        this._actionsArray.push({
            action: 'compare',
            from: from,
            to: to,
            result: result
        });

        return result;
    }
}

module.exports = BaseSortClass;