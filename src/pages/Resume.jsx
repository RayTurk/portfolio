import React from 'react';
import { Card } from '../components/ui/card';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className="min-h-screen bg-slate-950 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="glass-button inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-6 text-white/90 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <Card className="glass-card p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-white text-glow">
              My <span className="text-white/90 text-shadow">Resume</span>
            </h1>
            <button className="glass-button px-4 py-2 rounded-lg inline-flex items-center gap-2 text-white/90 hover:text-white">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>

          <iframe
            src="/path-to-your-resume.pdf"
            className="w-full h-[800px] rounded-lg bg-white/5"
            title="Resume Preview"
          />
        </Card>
      </div>
    </div>
  );
};

export default Resume;