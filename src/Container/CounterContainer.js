import React, { Component } from "react";
import { connect } from "react-redux";
import {
  // fetchCounter,
  addAction1,
  removeAction1,
  addAction10,
  removeAction10,
  resetAction
} from "../actions/index";

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Conteur",
      number: 0
    };
    this.id = this.props.match.params.id;
  }
  componentWillMount() {
    console.log(this.props.counterReducer);
    // this.props.functionCallDispatchFetchCounter(this.props.counterReducer);
  }

  onChange1 = number => {
    this.props.addOne({ number: number });
  };
  onChangeRemove1 = number => {
    this.props.removeOne({ number: number });
  };
  onChange10 = number => {
    this.props.addten({ number: number });
  };
  onChangeRemove10 = number => {
    this.props.removeten({ number: number });
  };
  onChangeReset = number => {
    this.props.resetAll({ number: number });
  };


  render() {
    console.log(this.props.counterReducer);
    return (
      <div>
        <h1>{this.props.counterReducer}</h1>
        <div>
          <button id="add1" onClick={() => this.props.addOne()} value={this.props.onChange1}>+1</button>
          <button id="remove1" onClick={() => this.props.removeOne()} value={this.props.onChangeRemove1}>-1</button>
          <button id="add10" onClick={() => this.props.addten()} value={this.props.onChange10}>+10</button>
          <button id="remove10"onClick={() => this.props.removeten()} value={this.props.onChangeRemove10}> -10</button>
          <button id="reset"onClick={() => this.props.resetAll()} value={this.props.onChangeReset}>reset</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = store => store;

const mapDispatchToProps = dispatch => ({
  addOne: () => dispatch(addAction1()),
  removeOne: () => dispatch(removeAction1()),
  addten: () => dispatch(addAction10()),
  removeten: () => dispatch(removeAction10()),
  resetAll: () => dispatch(resetAction()),
  // functionCallDispatchFetchCounter: number => dispatch(fetchCounter(number)),

  // addEvent: number => {
  //   dispatch(
  //     addAction1(),
  //     removeAction1(),
  //     addAction10(),
  //     removeAction10(),
  //     resetAction()
  //   );
  // }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
