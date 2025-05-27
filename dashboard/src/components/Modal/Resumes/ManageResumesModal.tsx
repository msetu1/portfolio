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
import { toast } from 'sonner';
import { addResume } from '@/services/resumes';

const ManageResumesModal = () => {
  const form = useForm({
    defaultValues: {
      url: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formattedData = {
      ...data
    };

    // console.log('Formatted Data:', formattedData);

    try {
      const res = await addResume(formattedData);
      if (res?.success) {
        toast.success('Resume added successfully!');
        form.reset(); // Reset form to default values
      } else {
        toast.error(res?.message || 'Failed to add resume');
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
          Add Projects
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create Project</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Client GitHub Link</FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="https://github.com/user/client"
                        className="border-[#6C63FF] focus-visible:ring-[#6C63FF]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
           
            {/* Submit Button */}
            <Button type="submit" className="w-full bg-[#6C63FF] text-white">
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ManageResumesModal;
