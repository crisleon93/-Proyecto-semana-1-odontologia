<!-- # Proyecto Semanal: Modelado de Entidades - Odontología

## Descripción
Este proyecto corresponde al dominio **Odontología** y tiene como objetivo modelar las entidades principales de un sistema de gestión odontológica usando **TypeScript**.  
Se aplican conceptos de **interfaces, types, type unions, literales y funciones tipadas**, siguiendo las instrucciones del profesor.  
El trabajo busca representar pacientes, tratamientos dentales, citas y su historial odontológico de manera clara, accesible y coherente.

---

## Entidades principales
- **Paciente**: contiene datos básicos y su historial odontológico.
- **TratamientoDental**: describe los procedimientos realizados o programados.
- **Cita**: organiza la agenda de atención con estados definidos.
- **HistorialOdontologico**: guarda antecedentes clínicos y radiografías.

---

## Tipos definidos
- `TipoTratamiento`: `'limpieza' | 'extraccion' | 'ortodoncia' | 'implante'`
- `EstadoCita`: `'pendiente' | 'completada' | 'cancelada'`

Estos tipos limitan los valores permitidos, evitando errores y asegurando consistencia en el sistema.

---

## Funciones implementadas
- **crearPaciente**  
  - **QUÉ**: crea un objeto `Paciente`.  
  - **PARA**: instanciar pacientes con datos iniciales.  
  - **IMPACTO**: asegura consistencia en la creación de registros.

- **listarPacientes**  
  - **QUÉ**: devuelve un arreglo de pacientes.  
  - **PARA**: mostrar y recorrer la información.  
  - **IMPACTO**: facilita la gestión y visualización de datos.

- **filtrarCitasPorEstado**  
  - **QUÉ**: filtra citas según su estado.  
  - **PARA**: obtener solo las citas relevantes.  
  - **IMPACTO**: mejora la organización de la agenda.

---

## Datos de ejemplo
```ts
const paciente1 = crearPaciente(1, 'Juan Pérez', 30);
const paciente2 = crearPaciente(2, 'María Gómez', 25);

const citas: Cita[] = [
  { id: 1, pacienteId: 1, fecha: new Date(), estado: 'pendiente' },
  { id: 2, pacienteId: 2, fecha: new Date(), estado: 'completada' }
];

console.log(listarPacientes([paciente1, paciente2]));
console.log(filtrarCitasPorEstado(citas, 'pendiente'));

// QUÉ: se crean pacientes y citas de prueba.
// PARA: validar las funciones implementadas.
// IMPACTO: comprobar que la lógica funciona sin depender de datos reales

// Impacto del proyecto
// Este modelado permite:
// Organizar datos de pacientes y citas de forma tipada.
// Reducir errores al limitar valores con literales.
// Facilitar la extensión futura del sistema (ej. agregar pagos, recetas, reportes).
