import React, {Component} from 'react';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        email: '',
        password: ''
      }
    }

  }
  handlerchangeUser = (property, value) => {
    let user = this.state.user;
    user[property] = value;
    this.setState({
      user
    })
  }

  handlerSubmit = (e) => {
    e.preventDefault();
    this.props.handlerLogin(this.state.user.email, this.state.user.password);
  }

  render() {
    return (
      <form className = "login-form" onSubmit={this.handlerSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" value= {this.state.user.email} onChange={(e)=>this.handlerchangeUser('email', e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" value= {this.state.user.password} onChange={(e)=>this.handlerchangeUser('password', e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default LoginForm;
