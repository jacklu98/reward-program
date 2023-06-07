import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MonthRewards from '../../components/MonthRewards/MonthRewards';

describe('MonthRewards', () => {
    it('should render transaction month and total reward', () => {
        const transacitons = [
            {
                transactionId: '6e77b38b-9878-4dd3-a778-5b5b86867887',
                customerId: 'A2BS4F',
                customerName: 'Terry Young',
                purchaseTime: '1 March 2023 23:15:30 UTC-05:00',
                purchaseMoney: 85,
                currency: '$',
                purchaseItems: ['Lego', 'Hot seller', 'Chocolate Box'],
                reward: 35
            }, 
            {
                transactionId: 'd0952478-f366-48ab-b350-9bc143f4fcec',
                customerId: 'A2BS4F',
                customerName: 'Terry Young',
                purchaseTime: '19 March 2023 15:15:30 UTC-05:00',
                purchaseMoney: 100,
                currency: '$',
                purchaseItems: ['Toy Car', 'Shirt', 'Cap'],
                reward: 50
            }, 
            {
                transactionId: 'd9b9d196-8d1e-4cda-ab0e-da48301c3ddb',
                customerId: 'A2BS4F',
                customerName: 'Terry Young',
                purchaseTime: '21 March 2023 13:15:30 UTC-05:00',
                purchaseMoney: 89,
                currency: '$',
                purchaseItems: ['Red Wine', 'Steak', 'Butter', 'Pepper'],
                reward: 100
            }
        ];        
        const monthRewards = render(<MonthRewards transactions={transacitons} month="March 2023"/>);
        const monthElement = monthRewards.queryByText('Month: March 2023');
        expect(monthElement).toBeInTheDocument();
        const totalRewardsElement = monthRewards.queryByText('Month Rewards: 185');
        expect(totalRewardsElement).toBeInTheDocument();
    });

    it('should render rewards table when there are transactions', () => {
        const transacitons = [{
            transactionId: 'f7b202e4-f87e-4aeb-a2fe-a5bdededfdf0',
            customerId: 'A2BS4F',
            customerName: 'Terry Young',
            purchaseTime: '1 February 2023 03:15:30 UTC-05:00',
            purchaseMoney: 125,
            currency: '$',
            purchaseItems: ['Gift Box', 'Fruit Box', 'Wine Box'],
            reward: 100
        }, 
        {
            transactionId: '8d20f463-5fc6-4217-88ef-17f6143d7cab',
            customerId: 'A2BS4F',
            customerName: 'Terry Young',
            purchaseTime: '1 February 2023 09:15:30 UTC-05:00',
            purchaseMoney: 49,
            currency: '$',
            purchaseItems: ['Bath Tissue', 'Lime', 'Glass Bottle'],
            reward: 0
        }, 
        {
            transactionId: '78094f10-df7c-4561-9dda-868ee1d0fc79',
            customerId: 'A2BS4F',
            customerName: 'Terry Young',
            purchaseTime: '13 February 2023 13:15:30 UTC-05:00',
            purchaseMoney: 25,
            currency: '$',
            purchaseItems: ['Lysol Wipe', 'Instant Noodle'],
            reward: 0
        },
        {
            transactionId: 'd7fb58d0-a9b1-4efa-94a2-6e31665f206b',
            customerId: 'A2BS4F',
            customerName: 'Terry Young',
            purchaseTime: '20 February 2023 13:15:30 UTC-05:00',
            purchaseMoney: 167,
            currency: '$',
            purchaseItems: ['Glass Bottle', 'Filter', 'Chair'],
            reward: 184
        },
        {
            transactionId: '851cfede-3c30-43f5-bb51-1597082b497d',
            customerId: 'A2BS4F',
            customerName: 'Terry Young',
            purchaseTime: '27 February 2023 13:15:30 UTC-05:00',
            purchaseMoney: 235,
            currency: '$',
            purchaseItems: ['Toothbrush', 'Red Apple', 'Table'],
            reward: 320
        }];
        render(<MonthRewards transactions={transacitons} month="February 2023"/>);
        const transactions = screen.getAllByTestId('table_transaction');
        expect(transactions).toHaveLength(5);

    });
})
