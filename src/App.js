/*
1 component that holds/updates state

1 component that displays the information of the user

1 component that houses all the buttons on the site

1 component that does the header

1 component for edit/new
*/

import './reset.css'
import './App.css';
import Header from './header'
import Display from './Display'

function App() {
  return (
    <div className="App">
      <Header/>
      <Display/>
      {/* <Buttons/> */}
    </div>
  );
}

export default App;
