var mapa = L.map('mapa').setView([-22.86666082657713, -43.25379811246451], 12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(mapa);

  L.marker([-22.86666082657713, -43.25379811246451]).addTo(mapa)
    .bindPopup('Marcador de Exemplo')
    .openPopup();
