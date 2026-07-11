import { create } from "zustand";

import { AppSettings } from "../api/settings.types";

interface SettingsState {

    settings?: AppSettings;

    setSettings: (
        settings: AppSettings
    ) => void;

    clear: () => void;

}

export const useSettingsStore =
create<SettingsState>((set) => ({

    settings: undefined,

    setSettings: (settings) =>
        set({ settings }),

    clear: () =>
        set({
            settings: undefined
        })

}));
