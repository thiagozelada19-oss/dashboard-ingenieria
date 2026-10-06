// ═══════════════════════════════════════════════════════════════
// storage-config.js — Nombre de la base de datos local (IndexedDB)
// ═══════════════════════════════════════════════════════════════
// Este archivo debe ser DISTINTO en cada sitio (app real vs. app de
// pruebas), igual que firebase-config.js y manifest.json.
//
// Por qué: GitHub Pages de usuario (tuusuario.github.io/repo-a y
// tuusuario.github.io/repo-b) comparten el mismo dominio, y el
// almacenamiento local del navegador se separa por DOMINIO, no por
// carpeta — así que si los dos sitios usan el mismo nombre acá, los
// datos locales (materias, tareas, Pomodoro, etc.) quedan MEZCLADOS
// entre la app real y la de pruebas, aunque sean "sitios distintos".
// Dándole a cada uno un nombre distinto, quedan completamente separados.
//
// 🔴 EN LA APP REAL: dejar estos valores tal cual están.
// 🟡 EN LA APP DE PRUEBAS: cambiarlos (ver el archivo que te generé
//    aparte para el sitio de pruebas, ya viene con otro nombre).
const LOCALFORAGE_DB_NAME = 'IngMCT';
const LOCALFORAGE_STORE_NAME = 'ing1_datos';
