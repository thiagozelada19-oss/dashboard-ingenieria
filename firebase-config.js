// ═══════════════════════════════════════════════════════════════
// firebase-config.js — Credenciales de tu proyecto de Firebase
// ═══════════════════════════════════════════════════════════════
// Reemplazá los valores de acá abajo por los que te da la consola
// de Firebase (Configuración del proyecto → tus apps → SDK setup).
//
// 🔓 Esto NO es un secreto: la "config" web de Firebase está pensada
// para ser pública (va incluida en el HTML que le llega a cualquiera
// que abra la app). La seguridad de tus datos NO depende de ocultar
// estos valores, sino de las "Reglas de Firestore" (Firestore Rules),
// que le indican a Firebase que cada usuario solo puede leer/escribir
// SU PROPIO documento. Esas reglas se configuran en la consola de
// Firebase, no acá. Podés subir este archivo a GitHub sin problema.
// ═══════════════════════════════════════════════════════════════

const firebaseConfig = {
  apiKey: "AIzaSyCKBVPaY_7NlDGS3sOST_0gVQouFeHsasY",
  authDomain: "ing-mecatronica.firebaseapp.com",
  projectId: "ing-mecatronica",
  storageBucket: "ing-mecatronica.firebasestorage.app",
  messagingSenderId: "902065598215",
  appId: "1:902065598215:web:9d73f859d6fe8d996b5fa2",
};

firebase.initializeApp(firebaseConfig);
