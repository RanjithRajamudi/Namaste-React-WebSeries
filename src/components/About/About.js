import React from 'react'
import UserClass from '../User/UserClass'

class About extends React.Component {
    constructor(props) {
        super(props);

        console.log("About Constructor")
    }
    componentDidMount() {
        console.log("About DidMount")
    }

    render() {
        console.log("About Render")
        return (
            <div >
                <h1>About</h1>
                <p>This is the about page</p>
                <UserClass name={"class Based"} location={"Bengaluru"}/>
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div >
//             <h1>About</h1>
//             <p>This is the about page</p>
//             {/* <User name={"func"}/> */}
//             <UserClass name={"class"} />
//         </div>
//     )
// }

export default About;