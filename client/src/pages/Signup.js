import React from "react";
class Signup extends React.Component {
    state = {
        username: "",
        password: ""
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
            <h1>Proj 3</h1>
            <form action="/submit" method="post">
                <h2>Create A User</h2>onChage ={this.onInputChange}
                <input type="text" class="form-control" name={this.state.username} placeholder="Username" autofocus />
                <input type="text" class="form-control" name={this.state.password} placeholder="Password" autofocus />
                <input type="text" class="form-control" name={this.state.email} placeholder="Email" />
                <input type="text" class="form-control" name={this.state.preferredlang} placeholder="Preferred Language" autofocus />
                <input type="text" class="form-control" name={this.state.country} placeholder="Country" autofocus />
                <button class="btn btn-lg btn-primary btn-block" id="submit" type="submit">Submit</button>
            </form>
        </div>
        )
    }
  }   

export default Signup;
