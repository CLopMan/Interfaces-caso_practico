---
title: |
  ![](./img_memoria/Logo_UC3M.png){width=26.0em}  
  Memoria Caso Práctico Interfaces de Usuario
author: |
  | Álvaro Guerrero Espinosa - 100472294
  | Adrian Cortázar - 100475860
  | César López Mantecón - TODO
  | Paula Subías serrano - TODO

lang: es
documentclass: report
geometry: "left=3cm,right=3cm,top=3cm,bottom=3cm"
toc: true
toc-depth: 3

header-includes: |
    ```{=latex}
    \parindent=1.5em
    \parskip=1em
    \usepackage{booktabs}
    \usepackage{multirow}
    \usepackage{calc}
    \graphicspath{ {img_memoria/} }

    ```
---

\clearpage

## 1. Introducción

En este documento se recoge el desarrollo del caso práctico de la asignatura Interfaces de Usuario. El proyecto consiste en el diseño e implementación de una página web de un restaurante que permita consultar información sobre el establecimiento, reserva de mesa y pedidos a domicilio.

A continuación se expone un conjunto de personas y escenarios de uso de una página web de estas características, el análisis de otras webs similares, la especificación de requisitos funcionales y diseño del prototipo de nuestra web, una comparativa entre el prototipo original y la implementación, un análisis de accesibilidad del sitio web, la evaluación de otro proyecto y las conclusiones del proyecto.

\clearpage

## 2. Personas y escenarios {#apartado-2}

Se han definido tres personas, cada una representante de un tipo de público objetivo de nuestro restaurante, para poder determinar la funcionalidad necesaria en nuestra página web.

Para la especificación de las personas se ha diseñado una plantilla en forma de tabla con el siguiente formado:

\hspace{-\parindent}
\makebox[\textwidth][c]{
    \begin{tabular}{p{3cm}p{12cm}}
        \toprule
        Estereotipo & Tipo de público al que representa \\
        \midrule[0.03em]
        FOTO & Nombre \\
             & Cita \\
        \midrule[0.03em]
        Edad & Número de años \\
        \midrule[0.03em]
        Personalidad & Rasgos definitorios de la persona \\
        \midrule[0.03em]
        Plataforma & Ordenador/móvil/tablet \\
        \midrule[0.03em]
        Experiencia tecnológica & \textbf{Alta}: trata con dispositivos a menudo, se desenvuelve bien y está familiarizado con tramitaciones online \\
         & \textbf{Media}: pese a que está habituado al trato en persona, usa adecuadamente su dispositivo. Aunque necesita que las cosas sean intuitivas y guías para los pasos más complejos \\
         & \textbf{Baja}: poca experiencia con las tramitaciones online, necesita que los pasos sean intuitivos y perfectamente guiados con ayudas visuales \\
        \midrule[0.03em]
        Motivaciones & Qué busca en nuestro local \\
        \bottomrule
    \end{tabular}
}

### 2.1. Jana Pérez

\makebox[\textwidth][c]{
    \begin{tabular}{p{3cm}p{12cm}}
        \toprule
        Estereotipo & Joven sociable \\
        \midrule[0.03em]
        \raisebox{-\totalheight+1.5\baselineskip}{\includegraphics{jana.png}} & \shortstack[l]{Jana Pérez\\\textit{``Cada día es una oportunidad para crear algo nuevo y maravilloso''}} \\
        \midrule[0.03em]
        Edad & 21 años \\
        \midrule[0.03em]
        Personalidad & Extrovertida, espontánea, impaciente, social, activa y aventurera \\
        \midrule[0.03em]
        Plataforma & Móvil \\
        \midrule[0.03em]
        Experiencia tecnológica & Media \\
        \midrule[0.03em]
        Motivaciones & Busca quedar con amigos para planes divertidos que poder publicar en sus redes sociales. Quiere poder hacer una reserva de manera fácil en un restaurante interesante, sin tener que rebuscar ni malgastar mucho tiempo \\
        \bottomrule
    \end{tabular}
}

