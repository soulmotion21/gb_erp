import React, {Component} from 'react';
import Tab from '../components/util/Tab';

class MyInfo extends Component {
  render() {
    const pageName = 'myInfo';
    return (
      <div className='area_contents'>
        <div className="row">
          <div className="col">
            <div className="card_section">
              <Tab pageName={pageName}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyInfo;