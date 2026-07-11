import { z } from "zod";

export const SettingsSchema = z.object({

    hospitalName: z.string().min(2),

    hospitalAddress: z.string(),

    hospitalPhone: z.string(),

    hospitalEmail: z.string().email(),

    timezone: z.string(),

    language: z.string(),

    currency: z.string(),

    theme: z.enum([

        "LIGHT",

        "DARK",

        "SYSTEM"

    ]),

    notifications: z.boolean()

});

export type SettingsForm =
    z.infer<typeof SettingsSchema>;
