import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchRewardBar from './SearchRewardBar';

describe('SearchRewardBar', () => {
    it('should render input bar for customer and transaction period', () => {
        const customers = ['A2BS4F', 'CB1S11', 'T367KB', 'T8JF91', 'T8R11E'];
        const timePeriod = ['April 2023', 'March 2023', 'February 2023'];
        const customerFn = jest.fn();
        const timePeriodFn = jest.fn();
        const searchRewardBar = render(<SearchRewardBar customers={customers} timePeriod={timePeriod} setSelectedCustomer={customerFn} setSelectedMonths={timePeriodFn}/>);
        const inputElements = searchRewardBar.getAllByTestId("reward-app_search_search-bar");
        expect(inputElements).toHaveLength(3);
    });

    it('should render auto complete for customer input', () => {
        const customers = ['A2BS4F', 'CB1S11', 'T367KB', 'T8JF91', 'T8R11E'];
        const timePeriod = ['April 2023', 'March 2023', 'February 2023'];
        const customerFn = jest.fn();
        const timePeriodFn = jest.fn();
        const searchRewardBar = render(<SearchRewardBar customers={customers} timePeriod={timePeriod} setSelectedCustomer={customerFn} setSelectedMonths={timePeriodFn}/>);
        const inputElements = searchRewardBar.getAllByTestId("reward-app_search_search-bar");
        const customerInput = inputElements[0];
        act(() => customerInput.focus());
        expect(customerInput).toHaveFocus();
        const potentialSearchResults = screen.getAllByTestId("reward-app_search_related-customer");
        expect(potentialSearchResults).toHaveLength(5);
        expect(potentialSearchResults[0].textContent).toBe('A2BS4F');
        act(() => fireEvent.click(potentialSearchResults[0]));
        expect(customerInput.value).toBe('A2BS4F');
    });
    
    it('should trigger callback function after clicking search button', () => {
        const customers = ['A2BS4F', 'CB1S11', 'T367KB', 'T8JF91', 'T8R11E'];
        const timePeriod = ['April 2023', 'March 2023', 'February 2023'];
        const customerFn = jest.fn();
        const timePeriodFn = jest.fn();
        render(<SearchRewardBar customers={customers} timePeriod={timePeriod} setSelectedCustomer={customerFn} setSelectedMonths={timePeriodFn}/>);
        const searchBtn = screen.getByTestId("reward-app_search_btn");
        expect(customerFn).toHaveBeenCalledTimes(0);
        expect(timePeriodFn).toHaveBeenCalledTimes(0);
        fireEvent.click(searchBtn);
        expect(customerFn).toHaveBeenCalledTimes(1);
        expect(timePeriodFn).toHaveBeenCalledTimes(1);
    })
})
