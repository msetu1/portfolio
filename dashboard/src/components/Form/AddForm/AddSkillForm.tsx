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
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import { toast } from 'sonner'; // Optional: for notifications
import { addSkill } from '@/services/Skills';

const categories = ['Expertise', 'Comfortable', 'Familiar', 'Tools'];

const AddSkillForm = () => {
  const form = useForm();
  const [isAvailable, setIsAvailable] = useState(true);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const skillData = {
      ...data,
      isAvailable,
    };

    try {
      const res = await addSkill(skillData);
      if (res?.success) {
        toast.success('Skill added successfully!');
        form.reset();
        setIsAvailable(true);
      } else {
        toast.error(res?.message || 'Failed to add skill');
      }
    } catch (error) {
      toast.error('Something went wrong!');
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='px-4 py-2 rounded border-2 border-[#6C63FF]  font-bold bg-transparent hover:bg-[#6C63FF] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 text-[#6C63FF]'>Add Skills</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Skills</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="e.g., React, TailwindCSS"
                      className="border-[#6C63FF] focus-visible:ring-[#6C63FF]"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Icon URL */}
            <FormField
              control={form.control}
              name="icon"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Icon URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://link-to-icon.png"
                      className="border-[#6C63FF] focus-visible:ring-[#6C63FF]"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Area */}
            <FormField
              control={form.control}
              name="area"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Skill Area</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Frontend, UI Framework"
                      className="border-[#6C63FF] focus-visible:ring-[#6C63FF]"
                      {...field}
                    />
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
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="border-[#6C63FF] focus-visible:ring-[#6C63FF]">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Is Available */}
            <div className="flex items-center justify-between">
              <FormLabel>Is Available</FormLabel>
              <Switch
                checked={isAvailable}
                onCheckedChange={setIsAvailable}
                className="data-[state=checked]:bg-[#6C63FF]"
              />
            </div>

            <Button type="submit" className="w-full bg-[#6C63FF] text-white">
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddSkillForm;
