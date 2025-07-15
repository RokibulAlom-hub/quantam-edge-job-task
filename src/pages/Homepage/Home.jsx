import React from 'react'

export default function Home() {
  const jobCards = [
    {
      date: "Apr 30, 2024",
      title: "Website Design and Front-End Development",
      price: "$1,200-$1,400",
      description: "In this role, you will be responsible for conducting comprehensive SEO audits and implementing strategies to optimize websites...",
      tags: ["App Design", "Art Generation", "Illustration"],
      author: "Earnman Otto",
      level: "Senior level",
      type: "Freelancer",
      buttonColor: "bg-black hover:bg-gray-800"
    },
    {
      date: "Apr 30, 2024",
      title: "Website Design and Front-End Development",
      price: "$1,200-$1,400",
      description: "In this role, you will be responsible for conducting comprehensive SEO audits and implementing strategies to optimize websites...",
      tags: ["App Design", "Art Generation", "Illustration"],
      author: "Earnman Otto",
      level: "Senior level",
      type: "Freelancer",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      date: "Apr 30, 2024",
      title: "Website Design and Front-End Development",
      price: "$1,200-$1,400",
      description: "In this role, you will be responsible for conducting comprehensive SEO audits and implementing strategies to optimize websites...",
      tags: ["App Design", "Art Generation", "Illustration"],
      author: "Earnman Otto",
      level: "Senior level",
      type: "Freelancer",
      buttonColor: "bg-black hover:bg-gray-800"
    },
    {
      date: "Apr 30, 2024",
      title: "Website Design and Front-End Development",
      price: "$1,200-$1,400",
      description: "In this role, you will be responsible for conducting comprehensive SEO audits and implementing strategies to optimize websites...",
      tags: ["App Design", "Art Generation", "Illustration"],
      author: "Earnman Otto",
      level: "Senior level",
      type: "Freelancer",
      buttonColor: "bg-black hover:bg-gray-800"
    },
    {
      date: "Apr 30, 2024",
      title: "Website Design and Front-End Development",
      price: "$1,200-$1,400",
      description: "In this role, you will be responsible for conducting comprehensive SEO audits and implementing strategies to optimize websites...",
      tags: ["App Design", "Art Generation", "Illustration"],
      author: "Earnman Otto",
      level: "Senior level",
      type: "Freelancer",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      date: "Apr 30, 2024",
      title: "Website Design and Front-End Development",
      price: "$1,200-$1,400",
      description: "In this role, you will be responsible for conducting comprehensive SEO audits and implementing strategies to optimize websites...",
      tags: ["App Design", "Art Generation", "Illustration"],
      author: "Earnman Otto",
      level: "Senior level",
      type: "Freelancer",
      buttonColor: "bg-black hover:bg-gray-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Results Header */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-2xl font-bold text-gray-900">
            5 search result(s) found
          </h1>
        </div>
      </div>

      {/* Job Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobCards.map((job, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              {/* Date */}
              <p className="text-sm text-gray-500 mb-3">{job.date}</p>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                {job.title}
              </h3>
              
              {/* Price */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">Fixed Price Project</span>
                <span className="text-lg font-bold text-gray-900">{job.price}</span>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {job.description}
              </p>
              
              {/* Job Type Badges */}
              <div className="flex items-center space-x-4 mb-4">
                <span className="flex items-center space-x-1 text-sm text-purple-600">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Remote</span>
                </span>
                <span className="flex items-center space-x-1 text-sm text-red-600">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>{job.level}</span>
                </span>
                <span className="flex items-center space-x-1 text-sm text-green-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>{job.type}</span>
                </span>
              </div>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-sm text-gray-500">+5 more</span>
              </div>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{job.author}</span>
                <button className={`${job.buttonColor} text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors`}>
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}