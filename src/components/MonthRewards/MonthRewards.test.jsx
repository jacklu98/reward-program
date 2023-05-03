import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MonthRewards from './MonthRewards';

describe('MonthRewards', () => {
    it('should render transaction month and total reward', () => {
        const transacitons = [
            {
                transactionId: '6e77b38b-9878-4dd3-a778-5b5b86867887',
                customerId: 'A2BS4F',
                purchaseTime: '1 March 2023 23:15:30 UTC-05:00',
                purchaseMoney: 85,
                reward: 35
            }, 
            {
                transactionId: 'd0952478-f366-48ab-b350-9bc143f4fcec',
                customerId: 'A2BS4F',
                purchaseTime: '19 March 2023 15:15:30 UTC-05:00',
                purchaseMoney: 100,
                reward: 50
            }, 
            {
                transactionId: 'd9b9d196-8d1e-4cda-ab0e-da48301c3ddb',
                customerId: 'A2BS4F',
                purchaseTime: '21 March 2023 13:15:30 UTC-05:00',
                purchaseMoney: 125,
                reward: 100
            }, 
        ];        
        const monthRewards = render(<MonthRewards transactions={transacitons} month="March"/>);
        const monthElement = monthRewards.queryByText('Month: March');
        expect(monthElement).toBeInTheDocument();
        const totalRewardsElement = monthRewards.queryByText('Month Rewards: 185');
        expect(totalRewardsElement).toBeInTheDocument();
    });

    it('should render rewards table when there are transactions', () => {
        const transacitons = [
                {
                    transactionId: 'cf24abd1-59e1-4950-8284-d33ea38699ad',
                    customerId: 'T8R11E',
                    purchaseTime: '1 February 2023 03:15:30 UTC-05:00',
                    purchaseMoney: 125,
                    reward: 100
                }, 
                {
                    transactionId: 'b96305da-c01b-472f-bc8f-e401bd92646b',
                    customerId: 'T8R11E',
                    purchaseTime: '1 February 2023 09:15:30 UTC-05:00',
                    purchaseMoney: 55,
                    reward: 5
                }, 
                {
                    transactionId: 'f5d90b31-0446-4a6d-bd87-2791ea1bc55d',
                    customerId: 'T8R11E',
                    purchaseTime: '13 February 2023 13:15:30 UTC-05:00',
                    purchaseMoney: 25,
                    reward: 0
                }, 
        ];
        render(<MonthRewards transactions={transacitons} month="February"/>);
        const transactions = screen.getAllByTestId('table_transaction');
        expect(transactions).toHaveLength(3);

    });
    it('should show notice when there is no transaction', () => {
        const monthRewards = render(<MonthRewards transactions={[]} month="March"/>);
        const errorMessage = monthRewards.queryByText('No Transaction History');
        expect(errorMessage).not.toBeNull();
    })
})
