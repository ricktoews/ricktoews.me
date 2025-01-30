import CustomButton from "./CustomButton";
function Content(props) {
    return <>
        <div className="content-heading">
            <div>{props.title}</div>
            {props.github && <div>
                <CustomButton icon="github" href={props.github}></CustomButton>
            </div>}
        </div>

        <div className="scrollable-content">
            <div className="portfolio-content active">
                {props.children}
            </div>
        </div>
    </>
}

export default Content;