"use client";

import { useState } from "react";

type Tab = {
  id: string;
  title: string;
  content: string;
  bold: string;
  list: any;
};

type Props = {
  tabs: Tab[];
};

export default function ProjectTabs({ tabs }: Props) {
  const [currentTab, setCurrentTab] = useState<string>(tabs[0]?.id || "");

  if (tabs.length === 0) return null;

  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setCurrentTab(tab.id)}
            aria-label={`Go to ${tab.title} tab`}
            className={`flex rounded-full px-7.5 py-2.5 text-white  duration-300 ease-in-out ${currentTab === tab.id
                ? "bg-primaryho "
                : "bg-primary hover:bg-primaryho"
              }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="mt-5 pl-3">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={tab.id === currentTab ? "block" : "hidden"}
          >
            <h2 className="hidden mb-5 pr-16 text-4xl font-bold text-black dark:text-white">
              {tab.title}
            </h2>
            <p>{tab.content}</p>
            <p className="mt-2"><b>{tab.bold}</b></p>
            <ul className="list-disc mt-3 list-inside space-y-1">
              {tab?.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
