import React from 'react';
import {
  Button,
  Jumbotron
} from 'reactstrap';

interface WelcomeProps {
  isAuthenticated: boolean;
  authButtonMethod: any;
  user: any;
}

interface WelcomeState {
  isOpen: boolean;
}

function WelcomeContent(props: WelcomeProps) {
  // If authenticated, greet the user
  if (props.isAuthenticated) {
    return (
      <div>
        <h4>Welcome {props.user.displayName}!</h4>
        <p>Use the navigation bar to get and export values.</p>
      </div>
    );
  }

  // Not authenticated, present a sign in button
  return <Button color="primary" onClick={props.authButtonMethod}>Click here to sign in</Button>;
}

export default class Welcome extends React.Component<WelcomeProps, WelcomeState> {
  render() {
    return (
      <Jumbotron>
        <h1>Welcome to Graph Excel API</h1>
        <p className="lead">
          Use this sample app to test writing in an excel file previously created with the <a href="https://developer.microsoft.com/en-us/graph/graph-explorer">graph explorer </a>
          
        </p>
        <WelcomeContent
          isAuthenticated={this.props.isAuthenticated}
          user={this.props.user}
          authButtonMethod={this.props.authButtonMethod} />
      </Jumbotron>
    );
  }
}