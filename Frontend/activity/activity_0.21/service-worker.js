const CACHE_NAME = 'diario-de-bordo-v' + new Date().getTime(); // versão dinâmica com timestamp
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

// Instalação e cache dos arquivos
self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Ativação e limpeza de caches antigos
self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Intercepta requisições e responde com cache atualizado
self.addEventListener('fetch', (evt) => {
  // Ignora requisições que não sejam http(s) para evitar erros com chrome-extension:// etc
  if (!evt.request.url.startsWith('http')) {
    return;
  }

  evt.respondWith(
    caches.match(evt.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Retorna do cache e atualiza em background
        evt.waitUntil(
          fetch(evt.request).then(networkResponse => {
            return caches.open(CACHE_NAME).then(cache => {
              cache.put(evt.request, networkResponse.clone());
            });
          }).catch(() => {
            // Falha no fetch, mantém cache antigo
          })
        );
        return cachedResponse;
      }
      // Se não estiver no cache, busca da rede, adiciona ao cache e retorna
      return fetch(evt.request).then(networkResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(evt.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});
