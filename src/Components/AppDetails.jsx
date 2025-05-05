import React, { useState } from 'react';
import Navbar from './Navbar';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  const [reviewList, setReviewList] = useState([]);

  const handleClick = () => {
    setIsInstalled(!isInstalled);
  };

  const reviews = (e) => {
    e.preventDefault();

    if (!isInstalled) {
      alert('Please install the app first.');
      return;
    }

    const form = e.target;
    const email = form.email.value;
    const review = form.review.value;

    const newReview = { email, review };
    setReviewList([...reviewList, newReview]);

    form.reset();
    alert('Review submitted successfully!');
  };

  const { id } = useParams();
  const data = useLoaderData();
  const appDetails = data.find((app) => app.id === id);

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* App Banner */}
        <div className="w-full">
          <img
            src={appDetails.banner}
            alt="App Banner"
            className="rounded-2xl shadow-md w-full h-80 object-cover"
          />
        </div>

        {/* App Info */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold">{appDetails.name}</h1>
            <p className="text-sm text-gray-500">{appDetails.developer}</p>
          </div>
          <button className="btn btn-primary" onClick={handleClick}>
            {isInstalled ? 'Uninstall' : 'Install'}
          </button>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600">
          <div><strong>Downloads:</strong> {appDetails.downloads}</div>
          <div><strong>Category:</strong> {appDetails.category}</div>
          <div><strong>Rating:</strong> ⭐ {appDetails.rating}</div>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700">{appDetails.description}</p>
        </div>

        {/* Submitted Reviews */}
        <div className="border p-4 rounded-xl shadow-sm my-3">
          <h2 className="text-xl font-semibold mb-4">User Reviews</h2>
          {reviewList.length === 0 ? (
            <p className="text-gray-500">No reviews yet. Be the first to review!</p>
          ) : (
            <ul className="space-y-3">
              {reviewList.map((rev, index) => (
                <li key={index} className="border-b pb-2">
                  <p className="text-sm ">Email : <strong>{rev.email}</strong>:</p>
                  <p className="">Reviews : {rev.review}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Review Form */}
        <div className="bg-base-200 p-4 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Submit a Review</h2>
          <form className="space-y-4" onSubmit={reviews}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="review"
              className="textarea textarea-bordered w-full"
              placeholder="Write your review..."
              rows={4}
              required
            />
            <button className="btn btn-success w-full" type="submit">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppDetails;
