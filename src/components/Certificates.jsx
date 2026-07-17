import React from 'react';

const certificates = [
  'AZ-900 Microsoft Azure Fundamentals',
  'HaxCrux 2026',
  'Hach-The-Den',
  'Introduction to Artificial Intelligence',
  'Node.js by Unstop',
];

export default function Certificates() {
  return (
    <section id="certificates" className="bg-[#020202] px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.4em] text-blue-500">Credentials</p>
        <h2 className="mb-12 text-4xl font-black uppercase tracking-tighter text-white md:text-6xl">
          Certificates<span className="text-blue-500">.</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <div key={certificate} className="border border-white/10 bg-white/5 p-6 text-sm font-medium uppercase tracking-wider text-gray-200">
              {certificate}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
