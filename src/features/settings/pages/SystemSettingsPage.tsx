import { Stack } from "@mui/material";

import PageContainer from "../../../components/common/PageContainer";
import PageHeader from "../../../components/common/PageHeader";

import SettingsForm from "../components/SettingsForm";

export default function SystemSettingsPage() {

    return (

        <PageContainer>

            <Stack spacing={3}>

                <PageHeader
                    title="System Settings"
                    subtitle="Hospital system configuration"
                />

                <SettingsForm />

            </Stack>

        </PageContainer>

    );

}
