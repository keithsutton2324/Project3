import React from "react";
class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    preferredlang: "",
    country: ""
  }

  onInputChange = (event) => {
    var name = event.target.name
    var value = event.target.value
    this.setState({
      [name]: value
    })
  }
  render() {
    return (<div>
      <h1>Project 3</h1>
      <form action="/submit" method="post">
        <h2>Create A User</h2>onChange ={this.onInputChange}
        <input type="text" class="form-control" name={this.state.username} placeholder="Username" autofocus />
        <input type="text" class="form-control" name={this.state.password} placeholder="Password" autofocus />
        <input type="text" class="form-control" name={this.state.email} placeholder="Email" autofocus />
        <input type="text" class="form-control" name={this.state.preferredlang} placeholder="Preferred Language" autofocus />
        <input type="text" class="form-control" name={this.state.country} placeholder="Country" autofocus />
        <button class="btn btn-lg btn-primary btn-block" id="submit" type="submit">Submit</button>
      </form>
    </div>
    )
  }
}

export default Signup;
