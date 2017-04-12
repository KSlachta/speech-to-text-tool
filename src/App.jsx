import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter, IndexRoute } from 'react-router-dom'

import Base from './components/Base'
import Models from './components/Models'
import CreateModel from './components/CreateModel'
import UpdateModel from './components/UpdateModel'
import CredentialsModal from './components/CredentialsModal'
import LandingPage from './components/LandingPage'

// This is the base of the App
// It holds our "Base" component which is just a TitleBar and content
// Depending on the path; the "Models", "CreateModel" or "UpdateModel" component
// are shown.
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {showModal: false}
    }

    // Our two points of entry (CredentialsModal/LandingPage) should give us
    // valid credentials or null.
    setCredentials = (username, password) => {
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
        this.forceUpdate()
    }

    showModal = () => {
        this.setState({
            showModal: true
        })
    }

    hideModal = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <BrowserRouter>
                {localStorage.getItem('username') == 'undefined'
                    || localStorage.getItem('username') == null
                    || localStorage.getItem('username') == '' ?
                    <LandingPage setApiKey={this.setApiKey}/> :
                    <Base showModal={this.showModal}>
                        <Route exact path="/" component={Models}/>
                        <Route exact path="/create_model" component={CreateModel}/>
                        <Route exact path="/update_model/:classifierID" render={UpdateModel}/>
                        <CredentialsModal
                            visible={this.state.showModal}
                            setCredentials={this.setCredentials}/>
                    </Base>
                }
            </BrowserRouter>
        )
    }
}

// This takes our app and injects it into the "main" element in index.html
ReactDOM.render(
    <App />, document.getElementById("main")
)
