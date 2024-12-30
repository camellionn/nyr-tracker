import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Form from './components/Form';
import List from './components/List';
import ResolutionDetails from './components/ResolutionDetails'; // New component for details view

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
      const response = await axios.get('http://localhost:5000/api/resolutions');
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
          `http://localhost:5000/api/resolutions/${resolution._id}`,
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
          'http://localhost:5000/api/resolutions',
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
        `http://localhost:5000/api/resolutions/${resolution._id}`
      );
      fetchResolutions();
    } catch (error) {
      console.error('Error deleting resolution:', error);
    }
  };

  const handleSendReminder = async (id: string) => {
    try {
      await axios.post('http://localhost:5000/api/resolutions/reminder', {
        id,
      });
      alert('Reminder email sent');
    } catch (error) {
      console.error('Error sending reminder:', error);
    }
  };

  return (
    <Router>
      <div className="p-4">
        <h1 className="text-lg font-bold mb-4">New Year's Resolutions</h1>
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
    </Router>
  );
};

export default App;
