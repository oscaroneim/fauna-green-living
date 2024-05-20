import { z } from 'zod';

export const ContactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  emailAddress: z
    .string()
    .min(1, 'Email address is required')
    .email('Email address should be valid'),
  subject: z.enum(['wholesale', 'custom', 'general'], { message: 'Subject is required' }),
  yourMessage: z.string().min(1, 'Message is required')
});
export type ContactSchema = z.infer<typeof ContactSchema>;
export type ContactErrors = z.ZodFormattedError<ContactSchema, string>;
