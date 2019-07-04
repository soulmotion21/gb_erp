import React, {Component} from 'react';
import Routes from '../routes/Routes';
import Left from '../components/Left';
import Footer from '../components/Footer';

class Root extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Routes />
        <Left/>
        <Footer />
      </div>
    );
  }
}

export default Root;