'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAt,
  faCreditCard,
  faSignInAlt,
  faDatabase,
  faMagnifyingGlass,
  faPaintBrush,
  faEllipsis
} from '@fortawesome/free-solid-svg-icons'

type Tab = 'emails' | 'payments' | 'login' | 'database' | 'seo' | 'style' | 'more'

const features = {
  emails: {
    title: 'Emails',
    points: [
      'Send transactional emails',
      'DNS setup to avoid spam folder (DKIM, DMARC, SPF)',
      'Webhook to receive & forward emails',
      'Time saved: 3 hours',
      'Headaches: 0'
    ],
    providers: ['Mailgun', 'Resend']
  },
  payments: { title: 'Payments', points: ['Coming soon...'], providers: [] },
  login: { title: 'Login', points: ['Coming soon...'], providers: [] },
  database: { title: 'Database', points: ['Coming soon...'], providers: [] },
  seo: { title: 'SEO', points: ['Coming soon...'], providers: [] },
  style: { title: 'Style', points: ['Coming soon...'], providers: [] },
  more: { title: 'More', points: ['Coming soon...'], providers: [] }
}

export default function FeatureSection() {
  const [activeTab, setActiveTab] = useState<Tab>('emails')

  const tabs: { id: Tab; icon: any; label: string }[] = [
    { id: 'emails', icon: faAt, label: 'Emails' },
    { id: 'payments', icon: faCreditCard, label: 'Payments' },
    { id: 'login', icon: faSignInAlt, label: 'Login' },
    { id: 'database', icon: faDatabase, label: 'Database' },
    { id: 'seo', icon: faMagnifyingGlass, label: 'SEO' },
    { id: 'style', icon: faPaintBrush, label: 'Style' },
    { id: 'more', icon: faEllipsis, label: 'More' }
  ]

  const current = features[activeTab]

  return (
    <section className="bg-[#38a297] text-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">
          Supercharge your app instantly,
          <br /> launch faster, make $
        </h2>
        <p className="text-white mb-6 max-w-2xl">
          Login users, process payments and send emails at lightspeed. Spend your time building your startup, not integrating APIs. ShipFast provides boilerplate code to launch, FAST.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-start md:justify-between mb-10 space-x-4 max-md:space-x-0 max-md:space-y-4">
          {tabs.map(tab => (
            <div
              key={tab.id}
              className={`flex flex-col items-center cursor-pointer px-4 py-2 rounded ${
                activeTab === tab.id ? 'text-yellow-400' : 'text-white'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <FontAwesomeIcon icon={tab.icon} className="text-2xl mb-1" />
              <span className="text-sm font-medium">{tab.label}</span>
            </div>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          <h3 className="text-xl font-semibold mb-4">{current.title}</h3>
          <ul className="list-disc ml-6 space-y-1 text-sm text-white">
            {current.points.map((point, index) => (
              <li key={index} className={point.includes('saved') || point.includes('Headaches') ? 'text-black' : ''}>
                {point}
              </li>
            ))}
          </ul>

          {current.providers.length > 0 && (
            <div className="mt-6 flex space-x-4 items-center">
              <span>with</span>
              {current.providers.map(provider => (
                <span key={provider} className="font-bold">{provider}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
