import withAuthProvider, { AuthComponentProps } from './Graph/AuthProvider';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import NavBar from './NavBar';
import ErrorMessage from './ErrorMessage';
import Welcome from './Welcome';
import 'bootstrap/dist/css/bootstrap.css';
import Frame from './Components/Frame'

class App extends React.Component<AuthComponentProps> {
  
  setPushVisible(visible:boolean) {
    this.setState({pushVisible: visible});
  }
  setSelectedRows(selected:[]) {
    this.setState({selectedRows: selected})
  }

  render() {
    let error = null;
    if (this.props.error) {
      error = <ErrorMessage
        message={this.props.error.message}
        debug={this.props.error.debug} />;
    }
    return (
      <Router>
        <div>
          <NavBar
            isAuthenticated={this.props.isAuthenticated}
            authButtonMethod={this.props.isAuthenticated ? this.props.logout : this.props.login}
            user={this.props.user} />
          <Container>
            {error}
            <Route exact path="/"
              render={(props) =>
                <Welcome {...props}
                  isAuthenticated={this.props.isAuthenticated}
                  user={this.props.user}
                  authButtonMethod={this.props.login} />
              } />             
            <Route exact path="/table"
              render= {(props) =>                
                  this.props.isAuthenticated ? 
                  <div>
                    <Frame 
                      user={this.props.user} 
                      getAccessToken={this.props.getAccessToken}
                      setError={this.props.setError}
                      />
                  </div>:
                  <Redirect to="/" />                
              } />
            </Container>
        </div>
      </Router>
    );
  }
}
export default withAuthProvider(App);