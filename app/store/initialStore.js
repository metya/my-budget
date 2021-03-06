import { CREATE_NEW_TRANSACTION_INITIAL_STATE } from "../actions/createTransaction";
import { IMPORT_TRANSACTIONS_OPTIONS_INITIAL_STATE } from "../actions/importTransactionsOptions";
import { INCOME_RECORDS_INITIAL_STATE } from "../actions/incomeRecords";
import { BANK_SYNC_INITIAL_STATE } from "../actions/bankSync";

// let fs = require("fs");
// import * as crypto from "../crypto/code";

const date: Date = (new Date());
const month: string = date.getMonth() + 1;
const year: string = date.getFullYear();


export const initialStore = {
    modified: /* success ? fileContents.modified : */ false,
    income: /* success ? fileContents.income : */ [{
        id: "1",
        dateId: `${month}-${year}`,
        amount: 0
    }],
    incomeRecords: [],
    categories: /* success ? fileContents.categories : */ [],
    items: /* success ? fileContents.items : */ [],
    transactions: /* success ? fileContents.transactions : */ [],
    createTransaction: CREATE_NEW_TRANSACTION_INITIAL_STATE,
    pendingImport: [],
    importTransactionsOptions: IMPORT_TRANSACTIONS_OPTIONS_INITIAL_STATE,
    bankSync: BANK_SYNC_INITIAL_STATE,
    // templates: [],
    //   income: [{
    //       id: "",
    //       dateId: "",
    //       income: 0
    //   }],
    //   categories: [{
    //     id: "",
    //     dateId: "",
    //     name: "",
    //     collapse: false
    //   }],
    //   items: [{
    //     id: "",
    //     dateId: "",
    //     categoryId: "",
    //     name: ""
    //   }],
    //   transactions: [{
    //     id: "",
    //     dateId: "",
    //     categoryId: "",
    //     itemId: "",
    //     day: 0,
    //     amount: 0,
    //     note: "",
    //     fromBank: false    
    //   }],
    //   createTransaction: {
    //       selectedCategoryId: "",
    //       selectedItemId: "",
    //       day: 1,
    //       amount: 0,
    //       note: ""
    //   }
    //   pendingImport: [{
    //       tempId: "",
    //       import: true,
    //       dateId: "",
    //       day: 0,
    //       categoryId: "",
    //       categoryName: "",
    //       overwriteCategoryName: "",
    //       itemId: "",
    //       itemName: "",
    //       overwriteItemName: "",
    //       amount: "",
    //       note: ""
    //   }],
    date: /* success ? fileContents.date : */ {
        id: `${month}-${year}`,
        month,
        year
    }
}