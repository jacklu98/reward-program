import { calculateTotalRewards, getMonthFromDate } from "../../utils";
import MonthRewards from "../MonthRewards/MonthRewards";
import './CustomerRewards.css';


export default function CustomerRewards({transactions, customerId, timePeriod}) {
    // total reward in three month
    const totalRewards = calculateTotalRewards(transactions);
    // reconstruct this customer transaction by month
    const records = {};
    timePeriod.forEach(month => {
        records[month] = [];
    });
    transactions.forEach(transaction => {
        let month = getMonthFromDate(transaction.purchaseTime);
        if(records[month]) {
            const prevRecords = records[month];
            records[month] = [...prevRecords, transaction]; 
        }      
    });

    return (
        <div className="reward-app_customer">
            <header className="reward-app_customer_header">
                <span>{`Customer: ${customerId}`}</span>
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