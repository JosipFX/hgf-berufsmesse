import React from 'react';
import { QRCode } from './QRCode';
import { Info, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <div className="space-y-8">
      <QRCode 
        title="Weitere Berufsinfos"
        url="https://berufehotelgastro.ch/berufe/"
        icon={<Info className="w-8 h-8 text-[#8B4513]" />}
        description="Scanne den Code für detaillierte Informationen zu allen Berufen"
      />
      <QRCode 
        title="Schnuppern & Lehrstellen"
        url="https://berufsberatung.ch"
        icon={<MapPin className="w-8 h-8 text-[#A67C52]" />}
        description="Finde Schnupperlehren und offene Lehrstellen in deiner Nähe"
      />
    </div>
  );
}