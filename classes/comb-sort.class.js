const BaseSortClass = require("./base-classes/base-sort.class");
const divisor = 1.3;

class CombSortClass extends BaseSortClass {
    constructor(array) {
        super(array);
    }

    sort() {
        let interval = Math.floor(this.array.length / divisor);

        while (interval > 0) {
            for (let i = 0; i + interval < this.array.length; i++) {
                if (this.compare(this.array[i], this.array[i + interval], i, i+ interval) === 1) {
                    this.swap(i, i + interval);
                } else {
                    this.noSwap(i, i + interval);
                }
            }
            interval = Math.floor(interval / divisor);
        }

        return this.array;
    }
}

module.exports = CombSortClass;