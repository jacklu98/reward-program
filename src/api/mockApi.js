const transactions = [ 
    {
        transactionId: '0bd981b8-2ece-4c5f-a863-fedc6da3b90a',
        customerId: 'T8R11E',
        purchaseTime: '10 April 2023 14:25:30 UTC-05:00',
        purchaseMoney: 31,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: '3573f834-6481-46ab-b8a8-61188475c827',
        customerId: 'T8R11E',
        purchaseTime: '11 April 2023 14:15:30 UTC-05:00',
        purchaseMoney: 1002,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: '1a3bcf1a-3a64-4546-8e1e-f8668e2e4fc2',
        customerId: 'T8R11E',
        purchaseTime: '20 April 2023 14:15:30 UTC-05:00',
        purchaseMoney: 9,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: '11f76a4f-07aa-435a-9b4e-df80b18aecf5',
        customerId: 'T8R11E',
        purchaseTime: '10 March 2023 14:25:30 UTC-05:00',
        purchaseMoney: 39,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: '24279c53-6abd-4e3d-a712-4dff2a049cf2',
        customerId: 'T8R11E',
        purchaseTime: '11 March 2023 14:15:30 UTC-05:00',
        purchaseMoney: 429,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: 'd6fd9057-d491-4f39-b87b-8310abe729b8',
        customerId: 'T8R11E',
        purchaseTime: '20 March 2023 14:15:30 UTC-05:00',
        purchaseMoney: 57,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: 'cf24abd1-59e1-4950-8284-d33ea38699ad',
        customerId: 'T8R11E',
        purchaseTime: '10 February 2023 14:25:30 UTC-05:00',
        purchaseMoney: 178,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: 'b96305da-c01b-472f-bc8f-e401bd92646b',
        customerId: 'T8R11E',
        purchaseTime: '11 February 2023 14:15:30 UTC-05:00',
        purchaseMoney: 205,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: 'f5d90b31-0446-4a6d-bd87-2791ea1bc55d',
        customerId: 'T8R11E',
        purchaseTime: '20 February 2023 14:15:30 UTC-05:00',
        purchaseMoney: 34,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    },
    {
        transactionId: 'f7b202e4-f87e-4aeb-a2fe-a5bdededfdf0',
        customerId: 'A2BS4F',
        purchaseTime: '1 February 2023 03:15:30 UTC-05:00',
        purchaseMoney: 125,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: '8d20f463-5fc6-4217-88ef-17f6143d7cab',
        customerId: 'A2BS4F',
        purchaseTime: '1 February 2023 09:15:30 UTC-05:00',
        purchaseMoney: 49,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: '78094f10-df7c-4561-9dda-868ee1d0fc79',
        customerId: 'A2BS4F',
        purchaseTime: '13 February 2023 13:15:30 UTC-05:00',
        purchaseMoney: 25,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: '6e77b38b-9878-4dd3-a778-5b5b86867887',
        customerId: 'A2BS4F',
        purchaseTime: '1 March 2023 23:15:30 UTC-05:00',
        purchaseMoney: 85,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: 'd0952478-f366-48ab-b350-9bc143f4fcec',
        customerId: 'A2BS4F',
        purchaseTime: '19 March 2023 15:15:30 UTC-05:00',
        purchaseMoney: 100,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: 'd9b9d196-8d1e-4cda-ab0e-da48301c3ddb',
        customerId: 'A2BS4F',
        purchaseTime: '21 March 2023 13:15:30 UTC-05:00',
        purchaseMoney: 89,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: 'dc05d81b-2e6c-41b5-abc6-d12773ffc6b1',
        customerId: 'A2BS4F',
        purchaseTime: '10 April 2023 14:15:30 UTC-05:00',
        purchaseMoney: 150,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: 'ccbb4903-4c08-4e99-88bf-ad735824d529',
        customerId: 'CB1S11',
        purchaseTime: '10 April 2023 14:25:30 UTC-05:00',
        purchaseMoney: 331,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: '0f223a64-9dcc-40ea-bf31-68a5efc09bfc',
        customerId: 'CB1S11',
        purchaseTime: '11 April 2023 14:15:30 UTC-05:00',
        purchaseMoney: 102,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: '1f21d8cf-5aa3-407b-8998-5012baac90e5',
        customerId: 'CB1S11',
        purchaseTime: '20 April 2023 14:15:30 UTC-05:00',
        purchaseMoney: 1,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: 'e9d49826-4527-46ad-b3f9-b1dafd89f1d1',
        customerId: 'CB1S11',
        purchaseTime: '10 March 2023 14:25:30 UTC-05:00',
        purchaseMoney: 99,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: 'c9fed6b2-0787-4319-ac37-1a798f28b08f',
        customerId: 'CB1S11',
        purchaseTime: '11 March 2023 14:15:30 UTC-05:00',
        purchaseMoney: 49,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: '591cf241-acc3-4e09-bed5-5f9ab7c7953d',
        customerId: 'CB1S11',
        purchaseTime: '20 March 2023 14:15:30 UTC-05:00',
        purchaseMoney: 50,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: '9d35d6ea-7fb1-484b-8adb-f9ceed658554',
        customerId: 'CB1S11',
        purchaseTime: '10 February 2023 14:25:30 UTC-05:00',
        purchaseMoney: 78,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: 'fd3b952a-74f5-450b-b265-3d3e5511efd4',
        customerId: 'CB1S11',
        purchaseTime: '11 February 2023 14:15:30 UTC-05:00',
        purchaseMoney: 25,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: '93f4561d-5b11-4464-bae3-5054277a866b',
        customerId: 'CB1S11',
        purchaseTime: '20 February 2023 14:15:30 UTC-05:00',
        purchaseMoney: 134,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
]

export function getAllTransactions() {
    return new Promise((resolve, reject) => {
        resolve(transactions);
    })
}