import { connect } from "dva";

const Count = ({ count, dispatch }) => (
    <div>
        <h2>{count}</h2>
        <button
            key="add"
            onClick={() => {
                dispatch({ type: "count/add" });
            }}
        >
            +
        </button>
        <button
            key="minus"
            onClick={() => {
                dispatch({ type: "count/minus" });
            }}
        >
            -
        </button>
    </div>
);

const mapStateToProps = ({ count }) => {
    return { count };
};

export default connect(mapStateToProps)(Count);
