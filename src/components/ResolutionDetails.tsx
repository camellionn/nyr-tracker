/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResolutionDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extract the `id` from the URL
  const [resolution, setResolution] = useState<any>(null);

  useEffect(() => {
    const fetchResolution = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/resolutions/${id}`
        );
        console.log('Resolution data:', response.data);
        setResolution(response.data);
      } catch (error) {
        console.error('Error fetching resolution:', error);
      }
    };

    if (id) {
      fetchResolution();
    }
  }, [id]);

  if (!resolution) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border-white">
      <h1>Resolution Details</h1>
      <p>
        <strong>Title:</strong> {resolution.title}
      </p>
      <p>
        <strong>Description:</strong> {resolution.description}
      </p>
      <p>
        <strong>Due Date:</strong>{' '}
        {new Date(resolution.dueDate).toLocaleDateString()}
      </p>
    </div>
  );
};

export default ResolutionDetails;
