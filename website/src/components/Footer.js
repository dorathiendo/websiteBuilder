import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Content from '../components/Content';

import '../styles/footer.css'
import Utils from "./utils/Utils";

export default class Footer extends Component {
    submit(e) {
        e.preventDefault();

        const formData = {};
        for (const field in this.refs) {
            formData[field] = this.refs[field].value;
        }
        Utils.serverComm('/server/ask', formData, function (response) {
            var message = 'Thank you for your inquiry.  We will response to you shortly.'
            if (response !== ':pass')
                message = 'Sorry we are currently having difficulty.  Please try again.';
            document.location.href = '/message/' + message;
        });
    }

    render() {
        var isAppointmentPage = document.location.pathname === '/appointment';
        var contactUs = isAppointmentPage? '':(
            <div className="formWrapper">
                <form id="contactUs">
                    <input type="email" placeholder="Email" size={200} ref={"email"}/>
                    <input type="text" placeholder="Name" ref={"name"}/>
                    <input type="text" placeholder="Subject" ref={"subject"}/>
                    <textarea placeholder="Message" rows="10" ref={"message"}></textarea>
                    <button className="white" onClick={this.submit.bind(this)}>Submit</button>
                </form>
            </div>
        )
        return (
            <div className="footer">
            <iframe id="widget" src="http://fromyourdoctor.com/widget/1601" title="Patient Library" width="160" height="480" frameborder="0"></iframe>
            {contactUs}
            <p>Lee Mac</p>
            <p>42650 Christy Street, Fremont, CA 94538</p>
            <p>(510) 226 - 8832</p>
            <p>info@leemac.biz</p>

            </div>
        );
    }
}
