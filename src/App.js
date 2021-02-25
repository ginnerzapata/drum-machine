import Header from './header'
import { Data } from './Data'
import DrumKey from './DrumKey'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="drum-machine">
        {Data.map((item) => (
          <DrumKey key={item.id} item={{ ...item }} />
        ))}
      </div>
      <p>designed & coded with love by ginner zapata</p>
    </div>
  )
}

export default App
