const Statistic = ({name, votes}) => {

    return(
        <tr>
            <td>{name}</td>
            <td>{votes}</td>
        </tr>
    )
}

export default Statistic