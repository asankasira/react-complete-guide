
import './Chart.css'
import ChartBar from "./ChartBar";

export default function Chart(props) {
    let {dataPoints} = props;
    const maxSpentOnYear = dataPoints.reduce((max, p) => Math.max(p.value, max), 0);
    dataPoints = dataPoints.map((p, i) => ({...p, id: i, maxValue: maxSpentOnYear}));

    return (
        <div className={"chart"}>
            {dataPoints.map(p => <ChartBar key={p.id} {...p}/>)}
        </div>
    );
}