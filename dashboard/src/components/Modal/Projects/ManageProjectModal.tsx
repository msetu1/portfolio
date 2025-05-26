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
import { Checkbox } from '@/components/ui/checkbox';
import { addProject } from '@/services/Projects';
import { toast } from 'sonner';

const ManageProjectModal = () => {
  const form = useForm({
    defaultValues: {
      title: '',
      description: '',
      technologies: '',
      liveLink: '',
      thumbnail: '',
      clientLink: '',
      serverLink: '',
      isAvailable: true,
      isFeatured: false,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formattedData = {
      ...data,
      technologies: data.technologies
        ? data.technologies.split(',').map((tech: string) => tech.trim())
        : [],
      isAvailable: !!data.isAvailable,
      isFeatured: !!data.isFeatured,
    };

    console.log('Formatted Data:', formattedData);

    try {
      const res = await addProject(formattedData);
      if (res?.success) {
        toast.success('Project added successfully!');
        form.reset(); // Reset form to default values
      } else {
        toast.error(res?.message || 'Failed to add project');
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
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="e.g., Portfolio Website"
                      className="border-[#6C63FF] focus-visible:ring-[#6C63FF]"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Short project description..."
                      className="border-[#6C63FF] focus-visible:ring-[#6C63FF]"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Technologies */}
            <FormField
              control={form.control}
              name="technologies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Technologies (comma-separated)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="React, Tailwind, Node.js"
                      className="border-[#6C63FF] focus-visible:ring-[#6C63FF]"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Live Link & Thumbnail */}
            <div className="flex flex-col md:flex-row gap-4">
              <FormField
                control={form.control}
                name="liveLink"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Live Link</FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="https://project-live.com"
                        className="border-[#6C63FF] focus-visible:ring-[#6C63FF]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="thumbnail"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Thumbnail URL</FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="https://image-url.com"
                        className="border-[#6C63FF] focus-visible:ring-[#6C63FF]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* ClientLink & ServerLink */}
            <div className="flex flex-col md:flex-row gap-4">
              <FormField
                control={form.control}
                name="clientLink"
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
              <FormField
                control={form.control}
                name="serverLink"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Server GitHub Link</FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="https://github.com/user/server"
                        className="border-[#6C63FF] focus-visible:ring-[#6C63FF]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* isFeatured */}
            <FormField
              control={form.control}
              name="isFeatured"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(!!checked)}
                    />
                  </FormControl>
                  <FormLabel className="!mb-0">Is Featured?</FormLabel>
                </FormItem>
              )}
            />

            {/* isAvailable */}
            <FormField
              control={form.control}
              name="isAvailable"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(!!checked)}
                    />
                  </FormControl>
                  <FormLabel className="!mb-0">Is Available?</FormLabel>
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

export default ManageProjectModal;
