Calcular el kilometraje de una máquina de inyección de plástico y gestionar su mantenimiento:

- Entradas: ¿Cómo introducirá el usuario los datos? Ejemplo: número de horas de operación, fecha de última revisión, etc.

- Cálculos: ¿Qué tipo de cálculos necesitamos realizar? Ejemplo: kilómetros totales, kilómetros semanales, mensuales, etc.

- Mantenimiento: ¿Qué intervalos de mantenimiento quieres incluir? Ejemplo: semanal, mensual, trimestral.

- Interfaz: ¿Cómo te gustaría que fuera el diseño? ¿Algo simple y funcional o con gráficos y reportes?

- Notificaciones: ¿Necesitas alertas o recordatorios para el mantenimiento?

Intervalo Mantenimiento 1
Este mantenimiento debe efectuarse a mas tardar después de 1440 horas de trabajo, 500,000 ciclos o después de un determinado número de kilometros recorridos de una unidad funcional (unidad cierre, expulsor, husillo, boquilla)
La pantalla muestra el valor porcentual del estado actual y los dias que restan hasta el próximo mantenimiento (contador dias).


Intervalo Mantenimiento 2
Este intervalo cuenta las horas de trabajo que transcurre la maquina solamente con el motor encendido. Cuando llega a una cantidad de horas de trabajo de 1950 la maquina presenta una alarma previniendo a el usuario la realizacion del mantenimiento correspondiente, antes de acompletar las 2160 horas marcadas por el intervalo. 

Intervalo Mantenimiento 3
Este intervalo cuenta las horas de trabajo que transcurre la maquina solamente con el motor encendido. 
   Cuando llega a una cantidad de horas de trabajo de 4100 la maquina presenta una alarma previniendo a el usuario la realizacion del mantenimiento correspondiente, antes de acompletar las 4320 horas marcadas por el intervalo. 
	La comprobación del centrado de boquilla debe realizarse con el intérvalo de mantenimiento 3, después del nivelado de la máquina o después del cambio del cilindro plastificador.

Intervalo Mantenimiento 4
Este intervalo cuenta las horas de trabajo que transcurre la maquina solamente con el motor encendido. 
Cuando llega a una cantidad de horas de trabajo de 8760 o acompletando un año de trabajo marcadas por el intervalo. 
---------------------------------------------------------------------------------------------------------------------------
Cada maquina tiene su calculo para asignar que intervalo de mantenimiento le corresponde tomando en cuenta los puntos anteriores 

cycles
hoursWorked
kilometers
timestamp

SUPA BASE
postgresql://postgres.kxpqbdoqhzhxfhojfefp:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres

con SUPA BASE fue mas facil ya que  manejar los datos y sin una configuracion tan complicada logre sacar el trabajo
https://supabase.com/dashboard/project/kxpqbdoqhzhxfhojfefp/editor/29158?schema=public

Quiero anadir a mi check list dependiendo  de las necesidad de cada intervalo aqui te muestro los pasos de cada uno de los intervalos.
INTERVALO 1
- Comprobación visual: Comprobar la hermeticidad y daños en los medios. Comprobar si están dañados los cables y conexiones.
- Limpieza: Realización de limpieza a maquina, removiendo el exceso de polvo, grasa y aceite afectados por el medio ambiente y tiempo de uso.
- Equipo de seguridad: Revisión del estado de equipo de seguridad (paros de emergencias, sensores, tapas, etc.)
- Lubricación central automática: Comprobación visual de nivel de aceite de lubricación. 
- Control visual de residuos: Chequeo de depósitos recolectores de aceite de fuga, si es necesario vaciar el aceite.
- Rotula: Lubricar la rótula del cilindro de bloqueo.
- Carro guía: Lubricar carro guía.
- Carro guía (Unidad de plastificación): Lubricar carro guía sección de unidad de plastificación.
- Cilindro plastificador. Lubricación del apoyo de cilindro plastificador.

INTERVALO 2
- Filtros de aire: Realizar el mantenimiento de los filtros de aire en los armarios de conexión.
- Muestreo de aceite: Extraiga una muestra de aceite y analice la prueba a través de un suministrador de aceite.
- Líneas hidráulicas: Comprobación de condiciones de las líneas hidráulicas, que estén en condiciones seguras de trabajo.
- Líneas de agua de enfriamiento: Revisar las condiciones de las líneas de agua de enfriamiento que estén en condiciones optimas de trabajo.

INTERVALO 3
- Calibración de boquilla: Comprobación de centrado de boquilla.
- Verificación de presión: Comprobar acumulador de presión.

INTERVALO 4
- Verificación de sensores: Comprobar la exactitud de los sensores y maquina.
- Nivelado de maquina: Comprobar el nivelado de maquina.
- Cilindro de cerrado: Lubricación de cilindro de cerrado rápido.
- Lubricación: Lubricación de dispositivo de extracción.
- Aceite de unidad de inyección: Cambie el aceite de la unidad plastificadora.
- Filtro: Cambiar el elemento del filtro.
- Aceite hidráulico: Cambiar aceite hidráulico (primero se tiene que verificar con proveedor el estado del aceite y reemplazar el filtro de aceite si es necesario).
- Intercambiador de calor: Limpieza de intercambiador de calor de aceite.
- Circuito de enfriamiento:Limpieza de filtros de agua de enfriamiento y circuito de enfriamiento.
