const AlgorithmService = require('../services/AlgorithmService');

class AlgorithmController {
    static combSort(req, res) {
        let data = req.body;
        let array = data['array[]'].map(Number);

        if (!Array.isArray(array)) {
            array = [5, 8, 4, 3, 9, 10, 20, -4, 7, 1, 15, 23, 31, -10];
        }

        AlgorithmService.getComboActions(array, function (data) {
            res.json(data);
        });
    }

    static quickSort(req, res) {
        let data = req.body;
        let array = data['array[]'].map(Number);

        if (!Array.isArray(array)) {
            array = [5, 8, 4, 3, 9, 10, 20, -4, 7, 1, 15, 23, 31, -10];
        }

        AlgorithmService.getQuickActions(array,  (data) => {
            res.json(data);
        });
    }
}

module.exports = AlgorithmController;