import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomerRewards from './CustomerRewards';

describe('MonthRewards', () => {
    it('should render customerID and total reward', () => {
        const timePeriod = ["April", "March", "February"];
        const transactions = [
            {
                transactionId: '0bd981b8-2ece-4c5f-a863-fedc6da3b90a',
                customerId: 'T8R11E',
                purchaseTime: '10 April 2023 14:25:30 UTC-05:00',
                purchaseMoney: 31,
                reward: 0,
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
            }, 
            {
                transactionId: '3573f834-6481-46ab-b8a8-61188475c827',
                customerId: 'T8R11E',
                purchaseTime: '11 April 2023 14:15:30 UTC-05:00',
                purchaseMoney: 1002,
                reward: 852,
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
            }, 
            {
                transactionId: '1a3bcf1a-3a64-4546-8e1e-f8668e2e4fc2',
                customerId: 'T8R11E',
                purchaseTime: '20 April 2023 14:15:30 UTC-05:00',
                purchaseMoney: 9,
                reward: 0,
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
            }, 
            {
                transactionId: '11f76a4f-07aa-435a-9b4e-df80b18aecf5',
                customerId: 'T8R11E',
                purchaseTime: '10 March 2023 14:25:30 UTC-05:00',
                purchaseMoney: 39,
                reward: 0,
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
            }, 
            {
                transactionId: '24279c53-6abd-4e3d-a712-4dff2a049cf2',
                customerId: 'T8R11E',
                purchaseTime: '11 March 2023 14:15:30 UTC-05:00',
                purchaseMoney: 429,
                reward: 279,
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
            }, 
            {
                transactionId: 'd6fd9057-d491-4f39-b87b-8310abe729b8',
                customerId: 'T8R11E',
                purchaseTime: '20 March 2023 14:15:30 UTC-05:00',
                purchaseMoney: 57,
                reward: 7,
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
            }, 
            {
                transactionId: 'cf24abd1-59e1-4950-8284-d33ea38699ad',
                customerId: 'T8R11E',
                purchaseTime: '10 February 2023 14:25:30 UTC-05:00',
                purchaseMoney: 178,
                reward: 206,
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
            }, 
            {
                transactionId: 'b96305da-c01b-472f-bc8f-e401bd92646b',
                customerId: 'T8R11E',
                purchaseTime: '11 February 2023 14:15:30 UTC-05:00',
                purchaseMoney: 205,
                reward: 260,
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
            }, 
            {
                transactionId: 'f5d90b31-0446-4a6d-bd87-2791ea1bc55d',
                customerId: 'T8R11E',
                purchaseTime: '20 February 2023 14:15:30 UTC-05:00',
                purchaseMoney: 84,
                reward: 34,
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
            }, 
        ];
        
        const customerRewards = render(<CustomerRewards customerId="T8R11E" timePeriod={timePeriod} transactions={transactions}/>);
        const customerElement = customerRewards.queryByText('Customer: T8R11E');
        expect(customerElement).toBeInTheDocument();
        const totalRewardsElement = customerRewards.queryByText('Total Rewards: 1638');
        expect(totalRewardsElement).toBeInTheDocument();
    });
    it('should render rewards table for every month in time period', () => {
        const timePeriod = ["April", "March", "February"];
        const transactions = [
            {
                transactionId: '0bd981b8-2ece-4c5f-a863-fedc6da3b90a',
                customerId: 'T8R11E',
                purchaseTime: '10 April 2023 14:25:30 UTC-05:00',
                purchaseMoney: 31,
                reward: 0,
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
            }, 
            {
                transactionId: '3573f834-6481-46ab-b8a8-61188475c827',
                customerId: 'T8R11E',
                purchaseTime: '11 April 2023 14:15:30 UTC-05:00',
                purchaseMoney: 1002,
                reward: 852,
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
            }, 
            {
                transactionId: '1a3bcf1a-3a64-4546-8e1e-f8668e2e4fc2',
                customerId: 'T8R11E',
                purchaseTime: '20 April 2023 14:15:30 UTC-05:00',
                purchaseMoney: 9,
                reward: 0,
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
            }, 
            {
                transactionId: '11f76a4f-07aa-435a-9b4e-df80b18aecf5',
                customerId: 'T8R11E',
                purchaseTime: '10 March 2023 14:25:30 UTC-05:00',
                purchaseMoney: 39,
                reward: 0,
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
            }, 
            {
                transactionId: '24279c53-6abd-4e3d-a712-4dff2a049cf2',
                customerId: 'T8R11E',
                purchaseTime: '11 March 2023 14:15:30 UTC-05:00',
                purchaseMoney: 429,
                reward: 279,
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
            }, 
            {
                transactionId: 'd6fd9057-d491-4f39-b87b-8310abe729b8',
                customerId: 'T8R11E',
                purchaseTime: '20 March 2023 14:15:30 UTC-05:00',
                purchaseMoney: 57,
                reward: 7,
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
            }, 
            {
                transactionId: 'cf24abd1-59e1-4950-8284-d33ea38699ad',
                customerId: 'T8R11E',
                purchaseTime: '10 February 2023 14:25:30 UTC-05:00',
                purchaseMoney: 178,
                reward: 206,
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
            }, 
            {
                transactionId: 'b96305da-c01b-472f-bc8f-e401bd92646b',
                customerId: 'T8R11E',
                purchaseTime: '11 February 2023 14:15:30 UTC-05:00',
                purchaseMoney: 205,
                reward: 260,
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
            }, 
            {
                transactionId: 'f5d90b31-0446-4a6d-bd87-2791ea1bc55d',
                customerId: 'T8R11E',
                purchaseTime: '20 February 2023 14:15:30 UTC-05:00',
                purchaseMoney: 84,
                reward: 34,
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
            }, 
        ];
        render(<CustomerRewards  customerId="T8R11E" timePeriod={timePeriod} transactions={transactions}/>);
        const monthElements = screen.getAllByTestId('reward-app_customer_month');
        expect(monthElements).toHaveLength(3);
    });
})
