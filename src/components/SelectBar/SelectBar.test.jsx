import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SelectBar from './SelectBar';

describe('SelectBar', () => {
    it('should render choices of customers and months for select', () => {
        const customers = ['T8R11E', 'A2BS4F', 'CB1S11'];
        const timePeriod = ['April', 'March', 'February'];
        const customerFn = jest.fn();
        const monthFn = jest.fn();     
        render(<SelectBar customers={customers} timePeriod={timePeriod} setSelectedCustomer={customerFn} setSelectedMonths={monthFn}/>);
        const selectCustomer = screen.getAllByTestId('select-customer');
        expect(selectCustomer).toHaveLength(3);
        const selectMonths = screen.getAllByTestId('select-months');
        expect(selectMonths).toHaveLength(3);
    });

    it('should select choices and trigger callback function', () => {
        const customers = ['T8R11E', 'A2BS4F', 'CB1S11'];
        const timePeriod = ['April', 'March', 'February'];
        const customerFn = jest.fn();
        const monthFn = jest.fn();     
        render(<SelectBar customers={customers} timePeriod={timePeriod} setSelectedCustomer={customerFn} setSelectedMonths={monthFn}/>);
        const selectCustomer = screen.getAllByTestId('select-customer');
        expect(customerFn).toHaveBeenCalledTimes(0);
        expect(selectCustomer[0]).not.toBeChecked();
        fireEvent.click(selectCustomer[0]);
        expect(customerFn).toHaveBeenCalledTimes(1);
        expect(selectCustomer[0]).toBeChecked();
        const selectMonths = screen.getAllByTestId('select-months');
        
        expect(monthFn).toHaveBeenCalledTimes(0);
        expect(selectMonths[0]).not.toBeChecked();
        fireEvent.click(selectMonths[0]);
        expect(monthFn).toHaveBeenCalledTimes(1);
        expect(selectMonths[0]).toBeChecked();
    })
})
