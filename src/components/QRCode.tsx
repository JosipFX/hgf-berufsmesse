import React, { ReactNode } from 'react';

interface QRCodeProps {
  title: string;
  url: string;
  icon: ReactNode;
  description: string;
}

export function QRCode({ title, url, icon, description }: QRCodeProps) {
  return (
    <div className="bg-[#FFFFFF] p-6 rounded-xl shadow-md">
      <div className="flex items-start gap-4 mb-4">
        {icon}
        <div>
          <h3 className="text-xl font-bold text-[#333333]">{title}</h3>
          <p className="text-[#555555] mt-1">{description}</p>
        </div>
      </div>
      <img 
        src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`}
        alt={`QR Code für ${title}`}
        className="w-48 h-48 mx-auto mb-4"
      />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#8B4513] hover:text-[#A67C52] font-medium transition-colors"
      >
        {url}
      </a>
    </div>
  );
}