import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <div id='home' className='content__welcome'>
      <h1>¿Que son los codigos de estado HTTP?</h1>
      <h3>Los códigos de estado HTTP son códigos numéricos que indican el resultado de una solicitud que un cliente hace a un servidor web. En otras palabras, son mensajes que el servidor envía al cliente para informarle sobre el estado de la solicitud que se ha realizado.

Hay muchos códigos de estado HTTP diferentes, pero los más comunes son:

200 OK: significa que la solicitud se ha procesado correctamente y que el servidor ha devuelto la información solicitada.
404 Not Found: significa que el servidor no ha encontrado el recurso solicitado. Esto puede deberse a que la URL está mal escrita o que el recurso ha sido eliminado o movido.
500 Internal Server Error: significa que ha habido un error en el servidor que impide que se procese la solicitud.
Los códigos de estado HTTP son importantes porque permiten que los clientes (como los navegadores web) y los servidores se comuniquen de manera efectiva y sepan cómo manejar las solicitudes y respuestas de manera adecuada. Si un cliente recibe un código de estado que indica un error, puede tomar medidas para corregir el problema o informar al usuario sobre lo que ha sucedido.</h3>
    <h4>Voy a mostrarte una listado algunos de los errores HTTP.</h4>
    </div>
    <Home /> 
    </>
  )
}

export default App
