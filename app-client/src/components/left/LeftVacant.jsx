import React, {Component} from 'react';
import left from '../../../resources/css/Left.module.css';
import PopupVacation from '../util/PopupVacation';

//todo 버튼 클릭 시 팝업 컴포넌트 로드


class LeftVacant extends Component {
  constructor(props){
    super(props);
    this.state = {
      showPopup: false
    };
  };

  onClickRequest = e => {
    e.preventDefault();
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  render() {
    const parentPage = 'leftVacant';

    return (
      <div className={left.vacant}>
        <div className={left.vacant_days}>
          <span>vacation(days)</span>
          <p>17.0</p>
        </div>
        <div className={left.btn_vacant}>
          <a href="#" className='btn btn-violet btn-lg'
             onClick={this.onClickRequest}><i className="fas fa-paper-plane" />Request day off</a>
        </div>
        {this.state.showPopup ? <PopupVacation parentPage={parentPage} closePopup={this.onClickRequest.bind(this)}/> : null}
      </div>
    );
  }
}

export default LeftVacant;