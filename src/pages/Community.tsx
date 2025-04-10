import React from 'react';
import { Users, MessageSquare, ThumbsUp, PlusSquare } from 'lucide-react';
import type { CommunityPost } from '../types'; // Import the type

// Sample Community Posts
const communityPosts: CommunityPost[] = [
  {
    id: 'post1', author: 'Farmer John', timestamp: '2 hours ago',
    title: 'Best cover crop for heavy clay soil before corn?',
    content: 'Looking for recommendations on what cover crop works well to break up heavy clay over winter before planting corn next spring. Tried tillage radish last year with mixed results.',
    replies: 5
  },
  {
    id: 'post2', author: 'AgriSupply Co.', timestamp: '1 day ago',
    title: 'New Fungicide Available - Special Introductory Offer!',
    content: 'Introducing Revytek® fungicide for enhanced disease control in corn and soybeans. Visit our booth at the county fair or contact your local rep for details and a limited-time discount.',
    replies: 1
  },
  {
    id: 'post3', author: 'Sarah GreenThumb', timestamp: '3 days ago',
    title: 'Dealing with Japanese Beetles on Soybeans',
    content: 'Seeing a huge number of Japanese beetles this year on my beans (East Field). Anyone else having this issue? What organic control methods have worked for you?',
    replies: 12
  },
   {
    id: 'post4', author: 'TechFarmer Mike', timestamp: '5 days ago',
    title: 'Drone Imagery for Nitrogen Scouting - Worth It?',
    content: 'Thinking about using drone NDVI imagery for variable rate nitrogen application next year. Has anyone found it cost-effective compared to traditional soil sampling?',
    replies: 8
  },
];

// Helper for relative time (very basic)
const formatTimeAgo = (timestamp: string): string => {
  // In a real app, use a library like date-fns or moment
  return timestamp;
};

function Community() {
  return (
     <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0 flex items-center">
            <Users className="h-6 w-6 mr-2 text-teal-600" />
            Community Forum
        </h1>
         <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <PlusSquare className="h-5 w-5 mr-1.5" />
            Start New Discussion
        </button>
      </div>

        {/* Forum Feed */}
        <div className="space-y-5">
            {communityPosts.map((post) => (
                <div key={post.id} className="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
                   <div className="p-5">
                        <div className="flex items-center justify-between mb-2">
                           <div className="flex items-center space-x-2">
                                {/* Placeholder Avatar */}
                               <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-gray-600">
                                   {post.author.substring(0,1)}
                               </div>
                                <span className="font-semibold text-gray-800">{post.author}</span>
                           </div>
                           <span className="text-xs text-gray-500">{formatTimeAgo(post.timestamp)}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-teal-700 cursor-pointer">{post.title}</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">{post.content}</p>
                    </div>
                    {/* Footer with Actions */}
                    <div className="bg-gray-50 px-5 py-3 border-t border-gray-200 flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-4">
                             <button className="flex items-center space-x-1 hover:text-teal-600">
                                <MessageSquare className="h-4 w-4"/>
                                <span>{post.replies} Replies</span>
                             </button>
                             <button className="flex items-center space-x-1 hover:text-blue-600">
                                <ThumbsUp className="h-4 w-4"/>
                                <span>Like</span>
                            </button>
                        </div>
                        <a href="#" className="text-teal-600 hover:text-teal-800 font-medium">Read More →</a>
                    </div>
                </div>
            ))}
            {communityPosts.length === 0 && (
                 <p className="text-center py-10 text-gray-500">No community posts yet. Be the first!</p>
             )}
        </div>
    </div>
  );
}

export default Community;