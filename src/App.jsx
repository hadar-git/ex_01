import Header from './Header/Header.jsx'
import Flower from './Flower.jsx'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Flower name="ורד" petalC="pink" centerC="gold" />
      <Flower name="חבצלת" petalC="purple" />
      <Flower name="נרקיס" centerC="orange" />
      <Flower name="כלנית" />
    </div>
  )
}

export default App
