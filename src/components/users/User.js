import React, { Component } from 'react'

export class User extends Component {
    componentDidMount(){
        this.props.getuser(this.props.match.params.login)
    }
    render() {
        const{name}=this.props.user;
        const{loading}=this.props
        return (
            <div>
                {name}
            </div>
        )
    }
}

export default User
