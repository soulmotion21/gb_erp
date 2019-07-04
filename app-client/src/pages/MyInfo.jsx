import React, {Component} from 'react';

class MyInfo extends Component {
  render() {
    return (
      <div className='area_contents'>
        <div className="row">
          <div className="col">
            <div className="card_section">
              <div className="tabs">
                <ul>
                  <li className="active"><a href="#">Personal</a></li>
                  <li><a href="#">Day off log</a></li>
                </ul>
              </div>

              <div className="tab_contents">
                <div className="card_title">
                  <h3>Basic Info</h3>
                </div>

                <span className="btn_info_modify"><a href="#"><i className="im im-pencil"></i>modify</a></span>

                <div className="card_body">

                  <div className="section_form row">
                    <div className="col-4">
                      <label htmlFor="">First Name</label>
                      <input type="text" className="form-control" value="Sungkyu" readOnly />
                    </div>
                    <div className="col-4">
                      <label htmlFor="">Last Name</label>
                      <input type="text" className="form-control" value="Kim" readOnly />
                    </div>
                    <div className="col-4">
                      <label htmlFor="">Preferred Name</label>
                      <input type="text" className="form-control" value="David" readOnly />
                    </div>
                  </div>

                  <div className="section_form row">
                    <div className="col-4">
                      <label htmlFor="">Birth day (mm/dd/yyyy)</label>
                      <input type="text" className="form-control" value="01/01/1919" placeholder=""
                             readOnly />
                    </div>
                  </div>

                  <div className="section_form row">
                    <div className="col-4">
                      <label htmlFor="">Gender</label>
                      <input type="text" className="form-control" value="Male" readOnly />
                    </div>
                  </div>

                  <div className="section_form row">
                    <div className="col">
                      <label htmlFor="">Address 1</label>
                      <input type="text" className="form-control" value="" readOnly />
                    </div>
                  </div>

                  <div className="section_form row">
                    <div className="col">
                      <label htmlFor="">Address 1</label>
                      <input type="text" className="form-control" value="" readOnly />
                    </div>
                  </div>

                  <div className="section_form row">
                    <div className="col-4">
                      <label htmlFor="">E-mail</label>
                      <input type="text" className="form-control" value="dkim@gbc.com" readOnly />
                    </div>
                  </div>

                  <div className="section_form row">
                    <div className="col-4">
                      <label htmlFor="">Cellphone</label>
                      <input type="text" className="form-control" value="+82 10 9876-5432" readOnly />
                    </div>
                  </div>

                  <div className="section_form row">
                    <div className="col-4">
                      <label htmlFor="">Hire Date (mm/dd/yyyy)</label>
                      <input type="text" className="form-control" value="01/01/2018" readOnly />
                    </div>
                  </div>

                  <div className="section_form row">
                    <div className="col-4">
                      <label htmlFor="">Job Title</label>
                      <input type="text" className="form-control" value="Senior front-end developer"
                             readOnly />
                    </div>
                  </div>

                  <div className="align_right">
                    <a href="#" className="btn btn-lg btn-gray">cancel</a>
                    <a href="#" className="btn btn-lg btn-mint">OK</a>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyInfo;