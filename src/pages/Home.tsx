import React from 'react';
import { Header } from '../components/Header';
import { JobCard } from '../components/JobCard';
import { Footer } from '../components/Footer';
import { jobs } from '../data/jobs';

export function Home() {
  return (
    <div className="min-h-screen bg-[#E3E0D6]">
      <Header />
      <main className="max-w-[1920px] mx-auto px-6 py-12">
        <div className="grid grid-cols-[1fr_360px] gap-12">
          <div className="grid grid-cols-2 gap-10 content-start">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                image={job.image}
                cardDescription={job.cardDescription}
              />
            ))}
          </div>
          <div className="space-y-8 sticky top-[120px]">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}