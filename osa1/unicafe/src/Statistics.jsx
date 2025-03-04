import Statistic from "./Statistic";

const Statistics = ({good, neutral, bad, all, positive, average}) => {

    if(all == 0){
        return (
            <>
                <p>No feedback given </p>
            </>
        )
    }
    return(
        <table>
            <tr>
                <th>Name</th>
                <th>Value</th>
            </tr>
            <Statistic name="Good" votes={good} />
            <Statistic name="Neutral" votes={neutral} />
            <Statistic name="Bad" votes={bad} />
            <Statistic name="All" votes={all} />

            <Statistic name="Average" votes={average} />
            <Statistic name="Positive" votes={positive} />
        </table>    
    )
}

export default Statistics