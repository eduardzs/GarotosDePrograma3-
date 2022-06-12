import { useState } from 'react'
import axios from 'axios'
import PBTN from './components/pbotao/index'
import PSOCI from './components/psocial/index'

function App() {
  const [objResponse, setObjResponse] = useState({})
  const getApi = async() => {
    let {data} = await axios.get('https://api.catboys.com/img')
    setObjResponse(data)
  }
  return (
    <div>
      <PSOCI url = {objResponse?.url}
      artist ={ objResponse?.artist}
      artist_url = {objResponse?.artist_url}
      /> 
      <PBTN getApi={getApi}/>
    </div>
  )
}

export default App
