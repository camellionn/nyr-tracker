import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Form from './components/Form';
import List from './components/List';
import ResolutionDetails from './components/ResolutionDetails'; // New component for details view
import { Fireworks } from '@fireworks-js/react';

interface Resolution {
  _id?: string;
  userId?: string;
  title: string;
  description?: string;
  dueDate: string;
}

const App: React.FC = () => {
  const [resolutions, setResolutions] = useState<Resolution[]>([]);
  const [editResolution, setEditResolution] = useState<Resolution | null>(null);

  useEffect(() => {
    fetchResolutions();
  }, []);

  const fetchResolutions = async () => {
    try {
      const response = await axios.get(
        'https://nyr-tracker.onrender.com/api/resolutions'
      );
      console.log('API Response:', response.data);
      setResolutions(response.data || []);
    } catch (error) {
      console.error('Error fetching resolutions:', error);
      setResolutions([]);
    }
  };

  const handleAddorEdit = async (resolution: Resolution) => {
    console.log('Resolution to be added or edited:', resolution);
    if (resolution._id) {
      try {
        const response = await axios.put(
          `https://nyr-tracker.onrender.com/api/resolutions/${resolution._id}`,
          resolution
        );
        console.log('Resolution updated:', response.data);
        fetchResolutions();
        setEditResolution(null);
      } catch (error) {
        console.error('Error updating resolution:', error);
        alert('Error updating resolution');
      }
    } else {
      try {
        const response = await axios.post(
          'https://nyr-tracker.onrender.com/api/resolutions',
          resolution
        );
        console.log('Resolution created:', response.data);
        fetchResolutions();
        setEditResolution(null);
      } catch (error) {
        console.error('Error creating resolution:', error);
        alert('Error creating resolution');
      }
    }
  };

  const handleDelete = async (resolution: Resolution) => {
    if (!resolution._id) {
      console.error('Resolution _id is missing:', resolution);
      return;
    }

    try {
      await axios.delete(
        `https://nyr-tracker.onrender.com/api/resolutions/${resolution._id}`
      );
      fetchResolutions();
    } catch (error) {
      console.error('Error deleting resolution:', error);
    }
  };

  const handleSendReminder = async (id: string) => {
    try {
      await axios.post('https://nyr-tracker.onrender.com/reminder', {
        id,
      });
      alert('Reminder email sent');
    } catch (error) {
      console.error('Error sending reminder:', error);
    }
  };

  return (
    <Router>
      <div className="relative w-auto h-auto">
        {/* Fireworks Component */}
        <Fireworks
          className="top-0 left-0 w-auto h-36"
          options={{
            autoresize: true,
            explosion: 10,
            sound: {
              enabled: true,
            },
            opacity: 100,
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none', // Prevent interaction
          }}
        />

        <div className="relative p-4">
          <h1 className="text-5xl mb-4 text-white">New Year Resolutions</h1>
          <Form
            onSubmit={handleAddorEdit}
            resolution={editResolution}
            onCancel={() => setEditResolution(null)}
          />
          <Routes>
            <Route
              path="/"
              element={
                <List
                  resolutions={resolutions}
                  onEdit={(resolution) => setEditResolution(resolution)}
                  onDelete={handleDelete}
                  onSendReminder={handleSendReminder}
                />
              }
            />
            <Route path="/resolutions/:id" element={<ResolutionDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
