import classes from './App.module.css';
import resets from './_resets.module.css';
import TestLogin from './testLogin';

function App() {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
    <TestLogin />
  </div>
  );
}

export default App;
