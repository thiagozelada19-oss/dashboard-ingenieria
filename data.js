// ═══════════════════════════════════════════════════════════════
// data.js — Datos académicos (plan de estudios + calendario)
// ═══════════════════════════════════════════════════════════════
// Separado de index.html para que actualizar el plan de estudios,
// los créditos o el calendario académico de un año nuevo NO requiera
// tocar el código de la interfaz. Este archivo solo define datos
// (const), sin lógica. Se carga como <script> normal ANTES del
// script principal, así PLAN, CREDITOS, CAL_RANGOS y CAL_DIAS_ESP
// quedan disponibles como variables globales para index.html.
//
// 🔄 Para actualizar el año que viene: cambiá acá abajo las fechas
// de CAL_RANGOS y CAL_DIAS_ESP (y el PLAN si cambia la currícula).
// No hace falta tocar index.html.
// ═══════════════════════════════════════════════════════════════

// ── PLAN DE ESTUDIOS - MECATRÓNICA (Régimen de Correlatividades, Resol. CD N° 406/2023) ──
// Cada materia tiene 3 tipos de correlativas, tal como las define el Anexo I:
//   fuertes  → deben estar APROBADAS para poder cursar esta materia
//   debiles  → deben estar CURSADAS/REGULARIZADAS (o aprobadas) para poder cursar esta materia
//   final    → deben estar APROBADAS para poder rendir el examen final / promocionar esta materia
// semGlobal = número de semestre correlativo dentro de toda la carrera (1 a 11),
// usado para la regla de bloque del Artículo 3° de la resolución.
const PLAN = [
  // ── 1° AÑO ──────────────────────────────────────────
  { anio:1, semestre:1, semGlobal:1, materias:[
    { id:'MCT-101', nombre:'Álgebra',                        fuertes:[], debiles:[], final:[] },
    { id:'MCT-102', nombre:'Análisis Matemático I',          fuertes:[], debiles:[], final:[] },
    { id:'MCT-103', nombre:'Geometría Analítica',            fuertes:[], debiles:[], final:[] },
    { id:'MCT-104', nombre:'Introducción a la Ingeniería',   fuertes:[], debiles:[], final:[] },
  ]},
  { anio:1, semestre:2, semGlobal:2, materias:[
    { id:'MCT-105', nombre:'Análisis Matemático II',                fuertes:[], debiles:['MCT-103','MCT-102'], final:['MCT-102'] },
    { id:'MCT-106', nombre:'Física I',                              fuertes:[], debiles:['MCT-102'], final:[] },
    { id:'MCT-107', nombre:'Inglés I',                              fuertes:[], debiles:[], final:[] },
    { id:'MCT-108', nombre:'Sistemas de Representación Gráfica',    fuertes:[], debiles:['MCT-103'], final:[] },
    { id:'MCT-109', nombre:'Taller Inicial de Mecatrónica',         fuertes:[], debiles:[], final:[] },
  ]},
  // ── 2° AÑO ──────────────────────────────────────────
  { anio:2, semestre:1, semGlobal:3, materias:[
    { id:'MCT-201', nombre:'Física II',                              fuertes:['MCT-102'], debiles:['MCT-106'], final:[] },
    { id:'MCT-202', nombre:'Fundamentos Ambientales en Ingeniería',  fuertes:[], debiles:['MCT-104'], final:[] },
    { id:'MCT-203', nombre:'Métodos Numéricos y Programación',       fuertes:['MCT-102','MCT-103'], debiles:['MCT-105','MCT-106'], final:[] },
    { id:'MCT-204', nombre:'Inglés II',                              fuertes:[], debiles:['MCT-107'], final:['MCT-107'] },
    { id:'MCT-205', nombre:'Química General e Inorgánica',           fuertes:[], debiles:['MCT-102'], final:[] },
  ]},
  { anio:2, semestre:2, semGlobal:4, materias:[
    { id:'MCT-206', nombre:'Electrotecnia y Máquinas Eléctricas',    fuertes:[], debiles:['MCT-105','MCT-201'], final:[] },
    { id:'MCT-207', nombre:'Informática y Programación',             fuertes:['MCT-109'], debiles:['MCT-203'], final:[] },
    { id:'MCT-208', nombre:'Inglés III',                             fuertes:['MCT-107'], debiles:['MCT-204'], final:['MCT-204'] },
    { id:'MCT-209', nombre:'Matemáticas Avanzadas',                  fuertes:[], debiles:['MCT-105','MCT-203','MCT-201'], final:[] },
    { id:'MCT-210', nombre:'Probabilidad y Estadística',             fuertes:['MCT-101','MCT-102'], debiles:['MCT-105'], final:[] },
  ]},
  // ── 3° AÑO ──────────────────────────────────────────
  { anio:3, semestre:1, semGlobal:5, materias:[
    { id:'MCT-301', nombre:'Ciencia y Tecnología de Materiales',     fuertes:['MCT-106','MCT-205'], debiles:['MCT-201'], final:[] },
    { id:'MCT-302', nombre:'Estática y Resistencia de Materiales',   fuertes:['MCT-108','MCT-106'], debiles:['MCT-105'], final:[] },
    { id:'MCT-303', nombre:'Inglés IV',                              fuertes:['MCT-204'], debiles:['MCT-208'], final:['MCT-208'] },
    { id:'MCT-304', nombre:'Sistemas de Automatización',             fuertes:['MCT-201'], debiles:['MCT-206','MCT-209'], final:[] },
    { id:'MCT-305', nombre:'Metrología y Normalización',             fuertes:['MCT-108','MCT-106'], debiles:['MCT-210'], final:[] },
  ]},
  { anio:3, semestre:2, semGlobal:6, materias:[
    { id:'MCT-306', nombre:'Electrónica General y Aplicada',         fuertes:['MCT-201'], debiles:['MCT-206'], final:[] },
    { id:'MCT-307', nombre:'Elementos de Máquinas',                  fuertes:['MCT-108'], debiles:['MCT-301','MCT-302'], final:[] },
    { id:'MCT-308', nombre:'Materiales',                             fuertes:['MCT-203'], debiles:['MCT-301','MCT-302'], final:[] },
    { id:'MCT-309', nombre:'Mecánica de los Fluidos y Máq. Hidráulicas', fuertes:['MCT-105','MCT-106'], debiles:['MCT-201'], final:[] },
    { id:'MCT-310', nombre:'Mecánica Racional',                      fuertes:['MCT-105'], debiles:['MCT-302'], final:[] },
  ]},
  // ── 4° AÑO ──────────────────────────────────────────
  { anio:4, semestre:1, semGlobal:7, materias:[
    { id:'MCT-401', nombre:'Concepción y Fab. Asistida por PC',      fuertes:['MCT-305'], debiles:['MCT-310','MCT-307'], final:[] },
    { id:'MCT-402', nombre:'Economía y Evaluación de Proyecto',      fuertes:['MCT-210'], debiles:[], final:[] },
    { id:'MCT-403', nombre:'Mecánica Estructural',                   fuertes:['MCT-209'], debiles:['MCT-310','MCT-307'], final:[] },
    { id:'MCT-404', nombre:'Microcontroladores y Electrónica de Potencia', fuertes:['MCT-207'], debiles:['MCT-304','MCT-306'], final:['MCT-306'] },
    { id:'MCT-405', nombre:'Tecnología Industrial',                  fuertes:['MCT-305'], debiles:['MCT-307'], final:[] },
  ]},
  { anio:4, semestre:2, semGlobal:8, materias:[
    { id:'MCT-406', nombre:'Automática y Máquinas Eléctricas',       fuertes:['MCT-206','MCT-304'], debiles:['MCT-403'], final:[] },
    { id:'MCT-407', nombre:'Inteligencia Artificial I',              fuertes:['MCT-207','MCT-210','MCT-208'], debiles:[], final:[] },
    { id:'MCT-408', nombre:'Legislación y Ética Profesional',        fuertes:['MCT-104'], debiles:[], final:[] },
    { id:'MCT-409', nombre:'Programación Avanzada',                  fuertes:['MCT-207'], debiles:['MCT-404'], final:[] },
    { id:'MCT-410', nombre:'Robótica I',                             fuertes:['MCT-207','MCT-310'], debiles:['MCT-304','MCT-404','MCT-307'], final:[] },
  ]},
  // ── 5° AÑO ──────────────────────────────────────────
  { anio:5, semestre:1, semGlobal:9, materias:[
    { id:'MCT-501', nombre:'Automatismos Industriales',              fuertes:['MCT-304'], debiles:['MCT-404'], final:[] },
    { id:'MCT-502', nombre:'Control y Sistemas',                     fuertes:['MCT-304','MCT-403'], debiles:['MCT-410','MCT-406'], final:[] },
    { id:'MCT-503', nombre:'Gestión Ambiental en Mecatrónica',       fuertes:['MCT-202'], debiles:[], final:[] },
    { id:'MCT-504', nombre:'Inglés V',                               fuertes:['MCT-208'], debiles:['MCT-303'], final:['MCT-303'] },
    { id:'MCT-505', nombre:'Inteligencia Artificial II',             fuertes:[], debiles:['MCT-409','MCT-407'], final:[] },
  ]},
  { anio:5, semestre:2, semGlobal:10, materias:[
    { id:'MCT-506', nombre:'Autómatas y Control Discreto',           fuertes:['MCT-406'], debiles:['MCT-501','MCT-502'], final:[] },
    { id:'MCT-507', nombre:'Higiene y Seguridad',                    fuertes:['MCT-405'], debiles:[], final:[] },
    { id:'MCT-508', nombre:'Realidad Virtual',                       fuertes:[], debiles:['MCT-404','MCT-401','MCT-409'], final:[] },
    { id:'MCT-509', nombre:'Robótica II',                            fuertes:['MCT-403','MCT-410'], debiles:['MCT-502','MCT-401','MCT-404'], final:[] },
    { id:'MCT-510', nombre:'Sistemas Neumáticos e Hidráulicos',      fuertes:['MCT-310','MCT-307','MCT-309'], debiles:['MCT-501'], final:[] },
  ]},
  // ── 6° AÑO ──────────────────────────────────────────
  { anio:6, semestre:1, semGlobal:11, materias:[
    { id:'MCT-511', nombre:'Práctica Profesional Supervisada',       fuertes:['MCT-405','MCT-409','MCT-407','MCT-410','MCT-406','MCT-408'], debiles:[], final:[] },
    { id:'MCT-512', nombre:'Proyecto Final de Estudios',             fuertes:['MCT-401','MCT-409','MCT-502','MCT-501'], debiles:[], final:['MCT-402','MCT-505','MCT-508','MCT-509','MCT-510','MCT-503','MCT-506'] },
  ]},
];

