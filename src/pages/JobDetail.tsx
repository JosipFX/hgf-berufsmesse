import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Briefcase, GraduationCap, ListChecks, ScrollText, UserCheck, Info, MapPin } from 'lucide-react';
import { jobs } from '../data/jobs';
import { QRCode } from '../components/QRCode';
import { SalaryGraph } from '../components/SalaryGraph';

export function JobDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobs.find(j => j.id === id);

  if (!job) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#E3E0D6]">
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-20 bg-[#FFFFFF]/90 backdrop-blur-sm p-4 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
      >
        <ArrowLeft className="w-8 h-8 text-[#333333]" />
      </button>

      <div className="h-[40vh] relative">
        <img
          src={job.image}
          alt={job.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h1 className="absolute bottom-8 left-8 right-8 text-4xl font-bold text-white">
          {job.title}
        </h1>
      </div>

      <main className="max-w-[1920px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Section 1: Job Description */}
          <section className="bg-[#FFFFFF] rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-[#8B4513]" />
              <h2 className="text-2xl font-bold text-[#333333]">Berufsbeschreibung</h2>
            </div>
            <p className="text-lg leading-relaxed text-[#555555]">
              {job.description}
            </p>
          </section>

          {/* Section 2: Profile */}
          <section className="bg-[#FFFFFF] rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <UserCheck className="w-8 h-8 text-[#A67C52]" />
              <h2 className="text-2xl font-bold text-[#333333]">Dein Profil</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg font-semibold text-[#333333] mb-4">
                  Wenn du durchstarten möchtest und zu folgendem «Ja» sagst …
                </p>
                <ul className="space-y-3">
                  {job.profile.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-[#555555]">
                      <div className="w-2 h-2 bg-[#A67C52] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-semibold text-[#333333] mt-6">
                  … dann ist diese Ausbildung genau das Richtige für dich!
                </p>
              </div>
              <div>
                <img
                  src={job.profileImage}
                  alt={`${job.title} in Aktion`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Section 3: Requirements */}
          <section className="bg-[#FFFFFF] rounded-2xl shadow-lg p-8 col-span-full">
            <div className="flex items-center gap-3 mb-8">
              <ListChecks className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-2xl font-bold text-[#333333]">Das musst du wissen</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-6 h-6 text-[#8B4513]" />
                  <h3 className="text-xl font-semibold text-[#333333]">Voraussetzungen</h3>
                </div>
                <div className="bg-[#F5F5F5] rounded-xl p-4">
                  <p className="text-[#555555]">{job.requirements}</p>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <ScrollText className="w-6 h-6 text-[#A67C52]" />
                  <h3 className="text-xl font-semibold text-[#333333]">Dauer & Abschluss</h3>
                </div>
                <div className="bg-[#F5F5F5] rounded-xl p-4 space-y-2">
                  <p className="text-[#555555]">• {job.duration.years}</p>
                  <p className="text-[#555555]">• {job.duration.degree}</p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-6 h-6 text-[#D4AF37]" />
                  <h3 className="text-xl font-semibold text-[#333333]">Ausbildung & Schule</h3>
                </div>
                <div className="bg-[#F5F5F5] rounded-xl p-4">
                  <p className="font-semibold mb-2">{job.education.type}</p>
                  <ul className="space-y-2 text-[#555555]">
                    {job.education.details.map((detail, index) => (
                      <li key={index}>• {detail}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-6 h-6 text-[#8B4513]" />
                  <h3 className="text-xl font-semibold text-[#333333]">Lohn</h3>
                </div>
                <div className="bg-[#F5F5F5] rounded-xl p-4">
                  <p className="text-[#555555] mb-4">
                    Die Mindestlöhne für Lernende im Schweizer Gastgewerbe:
                  </p>
                  <SalaryGraph salaries={job.salaries} />
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: QR Codes */}
          <section className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </section>
        </div>
      </main>
    </div>
  );
}