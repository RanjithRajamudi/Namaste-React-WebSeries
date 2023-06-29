import React from 'react'

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            userIfo: {
                name: "User",
                location: "India",
                email: "@what.com",
                avatar_url: "geestyle"
            }
        }
    }

    async componentDidMount() {

        const data = await fetch("https://api.github.com/users/ranjithrajamudi");
        const json = await data.json()
        this.setState({
            userIfo: json
        })

            console.log(json, "sscd")
    }

    render() {


        const { name, location, email, avatar_url } = this.state.userIfo;
        return (
            <div className='user-card'>
                <img src={avatar_url}></img>
                <h2>Name: {name}</h2>
                <h3>Location : {location}</h3>
                <h4>COntact: {email}</h4>
                
            </div>
        )
    }
}

export default UserClass;