// ── CRÉDITOS POR MATERIA ──
const CREDITOS = {
  'MCT-101':8, 'MCT-102':10, 'MCT-103':6, 'MCT-104':2,
  'MCT-105':10,'MCT-106':8,  'MCT-107':2, 'MCT-108':4, 'MCT-109':2,
  'MCT-201':8, 'MCT-202':2,  'MCT-203':8, 'MCT-204':2, 'MCT-205':6,
  'MCT-206':8, 'MCT-207':6,  'MCT-208':2, 'MCT-209':8, 'MCT-210':6,
  'MCT-301':4, 'MCT-302':8,  'MCT-303':2, 'MCT-304':8, 'MCT-305':4,
  'MCT-306':8, 'MCT-307':6,  'MCT-308':4, 'MCT-309':8, 'MCT-310':8,
  'MCT-401':4, 'MCT-402':4,  'MCT-403':8, 'MCT-404':8, 'MCT-405':4,
  'MCT-406':8, 'MCT-407':6,  'MCT-408':2, 'MCT-409':6, 'MCT-410':8,
  'MCT-501':6, 'MCT-502':8,  'MCT-503':2, 'MCT-504':2, 'MCT-505':6,
  'MCT-506':6, 'MCT-507':2,  'MCT-508':4, 'MCT-509':8, 'MCT-510':6,
  'MCT-511':6, 'MCT-512':10,
};

