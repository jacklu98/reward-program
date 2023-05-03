import { useState } from "react";
import { sortTimePeriodFromLatest } from "../../utils";

export default function SelectBar({customers, timePeriod, setSelectedCustomer, setSelectedMonths}) {
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [checkedMonths, setCheckedMonths] = useState([]);

    function handleSelectCustomer(event) {
        const id = event.target.value;
        setSelectedCustomer(id)
    }

    function handleSelectMonths(event) {
        const selectedMonth = event.target.value;
        if(event.target.checked) {
            if(checkedMonths.length === timePeriod.length - 1) {                
                setIsAllChecked(true); 
                setCheckedMonths(timePeriod);
                setSelectedMonths(timePeriod);
            } else {            
                setSelectedMonths(prev => sortTimePeriodFromLatest([...prev, selectedMonth]));
                setCheckedMonths(prev => [...prev, event.target.value])
            }
        } else {
            if(checkedMonths.length === timePeriod.length) {
                setIsAllChecked(false);
            }
            setSelectedMonths(prev => prev.filter(month => month !== selectedMonth));
            setCheckedMonths(prev => prev.filter(month => month !== selectedMonth))
        }
    }

    function handleSelectAllMonths() {
        if(!isAllChecked) { 
            setIsAllChecked(true); 
            setCheckedMonths(timePeriod);
            setSelectedMonths(timePeriod);
        } else {
            setIsAllChecked(false);
            setCheckedMonths([]);
            setSelectedMonths([]);
        }
    }

    return (
        <div className="reward-app_select">
            <div className="reward-app_select_customer"> 
                Select Customer: 
                {customers.map(customer => {
                    return (
                        <label key={customer}>
                            <input  data-testid="select-customer" type="radio" name="selectCustomer" value={customer} onChange={handleSelectCustomer}/>
                            {customer}
                        </label>
                    )
                })}
            </div>
            <div className="reward-app_select_months"> 
                Select Transaction Months: 
                <label>
                    <input type="checkbox" name="selectMonths" value="all" onChange={handleSelectAllMonths} checked={isAllChecked}/>
                    Select All Months
                </label>
                {timePeriod.map(month => {
                    return (
                        <label key={month}>
                            <input data-testid="select-months" type="checkbox" name="selectMonths" value={month} onChange={handleSelectMonths} checked={checkedMonths.includes(month)}/>
                            {month}
                        </label>
                    )
                })}
            </div>
        </div>
    )
}