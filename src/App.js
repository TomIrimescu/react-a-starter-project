import React, {Component} from 'react';
import AppStyle from './App.css';
import Button from 'material-ui/Button';
import FormDialog from './components/FormDialog';
import SimpleSnackBar from './components/SimpleSnackBar';

class App extends Component {
  
    render() {
    const style = {
      textAlign: 'center'
    };
    
    return (
      <div style={style}>
        <h3 className={AppStyle.blue}>Hello, I am a react starter project</h3>
        <p>This starter project includes Material-UI [1.0.0-beta.21] and supports CSS Modules.</p>
        <p> The following is a Material-UI button, Form Dialog and SnackBar.</p>
        <Button raised color="accent">Hello World</Button>
        <p><FormDialog /></p>
        <p><SimpleSnackBar /></p>
      </div>
    );
  }
}

export default App;




