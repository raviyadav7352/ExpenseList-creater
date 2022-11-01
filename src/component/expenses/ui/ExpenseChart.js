import Chart from "../expenseChart/Chart";
const ExpenseChart = (props) => {
    const dataLists = [
        { label: "jan", value: 0 },
        { label: "feb", value: 0 },
        { label: "mar", value: 0 },
        { label: "apr", value: 0 },
        { label: "may", value: 0 },
        { label: "jun", value: 0 },
        { label: "jul", value: 0 },
        { label: "aug", value: 0 },
        { label: "sep", value: 0 },
        { label: "oct", value: 0 },
        { label: "nov", value: 0 },
        { label: "dec", value: 0 },
    ]
    for (let item of props.expenseData) {
        const expenseMonth = new Date(item.date).getMonth();
        dataLists[expenseMonth].value += item.price;
    }
    console.log(dataLists)
    return (
        <Chart datapoints={dataLists} />
    )

}
export default ExpenseChart;