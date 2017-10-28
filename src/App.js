import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Switch from 'react-toggle-switch'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switched: false
        };
    }

    toggleSwitch = () => {
        this.setState(prevState => {
            return {
                switched: !prevState.switched
            };
        });
    };



    showQR() {

        console.log('clicked');
    }


    render() {
        return (
            <div className="container">
                <h2>Personal data shared with Pepper robot</h2>


                <ul className="list-group">
                    <li className="list-group-item">
                        <i
                            className="fa fa-check"
                            aria-hidden="true"
                            style={{
                                marginRight: '.5em',
                                color: 'green',
                            }}
                        ></i>
                        <b
                                style={{
                                    marginRight: '.5em',
                                }}
                                >
                                    Name
                        </b>
                            John
                            <div className="form-check form-check-inline" style={{float: 'right'}}>
                              <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                              </label>
                            </div>
                    </li>
                </ul>

                <ul className="list-group">
                    <li className="list-group-item">
                        <i
                            className="fa fa-check"
                            aria-hidden="true"
                            style={{
                                marginRight: '.5em',
                                color: 'green',
                            }}
                        ></i>
                        <b
                                style={{
                                    marginRight: '.5em',
                                }}
                                >
                                    Initials
                        </b>
                            J.D.
                            <div className="form-check form-check-inline" style={{float: 'right'}}>
                              <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                              </label>
                            </div>
                    </li>
                </ul>

                <ul className="list-group">
                    <li className="list-group-item">
                        <i
                            className="fa fa-check"
                            aria-hidden="true"
                            style={{
                                marginRight: '.5em',
                                color: 'green',
                            }}
                        ></i>
                        <b
                                style={{
                                    marginRight: '.5em',
                                }}
                                >
                                    Lastname
                        </b>
                            Doe
                            <div className="form-check form-check-inline" style={{float: 'right'}}>
                              <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                              </label>
                            </div>
                    </li>
                </ul>


                <ul className="list-group">
                    <li className="list-group-item">
                        <i
                            className="fa fa-check"
                            aria-hidden="true"
                            style={{
                                marginRight: '.5em',
                                color: 'green',
                            }}
                        ></i>
                        <b
                                style={{
                                    marginRight: '.5em',
                                }}
                                >
                                    Email
                        </b>
                            john.doe@foo.com
                            <div className="form-check form-check-inline" style={{float: 'right'}}>
                              <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                              </label>
                            </div>
                    </li>
                </ul>


                <ul className="list-group">
                    <li className="list-group-item">
                        <i
                            className="fa fa-check"
                            aria-hidden="true"
                            style={{
                                marginRight: '.5em',
                                color: 'white',
                            }}
                        ></i>
                        <b
                                style={{
                                    marginRight: '.5em',
                                }}
                                >
                                    Address
                        </b>
                            Teleportboulevard 200, 1043 EJ Amsterdam
                            <div className="form-check form-check-inline" style={{float: 'right'}}>
                              <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                              </label>
                            </div>
                    </li>
                </ul>



                <ul className="list-group">
                    <li className="list-group-item">
                        <i
                            className="fa fa-check"
                            aria-hidden="true"
                            style={{
                                marginRight: '.5em',
                                color: 'green',
                            }}
                        ></i>
                        <b
                                style={{
                                    marginRight: '.5em',
                                }}
                                >
                                    Passport number
                        </b>
                            xghd73932nx
                            <div className="form-check form-check-inline" style={{float: 'right'}}>
                              <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                              </label>
                            </div>
                    </li>
                </ul>


                <ul className="list-group">
                    <li className="list-group-item">
                        <i
                            className="fa fa-check"
                            aria-hidden="true"
                            style={{
                                marginRight: '.5em',
                                color: 'green',
                            }}
                        ></i>
                        <b
                                style={{
                                    marginRight: '.5em',
                                }}
                                >
                                    Contact mobile number
                        </b>
                            0653623999

                            <div className="form-check form-check-inline" style={{float: 'right'}}>
                              <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                              </label>
                            </div>
                    </li>
                </ul>

                <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png">
                    <button onClick={() => this.showQR.bind(this) } style={{ marginTop: '.5em' }} type="button" className="btn btn-primary">Send</button>
                </a>

            </div>
                );
            }
}

export default App;
