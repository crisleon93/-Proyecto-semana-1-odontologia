console.log('🏛️ PROYECTO SEMANAL: MODELADO DE ENTIDADES\n');

// ============================================
// 1. Entidades principales del dominio Odontología
// ============================================

// QUÉ: Interface para representar a un paciente
// PARA: Modelar la información básica de cada paciente
// IMPACTO: Facilita la gestión de datos y relaciones con tratamientos y citas
interface Paciente {
  id: number;
  nombre: string;
  edad: number;
  historial: HistorialOdontologico;
}

// QUÉ: Interface para representar un tratamiento dental
// PARA: Registrar procedimientos realizados o programados
// IMPACTO: Permite vincular tratamientos con pacientes y citas
interface TratamientoDental {
  id: number;
  tipo: TipoTratamiento;
  descripcion: string;
  costo: number;
}

// QUÉ: Interface para representar una cita odontológica
// PARA: Organizar la agenda de atención
// IMPACTO: Controlar horarios y estados de cada cita
interface Cita {
  id: number;
  pacienteId: number;
  fecha: Date;
  estado: EstadoCita;
}

// QUÉ: Interface para historial odontológico
// PARA: Guardar antecedentes clínicos y radiografías
// IMPACTO: Proporciona contexto para diagnósticos y tratamientos
interface HistorialOdontologico {
  rayosX: string[];
  notas: string;
}

// ============================================
// 2. Type unions y literales
// ============================================

// QUÉ: Tipos de tratamiento dental
// PARA: Limitar valores permitidos
// IMPACTO: Evita inconsistencias en la clasificación
type TipoTratamiento = 'limpieza' | 'extraccion' | 'ortodoncia' | 'implante';

// QUÉ: Estados de una cita
// PARA: Controlar el flujo de atención
// IMPACTO: Permite filtrar y organizar la agenda
type EstadoCita = 'pendiente' | 'completada' | 'cancelada';

// ============================================
// 3. Funciones tipadas
// ============================================

// QUÉ: Función para crear un paciente
// PARA: Instanciar un objeto Paciente con datos iniciales
// IMPACTO: Permite centralizar la creación y asegurar consistencia
function crearPaciente(id: number, nombre: string, edad: number): Paciente {
  return {
    id,
    nombre,
    edad,
    historial: { rayosX: [], notas: '' }
  };
}

// QUÉ: Función para listar pacientes
// PARA: Devolver un arreglo de pacientes
// IMPACTO: Facilita mostrar y recorrer la información en la aplicación
function listarPacientes(pacientes: Paciente[]): Paciente[] {
  return pacientes;
}

// QUÉ: Función para filtrar citas por estado
// PARA: Obtener solo las citas con un estado específico
// IMPACTO: Mejora la gestión de agenda y seguimiento de pacientes
function filtrarCitasPorEstado(citas: Cita[], estado: EstadoCita): Cita[] {
  return citas.filter(c => c.estado === estado);
}

// ============================================
// 4. Datos de ejemplo
// ============================================

// QUÉ: Creación de pacientes de prueba
// PARA: Simular datos iniciales en el sistema
// IMPACTO: Permite validar funciones sin depender de una base real
const paciente1 = crearPaciente(1, 'Juan Pérez', 30);
const paciente2 = crearPaciente(2, 'María Gómez', 25);

// QUÉ: Definición de citas de ejemplo
// PARA: Probar el filtrado y listado de citas
// IMPACTO: Facilita comprobar la lógica de estados y relaciones
const citas: Cita[] = [
  { id: 1, pacienteId: 1, fecha: new Date(), estado: 'pendiente' },
  { id: 2, pacienteId: 2, fecha: new Date(), estado: 'completada' }
];

// QUÉ: Pruebas con console.log
// PARA: Mostrar resultados de las funciones implementadas
// IMPACTO: Verificar que la salida sea coherente y cumpla con lo esperado
console.log(listarPacientes([paciente1, paciente2]));
console.log(filtrarCitasPorEstado(citas, 'pendiente'));


