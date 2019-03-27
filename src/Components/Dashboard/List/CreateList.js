import React from 'react';
import './list.css';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listValue: '',
      hide: false,
      focus: false,
    }
  }

  onChangeListHandler = (e) => {
    var value = e.target.value;
    this.setState({
      listValue: value
    })
  }

  animationHandler = (e) => {
    this.setState({
      hide: e.animationName === 'startFilling'
    })
  }

  render() {
    var { listValue, hide, focus } = this.state;
    const hideLabel = hide || focus || listValue;
    return (
      <div>
        <label className='list__container'>
          <span className={`fake-placeholder ${hideLabel ? "hide": ""}`}>Add List</span>
          <input
            className='list-input'
            value={listValue}
            onFocus={() => this.setState({ focus: true })}
            onBlur={() => this.setState({ focus: false })}
            onChange={this.onChangeListHandler}
            onAnimationStart={this.animationHandler}
          />
        </label>
      </div>
    );
  }
}

export default List;