import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { Input } from '../components/ui/input';

interface Resolution {
  id?: string;
  title: string;
  description?: string;
  dueDate: string;
}

interface Props {
  onSubmit: (resolution: Resolution) => void;
  resolution?: Resolution | null;
  onCancel: () => void;
}

const Form: React.FC<Props> = ({ onSubmit, resolution, onCancel }) => {
  const { register, handleSubmit, reset } = useForm<Resolution>({
    defaultValues: resolution || { title: '', description: '', dueDate: '' },
  });

  const handleFormSubmit: SubmitHandler<Resolution> = (data) => {
    onSubmit({ ...resolution, ...data });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <Input
        type="text"
        placeholder=""
        {...register('title', { required: true })}
      />

      <Textarea placeholder="Description" {...register('description')} />

      <Input type="date" {...register('dueDate', { required: true })} />

      <div className="flex space-x-2">
        <Button type="submit" variant="outline">
          {resolution ? 'Update Resolution' : 'Add Resolution'}
        </Button>
        {resolution && (
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
};

export default Form;
