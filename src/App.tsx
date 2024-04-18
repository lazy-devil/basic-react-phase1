import './App.css'
import Transaction from './components/Transaction/Transaction'

function App() {
  const design: any = { color: "red", textAlign: "center", fontSize: '1.5rem' }

  return (
    <div className="container">
      {/* <h1 style={{color:"red",textAlign:"center",fontSize:'1.5rem'}}>แอพบัญชีรายรับ - รายจ่าย</h1> */}
      <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
      <Transaction />
    </div>
  )
}

export default App
