[[Portada]]
\clearpage
[[Indice]]
\clearpage

# 1. Introducción 
En este documento se recoge el desarrollo del caso práctico de la asignatura Interfaces de Usuario. El proyecto consiste en el diseño e implementación de una página web de un restaurante que permita consultar información sobre el establecimiento, reserva de mesa y pedidos a domicilio.

A continuación se expone un conjunto de personas y escenarios de uso de una página web de estas características, el análisis de otras webs similares, la especificación de requisitos funcionales y diseño del prototipo de nuestra web, una comparativa entre el prototipo original y la implementación, un análisis de accesibilidad del sitio web, la evaluación de otro proyecto y las conclusiones del proyecto. 

# 2.  Personas y escenarios 
Se han definido tres personas, cada una representante de un tipo de público objetivo de nuestro restraurante, para poder determinar la funcionalidad necesaria en nuestra página web. 

Para la especificación de las personas se ha diseñado una pantilla en forma de tabla con el siguiente formado: 
<table border>
<tr><td> Estereotipo </td> <td> tipo de público al que representa</td></tr>
<tr>
    <td> FOTO </td> <td> Nombre <br/> cita </td>
</tr>
<tr>
    <td> Edad: </td> <td> número de años </td>
</tr>
<tr>
    <td> Personalidad: </td> <td> rasgos definitorios de la persona </td>
</tr>
<tr>
    <td> Plataforma: </td> <td> ordenador/movil/tablet </td>
</tr>
<tr>
    <td> Experiencia tecnológica: </td> <td> 
        <b>Alta</b>: trata con dispositivos a menudo, se desenvuelve bien y está familiarizado con tramitaciones online<br>
        <b>media</b>: pese a que está abituado al trato en persona, usa adecuadamente su dispositivo. Aunque necesita que las cosas sean intuitivas y guías para los pasos más complejos.<br>
        <b>baja</b>: poca experiencia con las tramitaciones online, necesita que los pasos sean intuitivos y perfectamente guiados con ayudas visuales. 
    </td>
</tr>
<tr>
    <td> Motivaciones: </td> <td> qué busca en nuestro local </td>
</tr>
</table>

## 2.1. Jana Pérez

<table border>
<tr><td> Estereotipo </td> <td> joven sociable</td></tr>
<tr>
    <td> <img src="img_memoria/jana.png"> </td> <td> Jana Pérez <br/> <i>"Cada día es una oportunidad para crear algo nuevo y maravilloso"</i> </td>
</tr>
<tr>
    <td> Edad: </td> <td> 21 años </td>
</tr>
<tr>
    <td> Personalidad: </td> 
    <td> <ul>
        <li> Extrovertida </li>
        <li> Espontánea </li>
        <li> Impaciente </li>
        <li> Social </li>
        <li> Activa </li>
        <li> Aventurera </li>
    </ul> </td>
</tr>
<tr>
    <td> Plataforma: </td> <td> móvil </td>
</tr>
<tr>
    <td> Experiencia tecnológica: </td> <td> 
        Media
    </td>
</tr>
<tr>
    <td> Motivaciones: </td> 
    <td>
        Busca quedar con amigos para planes divertidos que poder publicar en sus redes sociales. Quiere poder hacer una reserva de manera fácil en un restaurante interesante, sin tener que rebuscar ni malgastar mucho tiempo. 
    </td>
</tr>
</table>

### Escenario de uso: 
1. Jana entra en la web 
2. Consulta la información acerca del local
3. Reserva desde su *móvil*. Como su grupo de amigos es numeroso, decide pagar en persona en vez de a través de la web. 

## 2.2. Enmanuel García-Ruíz

<table border>
<tr><td> Estereotipo </td> <td> persona con alergias </td></tr>
<tr>
    <td> <img src=img_memoria/enmanuel.png> </td> <td> Enmanuel  <br/> <i>“Yo soy yo y mi circunstancia. Si no la salvo a ella no me salvo yo”</i> </td>
</tr>
<tr>
    <td> Edad: </td> <td>  50 </td>
</tr>
<tr>
    <td> Personalidad: </td> 
    <td> <ul>
        <li> Precavido </li>
        <li> Relajado </li>
        <li> Educado </li>
        <li> Paciente </li>
        <li> Agradecido </li>
    </ul> </td>
</tr>
<tr>
    <td> Plataforma: </td> <td> Ordenador y tablet </td>
</tr>
<tr>
    <td> Experiencia tecnológica: </td> <td> 
        Media
    </td>
</tr>
<tr>
    <td> Motivaciones: </td> 
    <td>
        Busca realizar un pedido a domicilio sin tener que complicarse demasiado. Por tanto, espera que la información sobre alérgenos se exponga de manera clara y sencilla, facilitando el proceso de hacer un pedido. 
    </td>
</tr>
</table>

### Escenario de uso: 

