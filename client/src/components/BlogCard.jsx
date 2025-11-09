import React from "react";

export default function BlogCard({ blog }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold">{blog.title}</h2>
      <p className="text-gray-500 text-sm">By {blog.author} | {blog.date}</p>
      <p className="mt-2 text-gray-700">{blog.excerpt}</p>
    </div>
  );
}
