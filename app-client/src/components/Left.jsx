import React, {Component} from 'react';
import LeftVacant from "./left/LeftVacant";
import left from '../../resources/css/Left.module.css';
import TopLogo from "./left/TopLogo";

class Left extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      infos: {}
    };
  };

  componentDidMount() {
    this.callApi().then(result => {
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

  callApi = async () => {
    const response = await fetch('./src/temp_json/LeftVacant.json');
    const body = await response.json();
    return body;
  };


  render() {
    const { error, isLoaded, infos } = this.state;

    if (error) {
      return <div>Error : {error.message}</div>
    } else {
      if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className={left.area_left}>
            <TopLogo />
            <div className={left.box_info}>
              <div className={left.pic}><img src="../resources/img/img4.png" alt="" /></div>

              <div className={left.name}>
                <p>{infos.name.first} {infos.name.last}</p>
                <span>{infos.job}</span>
              </div>

              <LeftVacant />

            </div>
          </div>
        );
      }
    }

  }
}

export default Left;