import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface JobCardProps {
  id: string;
  title: string;
  image: string;
  cardDescription: string;
}

export function JobCard({ id, title, image, cardDescription }: JobCardProps) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/job/${id}`)}
      className="interactive bg-[#FFFFFF] rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] cursor-pointer flex h-[300px] max-w-[700px]"
    >
      <div className="w-[280px] relative overflow-hidden shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-[300px] object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-1 p-8 flex flex-col">
        <h2 className="text-2xl font-bold text-[#333333] mb-3">{title}</h2>
        <p className="text-[#555555] leading-relaxed flex-grow text-lg">
          {cardDescription}
        </p>
        <button 
          className="interactive inline-flex items-center gap-2 text-[#8B4513] font-semibold hover:text-[#A67C52] transition-colors mt-4"
        >
          Mehr erfahren
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}