1. Ennmanuel consulta la web desde su ordenador portátil.
2. Consulta la localización del establecimiento, asegurándose de que está cerca de su casa. 
3. Usa el menú para navegar hasta la pestaña para hacer un pedido a domicilio
4. Para cada alimento, comprueba los alérgenos a través de la leyenda. 
5. Realiza el pedido mediante la secuencia de pasos, guiado por el sistema. 

## 2.3. José Daniel Expósito

<table border>
<tr><td> Estereotipo </td> <td> persona con alergias </td></tr>
<tr>
    <td> <img src=img_memoria/jose_daniel.png> </td> <td> Enmanuel  <br/> <i>"Jamás hallé compañera más sociable que la soledad, o un gato"</i> </td>
</tr>
<tr>
    <td> Edad: </td> <td>  30 </td>
</tr>
<tr>
    <td> Personalidad: </td> 
    <td> <ul>
        <li> Tímido </li>
        <li> Introvertido </li>
        <li> Inteligente </li>
        <li> trabajador </li>
        <li> Ocupado </li>
    </ul> </td>
</tr>
<tr>
    <td> Plataforma: </td> <td> Ordenador </td>
</tr>
<tr>
    <td> Experiencia tecnológica: </td> <td> 
        Alta
    </td>
</tr>
<tr>
    <td> Motivaciones: </td> 
    <td>
        Busca un sitio donde trabajar donde pueda disfrutar de la compañía de animales cariñosos, sin que esto le impida completar todas sus tareas. Además de disfrutar de algún tentempié mientras realiza su trabajo. 
    </td>
</tr>
</table>

### Escenario de uso: 

1. José entra a la web y consulta la información sobre los gatos y actividades. 
2. Comprueba si en el establecimiento existe un área de trabajo. 
3. Reserva una mesa desde la web para una persona.  

# 3. Análisis de otras webs
De forma complementaria al diseño de personas, se han analizado tres páginas web de otros restaurantes para lograr una mayor especificaicón de funcionalidades para nuestra web. Para cada página web, se han analizado la página principal, la funcionalidad más destacada dentro de la web y otros aspectos funcionales notables. 
## 3.1. Taikit
[Taikit](https://teikit.es/) es una franquicia de restaurantes especializado en sushi con posibilidad de pedir a domicilio. 

### Página principal 

### Pedido a domicilio 

### Otros aspectos funcionales 

## 3.2. CatCafe Mocha 

### Página principal 

### Localizaciones y actividades

### Otros aspectos funcionales

## CatFé Santander

### Página principal 

### Página de reserva 

### Otros aspectos funcionales 

## Conclusiones

# 4. Diseño del prototipo 
## 4.1. Requisitos funcionales 
Teniendo en cuenta tanto los escenarios del [apartado 2](#2-personas-y-escenarios) y el análisis del [apartado 3](#3-análisis-de-otras-webs), se han determinado 11 funcionalidades que deben estar implementadas en nuestra web. Estas se recogen a continuación en la siguiente tabla: 

| ID | Funcionalidad | Descripción | 
| -- | :-----------: | ------------| 
| Fun1 | Reserva de mesa | Permitirá seleccionar el número de comensales, fecha, hora y pagar on-line o en el establecimiento | 
| Fun2 | Menú de productos | Contendrá la descipción, información sobre alérgenos y precio para cada producto | 
| Fun3 | Pedido a domicilio | se podrá realizar un pedido de uno o varios elementos del menú | 
| Fun4 | información del establecimiento | Existirá una página o sección con la historia del local, destino de la facturación e imágenes del establecimiento | 
| Fun5 | Información de los gatos | se incluirá un página o sección donde, para cada gato, se incluya una foto, nombre, género, edad y personalidad | 
| Fun6 | Registro de usuario | para los pedidos adomicilio, debe existir un registro de usuario | 
| Fun7 | Menú de navegación hamburguesa | Abrirá una ventana con enlaces a las demás páginas | 
| Fun8 | Indicador que incite al usuario a hacer scroll en la página | En las páginas con scroll vertical se incluirá un icono que indique al usuario la dirección del mismo | 
| Fun9 | Página de contacto | Debe existir una página con iformación de contacto, preguntas frecuentes y un formulario de contacto | 
| Fun10 | Página con actividades | Debe exsistir una página que describa qué tipo de actividades se pueden llevar a cabo en el establecimiento | 
| Fun11 | Localización del local | Debe existir una página o sección que incluya un mapa con la ubicación del local, así como informació relativa a paradas cercanas de transporte público o similares |


## 4.2. Prototipo 
Hemos desarrollado un prototipo mediante la herramienta Figma que pretende representar con una alta fidelidad visual y funcional nuestra web. En él se puede experimentar cómo un usuario ejecutaría las acciones descritas en el escenario de la sección 2.3. 
[[Enlace a figma]]

[[Foto del prototipo]]

# 5. Diseño final
[[Comparación entre original y final]]

# 6. Informe de accesibilidad

# 7. Descripción de herramientas utilizadas

# 8. Evaluación SUS

# 9. conclusiones 