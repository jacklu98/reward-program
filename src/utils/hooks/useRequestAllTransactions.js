import { useEffect, useState } from "react";
import { getAllTransactions } from "../../api/mockApi";
import { calculateReward, findTimePeriod } from "../index";

export default function useRequestAllTransactions() {
    const [transactionsGroupByCustomer, setTransactionsGroupByCustomer] = useState({});
    const [customers, setCustomers] = useState([]);
    const [timePeriod, setTimePeriod] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getAllTransactions()
            .then(data => {
                // find the month of reward time period
                const months = findTimePeriod(data);

                // split transactions to every customer
                const records = {};
                data.forEach(element => {
                    // calculate reward for every transaction
                    element = calculateReward(element);

                    if (records[element.customerId]) {
                        const prevRecords = records[element.customerId];
                        records[element.customerId] = [...prevRecords, element];
                    } else {
                        records[element.customerId] = [element];
                    }
                });
                setIsLoading(false);
                setTransactionsGroupByCustomer(records);
                setCustomers([...Object.keys(records)]);
                setTimePeriod(months);
            })
            .catch(err => {
                setIsLoading(false);
                console.log(err)
            });
    }, [])

    return [transactionsGroupByCustomer, customers, timePeriod, isLoading];
}