import React, {Component} from 'react';
import DatePicker from 'react-datepicker'; // https://reactdatepicker.com
import moment from 'moment';
import popup from '../../../resources/css/Popup.module.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class PopupVacation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      diffDays: 1
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleSelectStart = this.handleSelectStart.bind(this);
    this.handleSelectEnd = this.handleSelectEnd.bind(this);
    this.textInput = React.createRef();
  }

  handleChangeStart(date) {
    this.setState({
      startDate: date
    });
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date,
    });
  }

  handleSelectStart(date){
    let start = this.state.startDate;
    let end = moment(date);
    let diff = end.diff(start, 'days') + 1;

    this.setState({
      startDate: date,
      diffDays: diff
    });
  }

  handleSelectEnd(date){
    let start = this.state.startDate;
    let end = moment(date);
    let diff = end.diff(start, 'days') + 1;

    this.setState({
      endDate: date,
      diffDays: diff
    });
  }

  onRefInput = (c) => {
    this.textInput = c;
  };

  render() {
    return (
      <div className={popup.popup_dim}>
        <div className='popup'>
          <div className='popup_title'>Request time off</div>
          <div className='popup_content'>
            <form action="">
              <div className='adjust_period'>
                <p>Period</p>
                <DatePicker selected={this.state.startDate}
                            selectsStart
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onSelect={this.handleSelectStart}
                            onChange={this.handleChangeStart}/>
                            <span> ~ </span>
                <DatePicker selected={this.state.endDate}
                            selectsEnd
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onChange={this.handleChangeEnd}
                            onSelect={this.handleSelectEnd}
                            minDate={this.state.startDate}/>
              </div>
              <p>Amount</p>
              <div className='adjust_days'>
                <div><span id='amountStart'></span><input type="text" className='' ref={this.onRefInput} value={this.state.diffDays} onChange={(e) => this.setState({diffDays: e.target.value})} /><span>days</span></div>
                <div><span id='amountEnd'></span><input type="text" className='' /><span>days</span></div>
              </div>
            </form>
          </div>
          <div className='popup_btn'>
            <a href="#" className='btn btn-orange' onClick={this.props.closePopup}>close</a>
          </div>
        </div>

      </div>
    );
  }
}

export default PopupVacation;