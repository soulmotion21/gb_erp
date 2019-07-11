import React, {Component} from 'react';
import footer from '../../resources/css/Footer.module.css';

class Footer extends Component {
  render() {
    return (
      <div className={footer.wrap_footer}>2018 &copy; GBC Limited</div>
    );
  }
}

export default Footer;