#### Escenario de uso

1. Jana entra en la web
2. Consulta la información acerca del local
3. Reserva desde su *móvil*. Como su grupo de amigos es numeroso, decide pagar en persona en vez de a través de la web.

### 2.2. Emmanuel García-Ruíz

\makebox[\textwidth][c]{
    \begin{tabular}{p{3cm}p{12cm}}
        \toprule
        Estereotipo & Persona con alergias  \\
        \midrule[0.03em]
        \raisebox{-\totalheight+1.5\baselineskip}{\includegraphics{enmanuel.png}} & \shortstack[l]{Emmanuel García-Ruíz\\\textit{``Yo soy yo y mi circunstancia. Si no la salvo a ella no me salvo yo''}} \\
        \midrule[0.03em]
        Edad & 50 años \\
        \midrule[0.03em]
        Personalidad & Precavido, relajado, educado, paciente y agradecido \\
        \midrule[0.03em]
        Plataforma & Ordenador y tablet \\
        \midrule[0.03em]
        Experiencia tecnológica & Media \\
        \midrule[0.03em]
        Motivaciones & Busca realizar un pedido a domicilio sin tener que complicarse demasiado. Por tanto, espera que la información sobre alérgenos se exponga de manera clara y sencilla, facilitando el proceso de hacer un pedido \\
        \bottomrule
    \end{tabular}
}

#### Escenario de uso

1. Emmanuel consulta la web desde su ordenador portátil.
2. Consulta la localización del establecimiento, asegurándose de que está cerca de su casa.
3. Usa el menú para navegar hasta la pestaña para hacer un pedido a domicilio
4. Para cada alimento, comprueba los alérgenos a través de la leyenda.
5. Realiza el pedido mediante la secuencia de pasos, guiado por el sistema.

### 2.3. José Daniel Expósito

\makebox[\textwidth][c]{
    \begin{tabular}{p{3cm}p{12cm}}
        \toprule
        Estereotipo & Persona solitaria  \\
        \midrule[0.03em]
        \raisebox{-\totalheight+1.5\baselineskip}{\includegraphics{jose_daniel}} & \shortstack[l]{José Daniel Expósito\\\textit{``Jamás hallé compañera más sociable que la soledad, o un gato''}}\\
        \midrule[0.03em]
        Edad & 30 años \\
        \midrule[0.03em]
        Personalidad & Tímido, introvertido, inteligente, trabajador y ocupado \\
        \midrule[0.03em]
        Plataforma & Ordenador \\
        \midrule[0.03em]
        Experiencia tecnológica & Alta \\
        \midrule[0.03em]
        Motivaciones &  Busca un sitio donde trabajar donde pueda disfrutar de la compañía de animales cariñosos, sin que esto le impida completar todas sus tareas. Además de disfrutar de algún tentempié mientras realiza su trabajo \\
        \bottomrule
    \end{tabular}
}

#### Escenario de uso

1. José entra a la web y consulta la información sobre los gatos y actividades.
2. Comprueba si en el establecimiento existe un área de trabajo.
3. Reserva una mesa desde la web para una persona.  

\clearpage

## 3. Análisis de otras webs {#apartado-3}

De forma complementaria al diseño de personas, se han analizado tres páginas web de otros restaurantes para lograr una mayor especificación de funcionalidades para nuestra web. Para cada página web, se han analizado la página principal, la funcionalidad más destacada dentro de la web y otros aspectos funcionales notables.

### 3.1. Taikit

