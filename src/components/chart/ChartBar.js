
import './ChartBar.css'

export default function ChartBar(props) {
    const {value, maxValue, label} = props;

    let barFillPercentage = '0%';
    if(maxValue > 0) {
        barFillPercentage = `${Math.round((value/maxValue) * 100)}%`;
    }

    return (
        <div className={"chart-bar"}>
            <div className={"chart-bar__inner"}>
                <div className={"chart-bar__fill"} style={{height: barFillPercentage}}></div>
            </div>
            <div className={"chart-bar__label"}>{label}</div>
        </div>
    )
}