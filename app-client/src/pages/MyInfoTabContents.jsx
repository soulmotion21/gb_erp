import React, {Component} from 'react';
import Personal from '../pages/Personal';
import RequestDayOff from '../pages/RequestDayOff';

class MyInfoTabContents extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    switch (this.props.tabIndex) {
      case '0':
        return(
          <Personal />
        );
      case '1':
        return (
          <RequestDayOff />
        );
    }
  }
}

export default MyInfoTabContents;