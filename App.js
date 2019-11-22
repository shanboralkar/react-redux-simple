import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="App">
          Age :
          <span>
            <b>{this.props.age}</b>
          </span>
        </div>
        <br />
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        <button onClick={this.props.onAgeRest}>RESET</button>
        <div>
          <br />
          History :
          <div>
            <ul>
              {this.props.history.map(el => (
                <li 
                  key={el.id} 
                  onClick = {() => this.props.onDelete(el.id)}
                  >
                  {el.age}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    history: state.history   
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
    onAgeRest: () => dispatch({ type: "AGE_RESET" }),
    onDelete: (id) => dispatch({ type: "DEL_ITEM", key : id})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
