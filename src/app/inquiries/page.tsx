"use client"

import { useForm } from '@tanstack/react-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function PartsInquiryForm() {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: async ({ value }) => {
      console.log('Submitted inquiry:', value);
      alert('Inquiry submitted successfully.');
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="space-y-4 max-w-lg m-24"
    >
      <form.Field name="name" validators={{
        onChange: ({ value }) => (!value ? 'Name is required' : undefined),
      }}>
        {(field) => (
          <div className="space-y-1">
            <label className="block text-sm font-medium">Name</label>
            <Input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors?.[0] && (
              <p className="text-sm text-red-500">{field.state.meta.errors[0]}</p>
            )}
          </div>
        )}
      </form.Field>

      <form.Field name="email" validators={{
        onChange: ({ value }) => {
          if (!value) return 'Email is required';
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) return 'Invalid email address';
        },
      }}>
        {(field) => (
          <div className="space-y-1">
            <label className="block text-sm font-medium">Email</label>
            <Input
              type="email"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors?.[0] && (
              <p className="text-sm text-red-500">{field.state.meta.errors[0]}</p>
            )}
          </div>
        )}
      </form.Field>

      <form.Field name="message" validators={{
        onChange: ({ value }) => (!value ? 'Message is required' : undefined),
      }}>
        {(field) => (
          <div className="space-y-1">
            <label className="block text-sm font-medium">Inquiry Message</label>
            <Textarea
              rows={6}
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors?.[0] && (
              <p className="text-sm text-red-500">{field.state.meta.errors[0]}</p>
            )}
          </div>
        )}
      </form.Field>

      <Button type="submit" disabled={!form.state.canSubmit}>
        Submit Inquiry
      </Button>
    </form>
  );
}
