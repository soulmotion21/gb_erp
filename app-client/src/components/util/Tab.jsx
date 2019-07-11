import React, {Component} from 'react';
import MyInfoTabContents from '../../pages/MyInfoTabContents';

class Tab extends Component {
  constructor(props){
    super(props);
    this.activeIndex = '0';
  };

  getCurrentIndex = (e) => {
    this.activeIndex = e.currentTarget.getAttribute('data-index');
    e.currentTarget.parentNode.childNodes.forEach((v) => {
      v.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
  };


  render() {
    switch (this.props.pageName) {
      case 'myInfo':
        return (
          <div>
            <div className="tabs">
              <ul>
                <li className="active" data-index="0" onClick={this.getCurrentIndex}><a href="#">Personal</a></li>
                <li data-index="1" onClick={this.getCurrentIndex}><a href="#">Day off log</a></li>
              </ul>
            </div>
            <MyInfoTabContents tabIndex={this.activeIndex}/>
          </div>
        );
      default:
        return (
          <div className="tabs">
            <ul>
              <li className="active"><a href="#">Tab 1</a></li>
              <li><a href="#">Tab 2</a></li>
            </ul>
          </div>
        );
    }


  }
}

export default Tab;