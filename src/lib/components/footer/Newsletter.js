import React from 'react';
import * as EmailValidator from 'email-validator';

class Newsletter extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    let email = data.get('email');

    if(EmailValidator.validate(email)) {
      console.log('Valid email address.');
    } else {
      console.log('Invalid email address.');
    }
  }

  render() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( (position) => {
        const lng = position.coords.longitude;
        const lat = position.coords.latitude;
      
        console.log(position);
      });
    }

    return(
      <div className="block-7">
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="email_subscribe" className="footer-heading">Subscribe</label>
          <div className="form-group">
            <input type="text" className="form-control py-4" id="email_subscribe" name="email" placeholder="Email" required />
            <button className="btn btn-sm btn-primary">Send</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Newsletter;
