const express = require('express');
const router = express.Router();
const Transaction = require('../models/TransactionModel.js');

const {
    addTransactionController,
    deleteTransactionController,
    getAllTransactionController,
    updateTransactionController
} = require('../controllers/transactionController.js');

// Routes
router.post('/addTransaction', addTransactionController);
router.post('/getTransaction', getAllTransactionController);
router.post('/deleteTransaction/:id', deleteTransactionController);
router.put('/updateTransaction/:id', updateTransactionController);

module.exports = router;
