import { getMonthFromDate } from "../../utils";
import MonthRewards from "../MonthRewards/MonthRewards";
import './CustomerRewards.css';


export default function CustomerRewards({transactions, customerId, timePeriod}) {
    if(!customerId) return <div>This Customer ID Not Exist!!!</div>

    // reconstruct this customer transaction by month
    let totalRewards = 0;
    const records = {};
    transactions.forEach(transaction => {
        let month = getMonthFromDate(transaction.purchaseTime);
        if (records[month]) {
            const prevRecords = records[month];
            records[month] = [...prevRecords, transaction]; 
        } else {
            records[month] = [transaction];
        }    
        // calculate total rewards in this time period
        if (timePeriod.includes(month)) {
            totalRewards += transaction.reward; 
        }
    });

    return (
        <div className="reward-app_customer">
            <header className="reward-app_customer_header">
                <span>{`Customer ID: ${customerId}`}</span>
                <span>{`Name: ${transactions[0].customerName}`}</span>
                <span>{`Total Rewards: ${totalRewards}`}</span>
            </header>
            {timePeriod.map((month)=>{
                return (
                    <MonthRewards key={month} month={month} transactions={records[month]}/>
                )
            })}
        </div>
    )
}