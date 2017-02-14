const Combo = require('../classes/CombSortClass');
const Quick = require('../classes/QuickSortClass');

class AlgorithmService {
    static getComboActions(input, callback) {
        const comboSort = new Combo.CombSortClass(input);

        comboSort.sort();

        callback({
            actions: comboSort.actionsArray,
            sortedArr: comboSort.array
        });
    }
    static getQuickActions(input, callback) {
        const comboSort = new Quick(input);

        comboSort.sort();

        callback({
            actions: comboSort.actionsArray,
            sortedArr: comboSort.array
        });
    }
}

module.exports = AlgorithmService;
