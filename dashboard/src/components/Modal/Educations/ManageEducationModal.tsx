'use client';

import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { addEducation } from '@/services/educations';



const ManageEducationModal = () => {
  const form = useForm({
    defaultValues: {
      institute: '',
      degree: '',
      status: 'Running',
      category: 'Diploma',
      duration: '',
      location: '',
      description: '',
      isDeleted: false,
    },
  });

   const onSubmit: SubmitHandler<FieldValues> = async (data) => {
      const formattedData = {
        ...data
      };
  
      console.log('Formatted Data:', formattedData);
  
      try {
        const res = await addEducation(formattedData);
        if (res?.success) {
          toast.success('Education added successfully!');
          form.reset(); // Reset form to default values
        } else {
          toast.error(res?.message || 'Failed to add Education');
        }
      } catch (error) {
        toast.error('Something went wrong!');
        console.error(error);
      }
    };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-4 py-2 rounded border-2 border-[#6C63FF] font-bold bg-transparent hover:bg-[#6C63FF] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 text-[#6C63FF]">
          Add Education
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add Education</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Institute */}
            <FormField
              control={form.control}
              name="institute"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institute</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., XYZ Polytechnic" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Degree */}
            <FormField
              control={form.control}
              name="degree"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Degree</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Diploma in CSE" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Status */}
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <select
                      className="border p-2 rounded w-full"
                      {...field}
                    >
                      <option value="Running">Running</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Category */}
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <select className="border p-2 rounded w-full" {...field}>
                      <option value="Diploma">Diploma</option>
                      <option value="SSC">SSC</option>
                      <option value="Courses">Courses</option>
                    </select>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Duration */}
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 2019 - 2023" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Location (Optional) */}
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Dhaka, Bangladesh" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Description (Optional) */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your experience, subjects, achievements..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* Submit */}
            <Button type="submit" className="w-full bg-[#6C63FF] text-white">
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ManageEducationModal;
