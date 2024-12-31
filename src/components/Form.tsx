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
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-4 flex flex-col"
    >
      <div>
        <p className="justify-start start-0 font-semibold pb-2 text-1xl">
          Resolution Title
        </p>
        <Input
          className="border border-gray-300 rounded-md px-4 py-2 text-white bg-blue-950"
          type="text"
          placeholder=""
          {...register('title', { required: true })}
        />
      </div>

      <div>
        <p className="justify-start start-0 font-semibold pb-2 text-1xl text-white">
          Description
        </p>
        <p>(optional)</p>
        <Textarea
          className="text-white  bg-blue-950"
          placeholder="Description"
          {...register('description')}
        />
      </div>

      <div>
        <p className="justify-start start-0 font-semibold pb-2 text-1xl">
          Due Date
        </p>
        <Input
          className="text-white"
          type="date"
          {...register('dueDate', { required: true })}
        />
      </div>

      <div className="flex space-x-2 justify-center text-center">
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
