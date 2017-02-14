const BaseSortClass = require("./base-classes/base-sort.class");

class QuickSortClass extends BaseSortClass {
    constructor(array) {
        super(array);
    }

    sort(left, right) {
        let pivot = null;
        let newPivot = null;

        if (typeof left !== 'number') {
            left = 0;
        }

        if (typeof right !== 'number') {
            right = this.array.length - 1;
        }

        if (left < right) {
            pivot = left + Math.ceil((right - left) * 0.5);
            newPivot = this.partition(pivot, left, right);

            this.sort(left, newPivot - 1);
            this.sort(newPivot + 1, right);
        }
    }

    partition(pivot, left, right) {
        let storeIndex = left;
        let pivotValue = this.array[pivot];

        this.swap(pivot, right);

        for (let i = left; i < right; i++) {
            if (this.array[i] < pivotValue) {
                this.swap(i, storeIndex);
                storeIndex++;
            }
        }

        this.swap(right, storeIndex);

        return storeIndex;
    }
}

module.exports = QuickSortClass;