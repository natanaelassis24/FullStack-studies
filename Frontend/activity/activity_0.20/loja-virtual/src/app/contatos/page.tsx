"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

export default function ContatosPage() {
  // Localização da loja - exemplo: São Paulo
  const position: LatLngExpression = [-23.55052, -46.633308];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Contato & Localização</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Sobre a Loja</h2>
        <p>
          Bem-vindo à nossa loja virtual! Aqui você encontra os melhores produtos, com qualidade e atendimento de primeira.
          Estamos localizados no coração da cidade, prontos para atender você.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Nossa Localização</h2>

        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Nossa loja está aqui! Venha nos visitar.
            </Popup>
          </Marker>
        </MapContainer>
      </section>
    </div>
  );
}
