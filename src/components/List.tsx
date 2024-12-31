import React from 'react';
import Feature from './Features';

interface Resolution {
  id?: string;
  title: string;
  description?: string;
  dueDate: string;
}

interface Props {
  resolutions: Resolution[];
  onEdit: (resolution: Resolution) => void;
  onDelete: (resolution: Resolution) => void;
  onSendReminder: (id: string) => void;
}

const List: React.FC<Props> = ({
  resolutions = [],
  onEdit,
  onDelete,
  onSendReminder,
}) => {
  return (
    <div className="mt-8">
      <h2 className="text-md font-semibold mb-2 text-white text-5xl">
        Your Resolutions
      </h2>
      {resolutions.map((reso) => (
        <Feature
          key={reso.id}
          resolution={reso}
          onEdit={onEdit}
          onDelete={onDelete}
          onSendReminder={onSendReminder}
        />
      ))}
    </div>
  );
};

export default List;
