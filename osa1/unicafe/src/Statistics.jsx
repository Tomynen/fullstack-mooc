import Statistic from "./Statistic";

const Statistics = ({good, neutral, bad, all, positive, average}) => {

    return(
        <>
            <Statistic name="Good" votes={good} />
            <Statistic name="Neutral" votes={neutral} />
            <Statistic name="Bad" votes={bad} />
            <Statistic name="All" votes={all} />

            <Statistic name="Average" votes={average} />
            <Statistic name="Positive" votes={positive} />
        </>
    )
}

export default Statistics