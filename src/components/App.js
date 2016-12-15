import React, { PropTypes } from 'react';

import Header from './common/Header';
import Footer from './common/Footer';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
