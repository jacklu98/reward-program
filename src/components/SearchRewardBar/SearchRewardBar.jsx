import { useState, useEffect } from "react";
import { convertMMYYYYToYYYYMM, convertYYYYMMToMMYYYY } from "../../utils";
import './SearchRewardBar.css';

export default function SearchCustomer({customers, setSelectedCustomer, timePeriod, setSelectedMonths}) {
    const [searchQuery, setSearchQuery] = useState("");  
    const [startMonth, setStartMonth] = useState("");
    const [endMonth, setEndMonth] = useState("");  
    const [relatedCustomers, setRelatedCustomers] = useState([]);
    const [isCustomerSelected, setIsCustomerSelected] = useState(true);
    
    useEffect(() => {
      setStartMonth(convertMMYYYYToYYYYMM(timePeriod[timePeriod.length-1]))
      setEndMonth(convertMMYYYYToYYYYMM(timePeriod[0]))
    }, [timePeriod])
    
    useEffect(() => {
      if (searchQuery === "") {
        setRelatedCustomers(customers);
        return;
      }
      const potentialResults = customers.filter((customer) => {
          return customer.startsWith(searchQuery);
      });
      setRelatedCustomers(potentialResults);
    }, [searchQuery, customers]);
    
    function handleFocus() {
      setIsCustomerSelected(false);
    }

    function handleInput(event) {
      setIsCustomerSelected(false);
      setSearchQuery(event.target.value);
    }
  
    function handleItemClick(customerID) {
      setIsCustomerSelected(true);
      setSearchQuery(customerID);
    }

    function handleSearchReward() {
      if(!customers.includes(searchQuery)) {
        setSelectedCustomer("");
      } else {
        setSelectedCustomer(searchQuery);
      }
      const startMonthIndex = timePeriod.indexOf(convertYYYYMMToMMYYYY(startMonth));
      const endMonthIndex = timePeriod.indexOf(convertYYYYMMToMMYYYY(endMonth));
      const selectedMonths = timePeriod.slice(endMonthIndex, startMonthIndex + 1);
      setSelectedMonths(selectedMonths);
    }

    function handleStartMonth(event) {
      setStartMonth(event.target.value);
    }

    function handleEndMonth(event) {
      setEndMonth(event.target.value);
    }

    return (
        <div className="reward-app_search">
            <div className="reward-app_search_customer"> 
                <div className="reward-app_search_label">Search Customer By ID:</div>
                <input
                    className="reward-app_search_search-bar"
                    data-testid="reward-app_search_search-bar"
                    onChange={handleInput}
                    onFocus={handleFocus}
                    value={searchQuery}
                />
                {isCustomerSelected || relatedCustomers.length === 0 ? (
                    <></>
                ) : (
                    <div className="reward-app_search_related-customers">
                    {relatedCustomers.map((customer) => {
                        return (
                        <div
                            className="reward-app_search_related-customer"
                            data-testid="reward-app_search_related-customer"
                            key={customer}
                            onClick={() => {
                            handleItemClick(customer);
                            }}
                        >
                            {customer}
                        </div>
                        );
                    })}
                    </div>
                )}
            </div>
            <div className="reward-app_search_start-month">
                <div className="reward-app_search_label">Start Month:</div>
                <input
                    className="reward-app_search_search-bar"
                    data-testid="reward-app_search_search-bar"
                    type="month"
                    name="start"
                    min={convertMMYYYYToYYYYMM(timePeriod[timePeriod.length-1])}
                    max={endMonth}
                    value={startMonth}
                    onChange={handleStartMonth}
                />
            </div>
            <div className="reward-app_search_end-month">
                <div className="reward-app_search_label">End Month:</div>
                <input
                    className="reward-app_search_search-bar"
                    data-testid="reward-app_search_search-bar"
                    type="month"
                    name="end"
                    min={startMonth}
                    max={convertMMYYYYToYYYYMM(timePeriod[0])}
                    value={endMonth}
                    onChange={handleEndMonth}
                />
            </div>
            <button className="reward-app_search_btn" data-testid="reward-app_search_btn" onClick={handleSearchReward}>Search Reward</button>
        </div>
    )
}