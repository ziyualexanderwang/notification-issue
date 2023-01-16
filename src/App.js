import './App.css';
import { create, NotificationIndicatorType } from 'openfin-notifications';

function App() {

  function handleClick() {
    create({
      title: 'Notification test',
      body: 'Notification test',
      category: 'Error',
      buttons: [{ title: 'Exit', cta: true }],
      onClose: { task: 'exit' },
      sticky: 'sticky',
      indicator: { type: NotificationIndicatorType.FAILURE, text: ' Error' },
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Send notification</button>
      </header>
    </div>
  );
}

export default App;
