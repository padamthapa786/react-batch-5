import React, { useState } from "react";

const VideoList = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { name: "All Videos", value: "all" },
    { name: "History", value: "history" },
  ];

  return (
    <main className="flex items-center justify-center flex-col mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Video Player App</h1>
      <div className="flex space-x-10 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`py-2 px-4 rounded-lg focus:outline-none ${
              activeTab === tab.value
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="flex space-x-4">
        {activeTab === "all" && <p>All videos will be displayed here.</p>}
        {activeTab === "history" && <p>Your favorite videos will be displayed here.</p>}
      </div>
    </main>
  );
};

export default VideoList;
