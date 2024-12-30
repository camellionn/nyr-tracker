import React from 'react';
import { Button } from '../components/ui/button';

interface Resolution {
  id?: string;
  title: string;
  description?: string;
  dueDate: string;
}

interface Props {
  resolution: Resolution;
  onEdit: (resolution: Resolution) => void;
  onDelete: (resolution: Resolution) => void;
  onSendReminder: (id: string) => void;
}

const Feature: React.FC<Props> = ({
  resolution,
  onEdit,
  onDelete /*onSendReminder*/,
}) => {
  return (
    <div className="p-4 border rounded mb-2 flex justify-between items-center">
      <div>
        <p>
          <strong>Title:</strong> {resolution.title}
        </p>
        <p>
          <strong>Description:</strong> {resolution.description || 'N/A'}
        </p>
        <p>
          <strong>Due Date:</strong>{' '}
          {new Date(resolution.dueDate).toLocaleDateString()}
        </p>
      </div>
      <div className="space-x-2">
        <Button onClick={() => onEdit(resolution)}> Edit </Button>
        <Button variant="destructive" onClick={() => onDelete(resolution)}>
          {' '}
          Delete{' '}
        </Button>
      </div>
    </div>
  );
};

export default Feature;
