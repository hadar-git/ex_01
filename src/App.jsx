import Header from './Header/Header.jsx'
import Flower from './Flower.jsx'
import './App.css'


    const flowers = [
  { code: 1, name: "ורד", petalC: "pink", centerC: "gold" },
  { code: 2, name: "חבצלת", petalC: "purple" },
  { code: 3, name: "נרקיס", centerC: "orange" },
  { code: 4, name: "כלנית" }
]

function App() {
  return (
    <div>
      <Header />
      <ul>
          {flowers.map(fl => <Flower key={fl.code} name={fl.name} petalC={fl.petalC} centerC={fl.centerC} />)}
      </ul>
    </div>
  )
}

export default App
