import { useState } from "react";
import CustomerRewards from "./components/CustomerRewards/CustomerRewards";
import useRequestAllTransactions from "./utils/hooks/useRequestAllTransactions";
import SearchRewardBar from "./components/SearchRewardBar/SearchRewardBar";

function App() {
    const [transactionsGroupByCustomer, customers, timePeriod, isLoading] = useRequestAllTransactions();
    const [selectedCustomer, setSelectedCustomer] = useState("all");
    const [selectedMonths, setSelectedMonths] = useState([]);

    return (
        <div className="reward-app">
            <h1>Reward Program</h1>
            <SearchRewardBar 
              customers={customers} 
              timePeriod={timePeriod} 
              setSelectedCustomer={setSelectedCustomer} 
              setSelectedMonths={setSelectedMonths}
            />
            {isLoading ? <div>Please Wait Loading...</div> : null}
            {selectedCustomer === "all" ? 
                (customers.map(customer => {
                  return ( 
                    <CustomerRewards
                      key={customer}
                      transactions={transactionsGroupByCustomer[customer]} 
                      customerId={customer} 
                      timePeriod={timePeriod}
                    />
                  )
                }))
                :(<CustomerRewards 
                  transactions={transactionsGroupByCustomer[selectedCustomer]} 
                  customerId={selectedCustomer} 
                  timePeriod={selectedMonths}
                />) 
            }
        </div>
  );
}

export default App;