const CAL_RANGOS = [
  { t:'clase',  d:'2026-02-05', h:'2026-07-03' },
  { t:'receso', d:'2026-07-06', h:'2026-07-17' },
  { t:'clase',  d:'2026-07-20', h:'2026-12-18' },
  { t:'receso', d:'2026-12-21', h:'2027-02-03' },
  { t:'clase',  d:'2027-02-04', h:'2027-03-31' },
];

const CAL_DIAS_ESP = {
  // Feriados nacionales 2026 (verificado contra Anexo III)
  '2026-01-01':'feriado', // Año Nuevo
  '2026-02-16':'feriado','2026-02-17':'feriado', // Carnaval
  '2026-03-23':'puente',                          // puente previo al 24
  '2026-03-24':'feriado',                         // Día de la Memoria
  '2026-04-02':'feriado','2026-04-03':'feriado',  // Malvinas + Viernes Santo
  '2026-05-01':'feriado','2026-05-25':'feriado',
  '2026-06-15':'feriado','2026-06-20':'feriado',
  '2026-07-09':'feriado',                         // Independencia
  '2026-07-10':'puente',                          // puente posterior
  '2026-08-17':'feriado',                         // San Martín
  '2026-09-17':'feriado-esp',                     // Día del Profesor (Facultad)
  '2026-09-21':'feriado-esp',                     // Día del Estudiante (Facultad)
  '2026-10-12':'feriado',
  '2026-11-23':'feriado',                         // Soberanía Nacional (trasladado del 20 al 23)
  '2026-12-07':'puente',                          // puente previo al 8
  '2026-12-08':'feriado','2026-12-25':'feriado',
  '2027-01-01':'feriado',
  '2027-02-08':'feriado','2027-02-09':'feriado',  // Carnaval 2027
  '2027-03-24':'feriado',
  // Feriado especial de facultad (Del PAA) - sábado
  '2026-03-07':'feriado-esp',
  // Mesas ordinarias - verificado contra Anexo II (llamados finales)
  '2026-06-22':'mesa-o','2026-06-23':'mesa-o','2026-06-24':'mesa-o',
  '2026-06-25':'mesa-o','2026-06-26':'mesa-o', // 1° Llamado
  '2026-06-29':'mesa-o','2026-06-30':'mesa-o','2026-07-01':'mesa-o',
  '2026-07-02':'mesa-o','2026-07-03':'mesa-o', // 2° Llamado
  '2026-07-27':'mesa-o','2026-07-28':'mesa-o','2026-07-29':'mesa-o',
  '2026-07-30':'mesa-o','2026-07-31':'mesa-o', // 3° Llamado
  '2026-11-24':'mesa-o','2026-11-25':'mesa-o','2026-11-26':'mesa-o',
  '2026-11-27':'mesa-o',                       // 4° Llamado
  '2026-11-30':'mesa-o','2026-12-01':'mesa-o','2026-12-02':'mesa-o',
  '2026-12-03':'mesa-o','2026-12-04':'mesa-o', // 5° Llamado
  '2026-12-14':'mesa-o','2026-12-15':'mesa-o','2026-12-16':'mesa-o',
  '2026-12-17':'mesa-o','2026-12-18':'mesa-o', // 6° Llamado
  '2027-02-10':'mesa-o','2027-02-11':'mesa-o','2027-02-12':'mesa-o',
  '2027-02-13':'mesa-o','2027-02-14':'mesa-o','2027-02-15':'mesa-o','2027-02-16':'mesa-o', // 7° Llamado
  '2027-02-22':'mesa-o','2027-02-23':'mesa-o','2027-02-24':'mesa-o',
  '2027-02-25':'mesa-o','2027-02-26':'mesa-o', // 8° Llamado
  // Mesas especiales - verificado contra Anexo II
  '2026-04-06':'mesa-e','2026-04-07':'mesa-e','2026-04-08':'mesa-e',
  '2026-04-09':'mesa-e','2026-04-10':'mesa-e', // 1° Especial Abril
  '2026-05-18':'mesa-e','2026-05-19':'mesa-e','2026-05-20':'mesa-e',
  '2026-05-21':'mesa-e','2026-05-22':'mesa-e', // 2° Especial Mayo
  '2026-08-24':'mesa-e','2026-08-25':'mesa-e','2026-08-26':'mesa-e',
  '2026-08-27':'mesa-e','2026-08-28':'mesa-e', // 3° Especial Agosto
  '2026-10-26':'mesa-e','2026-10-27':'mesa-e','2026-10-28':'mesa-e',
  '2026-10-29':'mesa-e','2026-10-30':'mesa-e', // 4° Especial Octubre
  // Inscripción a exámenes (Llamados Ordinarios) - Anexo II
  '2026-06-17':'inscr','2026-06-18':'inscr','2026-06-19':'inscr', // 1° Llamado
  '2026-06-27':'inscr','2026-06-28':'inscr',                      // 2° Llamado
  '2026-07-19':'inscr','2026-07-20':'inscr','2026-07-21':'inscr', // 3° Llamado
  '2026-11-18':'inscr','2026-11-19':'inscr','2026-11-20':'inscr', // 4° Llamado
  '2026-11-28':'inscr','2026-11-29':'inscr',                      // 5° Llamado
  '2026-12-09':'inscr','2026-12-10':'inscr',                      // 6° Llamado (08/12 ya es feriado)
  '2027-01-31':'inscr','2027-02-01':'inscr','2027-02-02':'inscr', // 7° Llamado
  '2027-02-17':'inscr','2027-02-18':'inscr','2027-02-19':'inscr', // 8° Llamado
  // Inscripción a exámenes (Llamados Especiales) - Anexo II
  '2026-03-29':'inscr','2026-03-30':'inscr','2026-03-31':'inscr', // 1° Especial Abril
  '2026-05-10':'inscr','2026-05-11':'inscr','2026-05-12':'inscr', // 2° Especial Mayo
  '2026-08-18':'inscr','2026-08-19':'inscr','2026-08-20':'inscr', // 3° Especial Agosto
  '2026-10-18':'inscr','2026-10-19':'inscr','2026-10-20':'inscr', // 4° Especial Octubre
};

