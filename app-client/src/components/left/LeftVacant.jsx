import React, {Component} from 'react';
import left from '../../../resources/css/Left.module.css';
import PopupVacation from '../util/PopupVacation';

//todo 버튼 클릭 시 팝업 컴포넌트 로드


class LeftVacant extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      showPopup: false,
      infos: {}
    };
  };

  componentDidMount() {
    fetch('./src/temp_json/LeftVacant.json')
      .then(res => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          infos: result
        });
      }, (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      });
  }

  onClickRequest = e => {
    e.preventDefault();
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  render() {
    const parentPage = 'leftVacant';
    const { error, isLoaded, infos } = this.state;

    if (error) {
      return <div>Error : {error.message}</div>
    } else {
      if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className={left.vacant}>
            <div className={left.vacant_days}>
              <span>vacation(days)</span>
              <p>{infos.left}</p>
            </div>
            <div className={left.btn_vacant}>
              <a href="#" className='btn btn-violet btn-lg'
                 onClick={this.onClickRequest}><i className="fas fa-paper-plane"/>Request day off</a>
            </div>
            {this.state.showPopup ?
              <PopupVacation parentPage={parentPage} closePopup={this.onClickRequest.bind(this)}/> : null}
          </div>
        );
      }
    }
  }
}

export default LeftVacant;