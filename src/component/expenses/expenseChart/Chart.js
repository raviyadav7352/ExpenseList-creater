import RoundBox from '../../card/RoundBox';
import './Chart.css'
import ChartBar from "./ChartBar";
const Chart = (props) => {
    const datapointsValue = props.datapoints.map(expense => expense.value)
    const maximumvalue = Math.max(...datapointsValue)
    return (
        <RoundBox className="chart">
            {props.datapoints.map(datapoint => (
                <ChartBar
                    key={datapoint.label}
                    value={datapoint.value}
                    label={datapoint.label}
                    maxvalue={maximumvalue}
                />))}

        </RoundBox>
    )
}
export default Chart;