// ── HISTORIAL DE ACTUALIZACIONES ──
// Cada vez que se agrega una mejora a la app, se suma una entrada NUEVA
// ARRIBA de todo (al principio del array). La app detecta sola cuándo hay
// una entrada más nueva que la última vista en este dispositivo, y muestra
// el modal de novedades una sola vez. No hace falta tocar index.html para
// esto: solo agregar el objeto acá.
//   id      → número entero único y creciente (el siguiente es 6)
//   fecha   → 'AAAA-MM-DD'
//   titulo  → título corto de la actualización
//   cambios → lista de puntos (en texto simple, sin HTML)
const CHANGELOG = [
  {
    id: 5,
    fecha: '2026-09-30',
    titulo: 'Mejoras en la vista de computadora',
    cambios: [
      'En computadora, el menú ahora aparece a un costado en vez de abajo, como en las apps de escritorio.',
      'El contenido se ve más ordenado: ya no se estira de punta a punta en pantallas anchas.',
    ],
  },
  {
    id: 4,
    fecha: '2026-09-30',
    titulo: 'Historial de actualizaciones',
    cambios: [
      'Ahora vas a ver un cartel con las novedades cada vez que actualicemos la app.',
      'Podés volver a verlo cuando quieras desde el botón de Backup (💾).',
    ],
  },
  {
    id: 3,
    fecha: '2026-09-28',
    titulo: 'Inicio de sesión con Google',
    cambios: [
      'Agregamos un botón (☁️) para iniciar sesión con tu cuenta de Google.',
      'Si iniciás sesión, tus materias, tareas, exámenes y correlativas se guardan en la nube y se actualizan solas en todos tus dispositivos.',
      'Si no querés iniciar sesión, la app sigue funcionando igual que siempre, guardando todo solo en este dispositivo.',
    ],
  },
  {
    id: 2,
    fecha: '2026-08-26',
    titulo: 'Plan de estudios más rápido de actualizar',
    cambios: [
      'Hicimos cambios internos para poder actualizar el plan de estudios y el calendario académico más rápido el año que viene.',
    ],
  },
  {
    id: 1,
    fecha: '2026-08-23',
    titulo: 'Mejoras en el guardado de datos',
    cambios: [
      'Mejoramos la forma en que se guardan tus datos en el dispositivo, para reducir el riesgo de perder información.',
    ],
  },
];

