import { useState } from "react";
import { connect } from "react-redux";
import {
  increment as incrementAction,
  decrement as decrementAction,
  reset as resetAction,
} from "../../redux/reducers/counter/counterActions";

const Counter = (props) => {
  const { increment, decrement, reset, count } = props;
  const [margin, setMargin] = useState(1);

  const handlePlus = () => {
    increment(margin);
  };
  const handleMinus = () => {
    decrement(margin);
  };
  const handleReset = () => {
    reset();
  };

  const handleSetMargin = (e) => {
    let value = e.target.value;
    setMargin(value);
  };

  return (
    <div className="Conter">
      Counter Comp
      <div>Count</div>
      <div data-testid="count">{count}</div>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <button onClick={handleReset}>reset</button>
      <div>margin to increase or decrease by</div>
      <input
        type="number"
        min="1"
        data-testid="margin"
        value={margin}
        onChange={handleSetMargin}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (margin) => dispatch(incrementAction(margin)),
    decrement: (margin) => dispatch(decrementAction(margin)),
    reset: () => dispatch(resetAction()),
    dispatch,
  };
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
