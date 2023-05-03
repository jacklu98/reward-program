import { useState } from "react";
import CustomerRewards from "./components/CustomerRewards/CustomerRewards";
import useRequestAllTransactions from "./utils/hooks/useRequestAllTransactions";
import SelectBar from './components/SelectBar/SelectBar';

function App() {
    const [transactionsGroupByCustomer, customers, timePeriod] = useRequestAllTransactions();
    const [selectedCustomer, setSelectedCustomer] = useState("");
    const [selectedMonths, setSelectedMonths] = useState([]);

    return (
        <div className="reward-app">
          <h1>Reward Program</h1>
            <SelectBar customers={customers} 
              timePeriod={timePeriod} 
              setSelectedCustomer={setSelectedCustomer} 
              setSelectedMonths={setSelectedMonths}
            />
            {
                selectedCustomer !== "" ? 
                    (<CustomerRewards 
                      transactions={transactionsGroupByCustomer[selectedCustomer]} 
                      customerId={selectedCustomer} 
                      timePeriod={selectedMonths}
                    />) : null
            }
        </div>
  );
}

export default App;
