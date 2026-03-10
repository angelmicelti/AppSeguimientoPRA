// Nombre de la caché - CAMBIA ESTE NÚMERO CADA VEZ QUE ACTUALICES
const CACHE_NAME = 'gestor-pra-v4.0.0';  // <-- Cambia el número de versión
const APP_VERSION = '4.0.0';

// Archivos a cachear
const ARCHIVOS_CACHE = [
  './index.html',
  // Si tienes otros archivos locales (CSS, JS, imágenes) añádelos aquí
  // Recursos de CDN (los mismos que usa tu app)
  'https://unpkg.com/tailwindcss-cdn@3.4.10/tailwindcss.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdn.sheetjs.com/xlsx-0.20.0/package/dist/xlsx.full.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.29/jspdf.plugin.autotable.min.js'
];