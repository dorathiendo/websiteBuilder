import React, { Component } from 'react';
import Page from '../../components/Page';
import moment from 'moment';
import {InputMoment, BigInputMoment, DatePicker, TimePicker} from 'react-input-moment';



import Content from '../../components/Content.js';
import Utils from "../utils/Utils";


const errorStyle = {
    color: 'red',
};
export default class Appointments extends Component {
    constructor() {
        super();
        this.state = {
            bigInputMoment: moment(),
            error_message: '',
        };
    }

    submit(e) {
        e.preventDefault();

        var fieldKey = e.target.id + '.';
        const formData = {};
        for (const field in this.refs) {
            if (field.startsWith(fieldKey)) {
                var value = this.refs[field].value;
                if (!value || value.trim() === ''){
                    this.setState({error_message: 'Please fill out all required fields.'});
                    return;
                }
                formData[field.split('.')[1]] = value;
            }
        }
        if (fieldKey === 'appointment.'){
            formData.message += ' ' + formData.date_time + ' for ' + formData.name + ' (' + formData.contact_number + ')';
        }

        Utils.serverComm('/server/ask', formData, function (response) {
            var message = 'Thank you for your appointment request.  We will response to you shortly.';
            if (fieldKey !== 'appointment.')
                message = "Your email has been added to our mailing list.";
            if (response !== ':pass')
                message = 'Sorry we are currently having difficulty.  Please try again.';
            document.location.href = '/message/' + message;
        });
    }

    render() {
       let data = {
         services: [],
         header: {
           headerImageSrc: "https://images.pexels.com/photos/3190/makeup-beauty-lipstick-make-up.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"
         }
       };
        let {bigInputMoment} = this.state;
        return (
          <div className="contentSection">
              <div className="contentWrapper">
                  <div>
                      <Content
                          image={data.header.headerImageSrc}
                          backgroundColor="rgba(0,0,0,0.5)"
                          padding="50px 10%"
                          color="white">
                          <div>
                              <h2>Request for an Appointment</h2>
                              <div className="formWrapper">
                                  <span style={errorStyle}>{this.state.error_message}</span>
                                  <form>
                                      <input type="hidden" ref={"appointment.subject"} value={"Request for an appointment."}/>
                                      <input type="hidden" ref={"appointment.message"} value={"Request for an appointment on "}/>
                                      <input type="text" ref={"appointment.name"} placeholder="Name" />
                                      <input type="email" ref={"appointment.email"} placeholder="Email" />
                                      <input type="text" ref={"appointment.contact_number"} placeholder="Contact Phone Number" />

                                      <input
                                          ref={"appointment.date_time"}
                                          className="output"
                                          type="text"
                                          value={bigInputMoment.format('llll')}
                                      />
                                      <div className={'wrapper medium'}>
                                          <BigInputMoment
                                              moment={bigInputMoment}
                                              locale={"en"}
                                              showSeconds={false}
                                              onChange={mom => this.setState({bigInputMoment: mom})}
                                          />
                                      </div>
                                      <button className="white" id={"appointment"} onClick={this.submit.bind(this)}>Submit</button>
                                  </form>
                              </div>
                          </div>
                      </Content>
                      <Content>
                        <h2>Join our email list for regular updates on promotions and event offers!</h2>
                        <div className="formWrapper">
                        <form>
                              <input type="hidden" ref={"email_list.subject"} value={"Request to be on email mailing list."}/>
                              <input type="hidden" ref={"email_list.message"} value={"Please add me to your mailing list."}/>
                              <input type="text" ref={"email_list.name"} placeholder="Name" />
                              <input type="email" ref={"email_list.email"} placeholder="Email" />
                              <button className="white" id={"email_list"} onClick={this.submit.bind(this)}>Submit</button>
                        </form>
                        </div>
                      </Content>
                  </div>
              </div>
          </div>
        );
    }
}
