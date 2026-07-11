import api from "../../../lib/api";

import { AppSettings } from "./settings.types";

export async function getSettings() {

    const { data } = await api.get<AppSettings>(
        "/settings"
    );

    return data;

}

export async function updateSettings(
    body: Partial<AppSettings>
) {

    const { data } = await api.put(
        "/settings",
        body
    );

    return data;

}
