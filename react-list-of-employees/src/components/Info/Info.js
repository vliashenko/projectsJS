import './Info.css';

export  const Info = (props) => {
    const { employees, increased, rewarded } = props;
    return (
        <div className="wrapper">
            <h4>Employees in the company {employees}</h4>
            <h5>The number of employees to increase: {increased}</h5>
            <h5>Will get extra reward: {rewarded}</h5>
        </div>
    )
}

