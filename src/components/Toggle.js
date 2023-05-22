import{useState} from "react"

  const Toggle = () => {
  const [isOn, setIsOn] = useState('false');

  const handleButton = () => {
    setIsOn (!isOn)
  }
  return (
    <div>
         <button onClick = {handleButton}> { isOn ?  'ON' : 'OFF'}</button>
           
    </div>
  )
}

export default Toggle
