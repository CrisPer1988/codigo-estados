import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const Home = () => {
  return (
    <div className='container__estados'>
       
        <div id='cdos' className="content__descrition">
            <h2>Codigos de estado 200</h2>
            <p>Este es el mejor tipo de código de estado HTTP que se puede recibir. Una respuesta de nivel 200 significa que todo funciona exactamente como debería.</p>
            <a  className='links' href="https://developer.mozilla.org/es/docs/Web/HTTP/Status#respuestas_satisfactorias" target='_blank'>Ver documentacion</a>
            <Dropdown>
      <Dropdown.Toggle className='hola hola200' variant="success" id="dropdown-basic">
        200
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#code200">200</Dropdown.Item>
        <Dropdown.Item href="#code201">201</Dropdown.Item>
        <Dropdown.Item href="#code202">202</Dropdown.Item>
        <Dropdown.Item href="#code203">203</Dropdown.Item>
        <Dropdown.Item href="#code204">204</Dropdown.Item>
        <Dropdown.Item href="#code2055">205</Dropdown.Item>
        <Dropdown.Item href="#code206">206</Dropdown.Item>
    
      </Dropdown.Menu>
    </Dropdown>
        </div>
        <div className="error__container">
            <h3 id='code200' className='e200'><span>200:</span>«Todo está bien». Este es el código que se entrega cuando una página web o recurso actúa exactamente como se espera.</h3>
            <hr />
            <h3 id='code201' className='e200'><span>201:</span>«Creado». El servidor ha cumplido con la petición del navegador y, como resultado, ha creado un nuevo recurso.</h3>
            <hr />
            <h3 id='code202' className='e200'><span>202:</span>«Aceptado». El servidor ha aceptado la solicitud de tu navegador pero aún la está procesando. La solicitud puede, en última instancia, dar lugar o no a una respuesta completa.</h3>
            <hr />
            <h3 id='code203' className='e200'><span>203:</span>«Información no autorizada». Este código de estado puede aparecer cuando se utiliza un apoderado. Significa que el servidor proxy recibió un código de estado de 200 «Todo está bien» del servidor de origen, pero ha modificado la respuesta antes de pasarla a su navegador.</h3>
            <hr />
            <h3 id='code204' className='e200'><span>204:</span>«Sin contenido». Este código significa que el servidor ha procesado con éxito la solicitud, pero no va a devolver ningún contenido.</h3>
            <hr />
            <h3 id='code205' className='e200'><span>205:</span>«Restablecer el contenido». Como un código 204, esto significa que el servidor ha procesado la solicitud pero no va a devolver ningún contenido. Sin embargo, también requiere que tu navegador restablezca la vista del documento.</h3>
            <hr />
            <h3 id='code206' className='e200'><span>206:</span>«Contenido parcial». Puedes ver este código de estado si tu cliente HTTP (también conocido como tu navegador) usa «cabeceras de rango». Esto permite a tu navegador reanudar las descargas en pausa, así como dividir una descarga en múltiples flujos. Se envía un código 206 cuando un encabezado de rango hace que el servidor envíe sólo una parte del recurso solicitado.</h3>
        </div>
   
        
        <div id='ctres' className="content__descrition300">
            <h2>Codigos de estado 300</h2>
            <p>La redirección es el proceso utilizado para comunicar que un recurso ha sido trasladado a una nueva ubicación. Hay varios códigos de estado HTTP que acompañan a las redirecciones, con el fin de proporcionar a los visitantes información sobre dónde encontrar el contenido que están buscando.</p>
            <a className='links' href="https://developer.mozilla.org/es/docs/Web/HTTP/Status#redirecciones" target='_blank'>Ver documentacion</a>
            <Dropdown>
      <Dropdown.Toggle  className="hola hola300" variant="success" id="dropdown-basic">
        300
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#code300">300</Dropdown.Item>
        <Dropdown.Item href="#code301">301</Dropdown.Item>
        <Dropdown.Item href="#code302">302</Dropdown.Item>
        <Dropdown.Item href="#code303">303</Dropdown.Item>
        <Dropdown.Item href="#code304">304</Dropdown.Item>
        <Dropdown.Item href="#code307">307</Dropdown.Item>
        <Dropdown.Item href="#code308">308</Dropdown.Item>
    
      </Dropdown.Menu>
    </Dropdown>
        </div>
        <div className="error__container300">
            <h3 id="code300" className='e300'><span>300:</span>«Opciones Múltiples». A veces, puede haber múltiples recursos posibles con los que el servidor puede responder para cumplir con la solicitud de su navegador. Un código de estado 300 significa que tu navegador ahora tiene que elegir entre ellos. Esto puede ocurrir cuando hay múltiples extensiones de tipo de archivo disponibles, o si el servidor está experimentando desambiguación del sentido de las palabras.</h3>
            <hr />
            <h3 id="code301" className='e300'><span>301:</span>«El recurso solicitado ha sido trasladado permanentemente». Este código se entrega cuando una página web o un recurso ha sido reemplazado permanentemente por un recurso diferente. Se utiliza para la redirección permanente del URL.</h3>
            <hr />
            <h3 id="code302" className='e300'><span>302:</span>«El recurso solicitado se ha movido, pero fue encontrado«. Este código se utiliza para indicar que el recurso solicitado se encontró, pero no en el lugar donde se esperaba. Se utiliza para la redirección temporal de la URL.</h3>
            <hr />
            <h3 id="code303" className='e300'><span>303:</span>«Ver otros». Para entender un código de estado 303 es necesario conocer la diferencia entre los cuatro métodos de solicitud HTTP principales. Esencialmente, un código 303 le dice a tu navegador que encontró el recurso que el navegador solicitó vía POST, PUT o DELETE. Sin embargo, para recuperarlo usando GET, necesita hacer la solicitud apropiada a un URL diferente al que usó anteriormente.</h3>
            <hr />
            <h3 id="code304" className='e300'><span>304:</span>«El recurso solicitado no ha sido modificado desde la última vez que accedió a él«. Este código le dice al navegador que los recursos almacenados en la caché del navegador no han cambiado. Se usa para acelerar la entrega de páginas web reutilizando los recursos descargados previamente.</h3>
            <hr />
            <h3 id="code307" className='e300'><span>307:</span>«Redireccionamiento temporal«. Este código de estado ha reemplazado a 302 «Encontrado» como la acción apropiada cuando un recurso ha sido movido temporalmente a una URL diferente. A diferencia del código de estado 302, no permite que el método HTTP cambie.</h3>
            <hr />
            <h3 id="code308" className='e300'><span>308:</span>«Redireccionamiento permanente». El código de estado 308 es el sucesor del código 301 «Movido permanentemente». No permite que el método HTTP cambie e indica que el recurso solicitado está ahora localizado permanentemente en una nueva URL.</h3>
        </div>
        <div id='ccuatro' className="content__descrition400">
            <h2>Codigos de estado 400</h2>
            <p>En el nivel 400, los códigos de estado HTTP comienzan a ser problemáticos. Estos son códigos de error que especifican que hay un fallo en su navegador y/o en la solicitud.</p>
            <a className='links' href="https://developer.mozilla.org/es/docs/Web/HTTP/Status#errores_de_cliente" target='_blank'>Ver documentacion</a>
            <Dropdown>
      <Dropdown.Toggle className="hola hola400" variant="success" id="dropdown-basic">
        400
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#code400">400</Dropdown.Item>
        <Dropdown.Item href="#code401">401</Dropdown.Item>
        <Dropdown.Item href="#code402">402</Dropdown.Item>
        <Dropdown.Item href="#code403">403</Dropdown.Item>
        <Dropdown.Item href="#code404">404</Dropdown.Item>
        <Dropdown.Item href="#code405">405</Dropdown.Item>
        <Dropdown.Item href="#code406">406</Dropdown.Item>
        <Dropdown.Item href="#code407">407</Dropdown.Item>
        <Dropdown.Item href="#code408">408</Dropdown.Item>
        <Dropdown.Item href="#code409">409</Dropdown.Item>
        <Dropdown.Item href="#code410">410</Dropdown.Item>
        <Dropdown.Item href="#code411">411</Dropdown.Item>
        <Dropdown.Item href="#code412">412</Dropdown.Item>
        <Dropdown.Item href="#code413">413</Dropdown.Item>
        <Dropdown.Item href="#code414">414</Dropdown.Item>
        <Dropdown.Item href="#code415">415</Dropdown.Item>
        <Dropdown.Item href="#code416">416</Dropdown.Item>
        <Dropdown.Item href="#code417">417</Dropdown.Item>
        <Dropdown.Item href="#code418">418</Dropdown.Item>
        <Dropdown.Item href="#code422">422</Dropdown.Item>
        <Dropdown.Item href="#code425">425</Dropdown.Item>
        <Dropdown.Item href="#code426">426</Dropdown.Item>
        <Dropdown.Item href="#code428">428</Dropdown.Item>
        <Dropdown.Item href="#code429">429</Dropdown.Item>
        <Dropdown.Item href="#code431">431</Dropdown.Item>
        <Dropdown.Item href="#code451">451</Dropdown.Item>
        <Dropdown.Item href="#code499">499</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
        </div>
        <div className="error__container400">
            <h3 id="code400" className="e400"><span>400:</span>«Mala petición». El servidor no puede devolver una respuesta debido a un error del cliente. Vea nuestra guía para resolver este error.</h3>
            <hr />
            <h3 id="code401" className="e400"><span>401:</span>«No autorizado» o «Se requiere autorización». Esto es devuelto por el servidor cuando el recurso de destino carece de credenciales de autenticación válidas. Podrías ver esto si has configurado la autenticación básica de HTTP usando htpasswd.</h3>
            <hr />
            <h3 id="code402" className="e400"><span>402:</span>«Pago requerido». Originalmente, este código fue creado para ser usado como parte de un sistema de dinero digital. Sin embargo, ese plan nunca se llevó a cabo. En cambio, es utilizado por diversas plataformas para indicar que una solicitud no se puede cumplir, por lo general debido a la falta de los fondos necesarios. Los casos más comunes incluyen:
Has alcanzado el límite de solicitudes diarias al API de los desarrolladores de Google.
No ha pagado tus honorarios de Shopify y su tienda ha sido desactivada temporalmente.
Tu pago a través de Stripe ha fallado, o Stripe está tratando de evitar un pago fraudulento.</h3>
            <hr />
            <h3 id="code403" className="e400"><span>403:</span>«El acceso a ese recurso está prohibido». Este código se devuelve cuando un usuario intenta acceder a algo a que no tiene permiso para ver. Por ejemplo, intentar acceder a un contenido protegido por contraseña sin registrarse podría producir un error 403.</h3>
            <hr />
            <h3 id="code404" className="e400"><span>404:</span>«No se encontró el recurso solicitado». Este es el mensaje de error más común de todos ellos. Este código significa que el recurso solicitado no existe, y el servidor no sabe si alguna vez existió.</h3>
            <hr />
            <h3 id="code405" className="e400"><span>405:</span>«Método no permitido«. Esto se genera cuando el servidor de alojamiento (servidor de origen) soporta el método recibido, pero el recurso de destino no lo hace.</h3>
            <hr />
            <h3 id="code406" className="e400"><span>406:</span>«Respuesta no aceptable«. El recurso solicitado es capaz de generar sólo contenido que no es aceptable según los encabezamientos de aceptación enviados en la solicitud.</h3>
            <hr />
            <h3 id="code407" className="e400"><span>407:</span>«Se requiere autenticación de proxy». Se está utilizando un servidor proxy que requiere que el navegador se autentifique antes de continuar.</h3>
            <hr />
            <h3 id="code408" className="e400"><span>408:</span>«El servidor se agotó esperando el resto de la petición del navegador». Este código se genera cuando un servidor se apaga mientras espera la solicitud completa del navegador. En otras palabras, el servidor no recibió la solicitud completa que fue enviada por el navegador. Una posible causa podría ser la saturación de la red, lo que provoca la pérdida de paquetes de datos entre el navegador y el servidor.</h3>
            <hr />
            <h3 id="code409" className="e400"><span>409:</span>«Conflicto». Un código de estado 409 significa que el servidor no pudo procesar la solicitud de su navegador porque hay un conflicto con el recurso correspondiente. Esto ocurre a veces debido a múltiples ediciones simultáneas.</h3>
            <hr />
            <h3 id="code410" className="e400"><span>410:</span>«El recurso solicitado se ha ido y no volverá». Esto es similar a un código 404 «No encontrado», excepto que un 410 indica que la condición es esperada y permanente.</h3>
            <hr />
            <h3 id="code411" className="e400"><span>411:</span>«Longitud requerida». Esto significa que el recurso solicitado requiere que el cliente especifique una cierta longitud y que no lo hizo.</h3>
            <hr />
            <h3 id="code412" className="e400"><span>412:</span>«La condición previa falló». Tu navegador incluyó ciertas condiciones en sus encabezados de solicitud, y el servidor no cumplió con esas especificaciones.</h3>
            <hr />
            <h3 id="code413" className="e400"><span>413:</span>«Carga útil demasiado grande» o «Entidad solicitante demasiado grande». Su solicitud es más grande de lo que el servidor está dispuesto o es capaz de procesar.</h3>
            <hr />
            <h3 id="code414" className="e400"><span>414:</span>«URI demasiado largo«. Esto suele ser el resultado de una solicitud GET que ha sido codificada como una cadena de consulta demasiado grande para que el servidor la procese.</h3>
            <hr />
            <h3 id="code415" className="e400"><span>415:</span>«Tipo de medios de comunicación sin apoyo«. La solicitud incluye un tipo de medio que el servidor o recurso no soporta.</h3>
            <hr />
            <h3 id="code416" className="e400"><span>416:</span>«Rango no satisfactorio». Su solicitud fue por una porción de un recurso que el servidor no puede devolver.</h3>
            <hr />
            <h3 id="code417" className="e400"><span>417:</span>«La expectativa fracasó». El servidor no puede cumplir los requisitos especificados en el campo de cabecera de la solicitud.</h3>
            <hr />
            <h3 id="code418" className="e400"><span>418:</span>«Soy una tetera». Este código es devuelto por las teteras que reciben solicitudes para preparar café. También es un chiste del «día de las bromas de abril» de 1998.</h3>
            <hr />
            <h3 id="code422" className="e400"><span>422:</span>«Entidad no procesable«. La solicitud del cliente contiene errores semánticos, y el servidor no puede procesarla.</h3>
            <hr />
            <h3 id="code425" className="e400"><span>425:</span>«Demasiado pronto». Este código se envía cuando el servidor no está dispuesto a procesar una solicitud porque puede ser reproducida.</h3>
            <hr />
            <h3 id="code426" className="e400"><span>426:</span>«Se requiere actualización». Debido al contenido del campo de cabecera de la solicitud, el cliente debería cambiar a un protocolo diferente.</h3>
            <hr />
            <h3 id="code428" className="e400"><span>428:</span>«Se requiere condición previa». El servidor requiere que se especifiquen las condiciones antes de procesar la solicitud.</h3>
            <hr />
            <h3 id="code429" className="e400"><span>429:</span>«Demasiadas peticiones». Esto es generado por el servidor cuando el usuario ha enviado demasiadas solicitudes en un determinado período de tiempo (con límite de velocidad). Esto puede ocurrir a veces debido a los bots o scripts que intentan acceder a tu sitio. En este caso, tal vez quieras intentar cambiar tu URL de acceso a WordPress. También puedes revisar nuestra guía para arreglar el error 429 «Demasiadas peticiones».</h3>
            <hr />
            <h3 id="code431" className="e400"><span>431:</span>«Campos de la Cabecera de la Solicitud Demasiado Grandes«. El servidor no puede procesar la solicitud porque los campos de cabecera son demasiado grandes. Esto puede indicar un problema con un solo campo de cabecera, o con todos en general.</h3>
            <hr />
            <h3 id="code451" className="e400"><span>451:</span>«No disponible por razones legales«. El operador del servidor ha recibido una demanda para prohibir el acceso al recurso que has solicitado (o a un conjunto de recursos, incluido el que has solicitado). Dato curioso: Este código es una referencia a la novela Fahrenheit 451 de Ray Bradbury.</h3>
           <hr />
            <h3 id="code499" className="e400"><span>499:</span>«Solicitud de cliente cerrada». Esto es devuelto por NGINX cuando el cliente cierra la solicitud mientras Nginx aún la está procesando.</h3>
        </div>
        <div id='ccinco' className="content__descrition500">
            <h2>Codigos de estado 500</h2>
            <p>Los códigos de estado de nivel  500 también se consideran errores. Sin embargo, denotan que el problema está en el extremo del servidor. Esto puede hacer que sean más difíciles de resolver.</p>
            <a className='links' href="https://developer.mozilla.org/es/docs/Web/HTTP/Status#errores_de_servidor" target='_blank'>Ver documentacion</a>
            <Dropdown>
      <Dropdown.Toggle className="hola hola500" variant="success" id="dropdown-basic">
        500
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#code500">500</Dropdown.Item>
        <Dropdown.Item href="#code501">501</Dropdown.Item>
        <Dropdown.Item href="#code502">502</Dropdown.Item>
        <Dropdown.Item href="#code503">503</Dropdown.Item>
        <Dropdown.Item href="#code504">504</Dropdown.Item>
        <Dropdown.Item href="#code505">505</Dropdown.Item>
        <Dropdown.Item href="#code508">508</Dropdown.Item>
        <Dropdown.Item href="#code509">509</Dropdown.Item>
        <Dropdown.Item href="#code511">511</Dropdown.Item>
        <Dropdown.Item href="#code521">521</Dropdown.Item>
        <Dropdown.Item href="#code525">525</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
        <div className="error__container500">
            <h3 id='code500' className='e500'><span>500:</span>«Hubo un error en el servidor y la solicitud no pudo ser completada». Este es un código genérico que simplemente significa «error interno del servidor». Algo salió mal en el servidor y el recurso solicitado no fue entregado. Este código es típicamente generado por plugins de terceros, PHP defectuoso, o incluso la ruptura de la conexión a la base de datos. Revisa nuestros tutoriales sobre cómo corregir el error al establecer una conexión de base de datos y otras formas de resolver un error de 500 servidores internos.</h3>
            <hr />
            <h3 id='code501' className='e500'><span>501:</span>«No implementado». Este error indica que el servidor no es compatible con la funcionalidad necesaria para cumplir con la solicitud. Esto es casi siempre un problema en el propio servidor web, y por lo general debe ser resuelto por el host. Revisa nuestras recomendaciones sobre cómo resolver un error 501 no implementado.</h3>
            <hr />
            <h3 id='code502' className='e500'><span>502:</span>«Mala entrada». Este código de error significa típicamente que un servidor ha recibido una respuesta inválida de otro, como cuando se utiliza un servidor proxy. Otras veces una consulta o petición tardará demasiado, y así es cancelada o asesinada por el servidor y la conexión a la base de datos se rompe. Para más detalles, consulta nuestro tutorial en profundidad sobre cómo arreglar el error del 502 Bad Gateway.</h3>
            <hr />
            <h3 id='code503' className='e500'><span>503:</span>«El servidor no está disponible para manejar esta solicitud en este momento.» La solicitud no puede ser completada en este momento. Este código puede ser devuelto por un servidor sobrecargado que no puede manejar solicitudes adicionales. Tenemos una guía completa sobre cómo arreglar el error de no disponibilidad del servicio 503.</h3>
            <hr />
            <h3 id='code504' className='e500'><span>504:</span>«El servidor, actuando como una puerta de enlace, se ha agotado esperando a que otro servidor responda». Este es el código devuelto cuando hay dos servidores involucrados en el procesamiento de una solicitud, y el primer servidor se apaga esperando que el segundo servidor responda. Puedes leer más sobre cómo corregir los errores del 504 en nuestra guía dedicada.</h3>
            <hr />
            <h3 id='code505' className='e500'><span>505:</span>«Versión HTTP no soportada». El servidor no soporta la versión HTTP que el cliente usó para hacer la solicitud.</h3>
            <hr />
            <h3 id='code508' className='e500'><span>508:</span>«Se ha alcanzado el límite de recursos» Se han alcanzado los límites de recursos establecidos por tu alojamiento web. Consulta nuestro tutorial sobre cómo resolver el error «508 Resource Limit Is Reached«.</h3>
            <hr />
            <h3 id='code509' className='e500'><span>509:</span>«Límite de Ancho de Banda Excedido» significa que tu sitio web está utilizando más ancho de banda del que permite tu proveedor de hosting.</h3>
            <hr />
            <h3 id='code511' className='e500'><span>511:</span>«Se requiere autenticación de la red». Este código de estado se envía cuando la red que está tratando de usar requiere alguna forma de autenticación antes de enviar su solicitud al servidor. Por ejemplo, es posible que tenga que aceptar los términos y condiciones de un punto de acceso Wi-Fi público.</h3>
            <hr />
            <h3 id='code521' className='e500'><span>521:</span>«El servidor web está caído». El error 521 es un mensaje de error específico de Cloudflare. Significa que su navegador web fue capaz de conectarse con éxito a Cloudflare, pero Cloudflare no fue capaz de conectarse al servidor web de origen.</h3>
            <hr />
            <h3 id='code525' className='e500'><span>525:</span>«SSL Handshake Failed«. El error 525 significa que el Protocolo de enlace SSL entre un dominio que usa Cloudflare y el servidor web de origen falló. Si estás experimentando problemas, hay cinco métodos para intentar arreglar fácilmente el error 525.</h3>
        </div>
    </div>
  )
}

export default Home