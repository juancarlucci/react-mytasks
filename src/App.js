import React, { Component } from 'react';
import Header from './components/Header';
import MyRoutes from './config/routes';
import WebfontLoader from '@dr-kobros/react-webfont-loader';

// webfontloader configuration object. *REQUIRED*.
const config = {
  google: {
    families: ['Source Sans Pro:300,600'],
  }
};

class App extends Component {
  render() {
    return (
      <WebfontLoader config={config}>
        <div className="App">
          <Header/>
          { MyRoutes }
        </div>
      </WebfontLoader>

    );
  }
}

export default App;