[Taikit](https://teikit.es/) es una franquicia de restaurantes especializado en sushi con posibilidad de pedir a domicilio.

#### Página principal

De la página principal destaca el diseño, basado en la simplicidad y con un estilo moderno. La letra es fácilmente legible y contenido accesible a través de un scroll vertical. Además, existe una pequeña animación para indicar la posibilidad de desplazar la ventana hacia abajo.
El contenido está dividido por secciones:

- Un vídeo promocional de la franquicia con un botón para acceder a la página para pedidos on-line.
- Información sobre la marca.
- Best sellers, cada uno enlazado a la carta del restaurante, en el menú de pedidos on-line.
- Enlaces de interés (política de privacidad, redes sociales, contacto...)

La página principal cuenta con información relevante par una persona que entra a la página por primera vez, dándole toda la información necesaria para que pueda conocer la marca y pedir a domicilio fácilmente. No obstante, la presencia de botones distintos con el mismo destino puede resultar confusa.

#### Pedido a domicilio

Esta página engloba la funcionalidad principal de la página web.

El menú es *fácilmente navegable*, permitiendo al usuario seleccionar una categoría y navegar por la misma mediante scroll vertical. Cada plato viene acompañado de un título, foto, descripción, precio e información sobre alérgenos.

La información sobre alérgenos viene especificada por una *leyenda sencilla*, de iconos reconocibles. Una persona puede colocar el ratón sobre el icono para que aparezca un texto con el alérgeno que representa ese icono.

Todo producto seleccionado aparece en un contenedor a la derecha de la pantalla, permitiendo consultar tu pedido en *tiempo real*; así como el precio. Además, este menú te permite aumentar o reducir la cantidad de un producto que hayas seleccionado previamente en la carta.

#### Otros aspectos funcionales

Además de lo antes mencionado, otras funcionalidades destacables de taikit son las siguientes:

- Registro de usuario.
- Página "conócenos" con información sobre la franquicia, políticas de empresa y reseñas de otros clientes.
- Página de contacto.
- Localización de locales.

### Conclusiones 

Taikit destaca sobre todo por su menú a domicilio, caracterizado por la simplicidad y la estética común a toda la página. Su funcionalidad intuitiva, la disposición de elementos y la información que se mantiene accesible al usuario en todo momento hacen de la experiencia de pedir a domicilio algo *sencillo* para todo tipo de personas. 

Taikit destaca sobre todo por su menú a domicilio, caracterizado por la simplicidad y la estética común a toda la página. Su funcionalidad intuitiva, la disposición de elementos y la información que se mantiene accesible al usuario en todo momento hacen de la experiencia de pedir a domicilio algo sencillo para todo tipo de personas.

### 3.2. CatCafe Mocha

[CatCafé](https://catmocha.jp/) mocha es un franquicia de cat-cafés japonesa, caracterizada por su estética minimalista.

#### Página principal

Destaca el diseño *minimalista*, sobrio y elegante; basado en tonos marrones y blancos. De nuevo, aparece un vídeo promocional acompañado de un indicativo para que aquella persona que visite la web entienda que puede hacer scroll. Además, arriba a la izquierda contamos con la posibilidad de *cambiar el idioma* entre inglés, coreano, japonés y chino. También existe un *header* fijo que nos da acceso al menú de navegación (de tipo hamburguesa), la funcionalidad de cambio de idioma y el logo de la marca.

La página principal está dividida en secciones diferenciadas por separadores (cambio de color de fondo o imágenes):

- Información: en esta sección se da información a usuarios sobre qué es un catcafé, qué se puede hacer allí e información para nuevos visitantes. Cada uno de estos textos viene acompañado de un enlace "read more...", que te dirige a otra página donde con la información más detallada.
- Shoplist: se detalla la localización de distintos establecimientos. Cada una de las localizaciones es un enlace a una página donde se habla específicamente de ese local.
- Noticias y redes sociales.
- Enlaces sobre la compañía, empleo y tratamiento de los gatos.
- Contacto.

#### Localizaciones y actividades

En la página "shoplist" se detallan distintos establecimientos con los que cuenta la franquicia. A través de un menú de pestañas podemos seleccionar la ciudad que deseemos para conocer los locales en dicha ciudad, cada uno acompañado de una breve descripción y una leyenda que indica la cercanía a estaciones de transporte público cercanas. Además, cada uno de los establecimientos es clickable, dirigiéndonos a una página dedicada a dicho local.

También existe una página con actividades que desarrollar en la cafetería. Esto sirve de guía informativa tanto para nuevos clientes como para clientes experimentados; ofreciendo distintas fuentes de entretenimiento para cualquier que visite un cat Café de la franquicia. Las actividades se describen de forma breve, siguiendo con el minimalismo que arropa toda la página; y se acompañan de una foto que sirve como ejemplo. Al final de la página podemos encontrar vídeos donde el propio personal del local desarrolla estas actividades para que la persona que visite la página pueda ver el comportamiento de los gatos y la forma de interactuar con ellos.

#### Otros aspectos funcionales

La web cuenta con una página de preguntas frecuentes que actúan en forma de desplegable. Esto sirve para que una persona pueda desplegar sólo aquellas preguntas de las que quiera saber la respuesta, evitando sobrecargarla de información. Además, las preguntas están organizadas por categorías, a las que podemos acceder a través de un menú de pestañas similar al de la página de "shoplist. También existe otra página que actúa a modo de "conócenos", en la que podemos ver diferentes eslóganes que representan a la marca. Esto permite que una persona entienda la idiosincrasia de la empresa de forma fácil, sin necesidad de leer textos muy largos.

Todas las páginas mantienen la cabecera y el pie de página.

### Conclusiones 

El estilo minimalista y elegante se mantiene en toda la web, y los elementos similares en distintas páginas conservan la misma estructura. Esto le da una *coherencia* a la web que facilita su uso, haciéndola más intuitiva y amigable a toda clase de usuarios. 

El estilo minimalista y elegante se mantiene en toda la web, y los elementos similares en distintas páginas conservan la misma estructura. Esto le da un **coherencia** a la web que facilita su uso, haciéndola más intuitiva y amigable a toda clase de usuarios.

A lo largo de toda la web destaca el uso de elementos muy visuales (imágenes, vídeos e iconos) que permiten entender la mayoría de la información aún existiendo la barrera del lenguaje. No obstante, esta barrera se reduce gracias a la posibilidad de cambiar el idioma.

### CatFé Santander

[CatFé Santander](https://catfe.es/) es una cafetería española que actúa además como refugio de animales, especializado en gatos.

#### Página principal

De forma similar a Catfe Mocha, encontramos un gif con un enlace directo a la reserva de una mesa. Si hacemos scroll vemos secciones diferenciadas en las que encontramos una breve explicación, una galería de imágenes que desliza la imagen cada pocos segundos y un enlace a su página dedicada. Destaca la existencia de una tienda de *merchandising*, complementaria a los servicios de hostelería. Se puede navegar entre páginas a través de los enlaces en las secciones o un menú hamburguesa de despliegue vertical. En el pie de página encontramos enlaces de interés para una persona que visite la página (contacto, política de privacidad y política de cookies) y una flecha que te permite volver al inicio de la página.

En cuanto a la estética, destaca un diseño sobrio basado en tonos marrones.

#### Página de reserva

El proceso de reserva tiene su propia página dedicada. Esta se hace mediante un menú que, con una barra de progreso, guía a la persona durante el proceso de reserva. Además, mediante flechas podremos navegar hacia alante y atrás entre pasos que hayamos completado para modificar los campos. Si deseamos ampliar los campos a rellenar podremos colapsar la barra de progreso para dejar más espacio a lo demás. El paso en el que se encuentra el usuario se muestra mediante un círculo azul, mientras que los pasos completados cuentan con un tick verde.

Destaca el uso de un calendario para poder seleccionar la fecha de reserva. Lo que permite al usuario seleccionar la fecha sin confusiones y evitar errores en el campo de entrada.

#### Otros aspectos funcionales

Aunque no tenga que ver directamente con la hostelería, destaca la tienda on-line de la web. Los productos se muestran en forma de matriz, con una foto y un título, además de un botón que permite añadirlo al carrito. También, cada una de las fotos es clickable, llevándote a una página dedicada al producto. También destaca el blog del local, donde podemos ver distintos consejos sobre el cuidado de gatos.

Existe además un contador en la página de "Conócenos", donde se detalla el número de gatos rescatados gracias a CatFé Santander.

#### Conclusiones

La estética hogareña y el tono de la página, además del enfasis en el rescate de gatos y el cuidado de los mismos permiten transmitir una *imagen de cercanía y confianza* hacia la marca. 

El proceso de reserva es muy cómodo gracias a la *barra de proceso y la guía se da durante el proceso*. 

# 4. Diseño del prototipo 
## 4.1. Requisitos funcionales 
Teniendo en cuenta tanto los escenarios de la [sección 2](#2-personas-y-escenarios) y el análisis de la [sección 3](#3-análisis-de-otras-webs), se han determinado 11 funcionalidades que deben estar implementadas en nuestra web. Estas se recogen a continuación en la siguiente tabla: 

## 4. Diseño del prototipo

### 4.1. Requisitos funcionales

Teniendo en cuenta tanto los escenarios del [apartado 2](#apartado-2) y el análisis del [apartado 3](#apartado-3), se han determinado 11 funcionalidades que deben estar implementadas en nuestra web. Estas se recogen a continuación en la siguiente tabla:

\hspace{-\parindent}
\makebox[\textwidth][c]{
    \begin{tabular}{p{0.75cm}p{5.25cm}p{9cm}}
        \toprule
        ID & Funcionalidad & Descripción \\
        \midrule[0.03em]
        Fun1 & Reserva de mesa & Permitirá seleccionar el número de comensales, fecha, hora y pagar on-line o en el establecimiento \\
        \midrule[0.03em]
        Fun2 & Menú de productos & Contendrá la descripción, información sobre alérgenos y precio para cada producto \\
        \midrule[0.03em]
        Fun3 & Pedido a domicilio & se podrá realizar un pedido de uno o varios elementos del menú \\
        \midrule[0.03em]
        Fun4 & información del establecimiento & Existirá una página o sección con la historia del local, destino de la facturación e imágenes del establecimiento \\
        \midrule[0.03em]
        Fun5 & Información de los gatos & se incluirá un página o sección donde, para cada gato, se incluya una foto, nombre, género, edad y personalidad \\
        \midrule[0.03em]
        Fun6 & Registro de usuario & para los pedidos a domicilio, debe existir un registro de usuario \\
        \midrule[0.03em]
        Fun7 & Menú de navegación hamburguesa & Abrirá una ventana con enlaces a las demás páginas \\
        \midrule[0.03em]
        Fun8 & Página de contacto & Debe existir una página con información de contacto, preguntas frecuentes y un formulario de contacto \\
        \midrule[0.03em]
        Fun9 & Página con actividades & Debe existir una página que describa qué tipo de actividades se pueden llevar a cabo en el establecimiento \\
        \midrule[0.03em]
        Fun10 & Localización del local & Debe existir una página o sección que incluya un mapa con la ubicación del local, así como información relativa a paradas cercanas de transporte público o similares \\
        \bottomrule
    \end{tabular}
}

### 4.2. Prototipo

Hemos desarrollado un prototipo mediante la herramienta Figma que pretende representar con una alta fidelidad visual y funcional nuestra web. En él se puede experimentar cómo un usuario ejecutaría las acciones descritas en el escenario de la sección 2.3.

## 4.2. Prototipo 

Hemos desarrollado un prototipo mediante la herramienta Figma que pretende representar con una alta fidelidad visual y funcional nuestra web. En él se puede experimentar cómo una persona ejecutaría las acciones descritas en el escenario de la [sección 2.3](#23-josé-daniel-expósito). 
[[Enlace a figma]]

[[Foto del prototipo]]

\clearpage

## 5. Diseño final

[[Comparación entre original y final]]

\clearpage

## 6. Informe de accesibilidad

\clearpage

## 7. Descripción de herramientas utilizadas

\clearpage

## 8. Evaluación SUS

\clearpage

## 9. Conclusiones
