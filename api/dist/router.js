"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.send('okay');
});
router.get('/lista', (req, res) => {
    try {
        throw new Error('deu pau');
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});
exports.default = router;
//# sourceMappingURL=router.js.map