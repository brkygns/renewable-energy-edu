'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ResourceLink {
  title: string;
  url: string;
}

interface CaseStudy {
  title: string;
  description: string;
  imageUrl: string;
}

interface EnergyPageProps {
  title: string;
  heroImage: string;
  definition: string;
  mechanismTitle: string;
  mechanismContent: string;
  mechanismImage?: string;
  advantages: string[];
  disadvantages: string[];
  applications: string;
  environmentalImpact: string;
  caseStudies: CaseStudy[];
  resourceLinks: ResourceLink[];
}

export default function EnergyPage({
  title,
  heroImage,
  definition,
  mechanismTitle,
  mechanismContent,
  mechanismImage,
  advantages,
  disadvantages,
  applications,
  environmentalImpact,
  caseStudies,
  resourceLinks,
}: EnergyPageProps) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-black">
        <div className="absolute inset-0 overflow-hidden">
          {heroImage && (
            <Image
              src={heroImage}
              alt={`${title} görseli`}
              fill
              className="object-cover"
              style={{ zIndex: 1 }}
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 bg-black bg-opacity-50" style={{ zIndex: 2 }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white" style={{ zIndex: 3 }}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {title}
          </h1>
        </div>
      </section>

      {/* Content Navigation */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex overflow-x-auto py-4 space-x-8">
            <button
              className={`px-3 py-2 font-medium text-sm rounded-md ${
                activeTab === 'overview' ? 'bg-green-100 text-green-800' : 'text-gray-800 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Genel Bakış
            </button>
            <button
              className={`px-3 py-2 font-medium text-sm rounded-md ${
                activeTab === 'mechanism' ? 'bg-green-100 text-green-800' : 'text-gray-800 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('mechanism')}
            >
              Çalışma Mekanizması
            </button>
            <button
              className={`px-3 py-2 font-medium text-sm rounded-md ${
                activeTab === 'advantages' ? 'bg-green-100 text-green-800' : 'text-gray-800 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('advantages')}
            >
              Avantajlar ve Dezavantajlar
            </button>
            <button
              className={`px-3 py-2 font-medium text-sm rounded-md ${
                activeTab === 'applications' ? 'bg-green-100 text-green-800' : 'text-gray-800 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('applications')}
            >
              Uygulamalar
            </button>
            <button
              className={`px-3 py-2 font-medium text-sm rounded-md ${
                activeTab === 'environmental' ? 'bg-green-100 text-green-800' : 'text-gray-800 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('environmental')}
            >
              Çevresel Etki
            </button>
            <button
              className={`px-3 py-2 font-medium text-sm rounded-md ${
                activeTab === 'cases' ? 'bg-green-100 text-green-800' : 'text-gray-800 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('cases')}
            >
              Vaka Çalışmaları
            </button>
            <button
              className={`px-3 py-2 font-medium text-sm rounded-md ${
                activeTab === 'resources' ? 'bg-green-100 text-green-800' : 'text-gray-800 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('resources')}
            >
              Kaynaklar
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Genel Bakış</h2>
            <div className="prose max-w-none">
              <p className="text-gray-900 leading-relaxed">{definition}</p>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Avantajlar</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-900">
                  {advantages.map((advantage, index) => (
                    <li key={index}>{advantage}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Dezavantajlar</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-900">
                  {disadvantages.map((disadvantage, index) => (
                    <li key={index}>{disadvantage}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Mechanism Tab */}
        {activeTab === 'mechanism' && (
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{mechanismTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="prose max-w-none">
                <p className="text-gray-900 leading-relaxed">{mechanismContent}</p>
              </div>
              {mechanismImage && (
                <div className="relative h-64 md:h-80">
                  <Image
                    src={mechanismImage}
                    alt={`${title} mekanizması görseli`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 700px"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Advantages and Disadvantages Tab */}
        {activeTab === 'advantages' && (
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Avantajlar ve Dezavantajlar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-800">Avantajlar</h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-900">
                  {advantages.map((advantage, index) => (
                    <li key={index}>{advantage}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-red-800">Dezavantajlar</h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-900">
                  {disadvantages.map((disadvantage, index) => (
                    <li key={index}>{disadvantage}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === 'applications' && (
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Güncel Uygulamalar ve Gelecek Potansiyeli</h2>
            <div className="prose max-w-none">
              <p className="text-gray-900 leading-relaxed">{applications}</p>
            </div>
          </div>
        )}

        {/* Environmental Impact Tab */}
        {activeTab === 'environmental' && (
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Çevresel Etki</h2>
            <div className="prose max-w-none">
              <p className="text-gray-900 leading-relaxed">{environmentalImpact}</p>
            </div>
          </div>
        )}

        {/* Case Studies Tab */}
        {activeTab === 'cases' && (
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Vaka Çalışmaları</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48">
                    <Image
                      src={study.imageUrl}
                      alt={study.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <h3 className="text-white text-center font-semibold p-4">{study.title}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{study.title}</h3>
                    <p className="text-gray-900 text-sm">{study.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Ek Kaynaklar</h2>
            <div className="space-y-4">
              {resourceLinks.map((link, index) => (
                <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 mr-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                      />
                    </svg>
                    {link.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Interactive Elements */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-green-700 text-white p-6 md:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Bilgilerinizi Test Edin</h2>
          <p className="mb-6">Bu konuda öğrendiklerinizi pekiştirmek için testlerimizi çözün.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/testler" 
              className="bg-white text-green-700 hover:bg-gray-100 font-bold py-2 px-6 rounded-md text-center transition-colors"
            >
              Testlere Git
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 