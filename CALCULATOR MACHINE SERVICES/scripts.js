// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC1gUM_kX2SQ8T0hXmSmFYlnCD8fWSIRY0",
    authDomain: "mantenimiento-inyect.firebaseapp.com",
    projectId: "mantenimiento-inyect",
    storageBucket: "mantenimiento-inyect.appspot.com",
    messagingSenderId: "570310490672",
    appId: "1:570310490672:web:afd9d6a6791eb5d4c28bf5"
  };
  
  // Inicializar Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // Variables iniciales (simulación local)
  let machineData = {
      1: { hours: [0, 0, 0, 0], cycles: 0, daysRemaining: 0 },
      2: { hours: [0, 0, 0, 0], cycles: 0, daysRemaining: 0 }
  };
  
  // Función para actualizar los datos de la máquina seleccionada
  function updateMachineData() {
      const machineId = document.getElementById('machine').value;
      const data = machineData[machineId];
  
      document.getElementById('input-hours1').value = data.hours[0];
      document.getElementById('input-cycles').value = data.cycles;
      document.getElementById('input-days1').value = data.daysRemaining;
  
      document.getElementById('input-hours2').value = data.hours[1];
      document.getElementById('input-hours3').value = data.hours[2];
      document.getElementById('input-hours4').value = data.hours[3];
  }
  
  // Función para guardar los datos en Firestore
  function saveData() {
      const machineId = document.getElementById('machine').value;
  
      // Recoger los datos introducidos por el usuario
      const hours1 = parseInt(document.getElementById('input-hours1').value);
      const cycles = parseInt(document.getElementById('input-cycles').value);
      const days1 = parseInt(document.getElementById('input-days1').value);
      const hours2 = parseInt(document.getElementById('input-hours2').value);
      const hours3 = parseInt(document.getElementById('input-hours3').value);
      const hours4 = parseInt(document.getElementById('input-hours4').value);
  
      // Actualizar los datos en la variable local
      machineData[machineId] = {
          hours: [hours1, hours2, hours3, hours4],
          cycles: cycles,
          daysRemaining: days1
      };
  
      // Guardar los datos en Firestore
      db.collection('maquinas').doc(machineId).set({
          hours: [hours1, hours2, hours3, hours4],
          cycles: cycles,
          daysRemaining: days1
      })
      .then(() => {
          alert('Datos guardados correctamente en Firestore');
      })
      .catch((error) => {
          console.error('Error al guardar los datos: ', error);
      });
  }
  
  // Inicializar la página con la máquina seleccionada por defecto
  window.onload = function() {
      updateMachineData();
  };
