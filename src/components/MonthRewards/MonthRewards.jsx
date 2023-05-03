import { calculateTotalRewards } from "../../utils";
import './MonthRewards.css';

export default function MonthRewards({transactions, month}) {
    // count total rewards of month
    const totalRewards = calculateTotalRewards(transactions);

    return (
        <div className="reward-app_customer_month"  data-testid="reward-app_customer_month">
            <header>
                <span className="">{`Month: ${month}`}</span>
                <span>{`Month Rewards: ${totalRewards}`}</span>
            </header>
            {transactions.length !== 0 ? 
                (<table className="reward-app_customer_month_table">
                    <thead>
                        <tr>
                            <th>Transaction ID</th>
                            <th>Purchase Time</th>
                            <th>Purchase Money</th>                            
                            <th>Reward</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions.map(transaction => {
                                return(
                                    <tr key={transaction.transactionId} data-testid="table_transaction">
                                        <td className="transaction-id">{transaction.transactionId}</td>
                                        <td className="purchase-time">{transaction.purchaseTime}</td>
                                        <td className="purchase-money">{transaction.purchaseMoney}</td>
                                        <td className="reward">{transaction.reward}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>) : <div className="error-message">No Transaction History</div>
            }
        </div>
    )
}