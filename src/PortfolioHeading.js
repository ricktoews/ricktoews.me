import "./assets/css/App.scss";
import CustomButton from './components/CustomButton';

function PortfolioHeading(props) {
    return <>
        <div style={{ display: "flex", justifyContent: 'space-between' }}>
            {props.children.map((item, ndx) => {
                return <div key={ndx}>{item}</div>
            })}
        </div>
    </>
}

export default PortfolioHeading;