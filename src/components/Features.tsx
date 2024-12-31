import React from 'react';
import { Button } from '../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

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
    <div className="p-4 border rounded mb-2 flex flex-col justify-between items-center text-white">
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p>
                <strong>{resolution.title}</strong>
              </p>
            </AccordionTrigger>
            <AccordionContent>
              {resolution.description}
              <p>
                <strong>Due Date </strong>{' '}
                {new Date(resolution.dueDate).toLocaleDateString()}
              </p>
              <div className="space-x-4 pt-4">
                <Button variant="secondary" onClick={() => onEdit(resolution)}>
                  {' '}
                  Edit{' '}
                </Button>
                <Button
                  variant="outline"
                  className="text-black"
                  onClick={() => onDelete(resolution)}
                >
                  {' '}
                  Delete{' '}
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Feature;
