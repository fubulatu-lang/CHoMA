import { Stack } from "@mui/material";

import PageContainer from "../../../components/common/PageContainer";
import PageHeader from "../../../components/common/PageHeader";

import SettingsForm from "../components/SettingsForm";

export default function ProfileSettingsPage() {

    return (

        <PageContainer>

            <Stack spacing={3}>

                <PageHeader
                    title="Profile Settings"
                    subtitle="Manage your account"
                />

                <SettingsForm />

            </Stack>

        </PageContainer>

    );

}
