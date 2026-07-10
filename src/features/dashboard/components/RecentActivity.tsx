import { List, ListItem, ListItemText } from "@mui/material";

import AppCard from "../../../components/ui/AppCard";

export default function RecentActivity() {

    return (

        <AppCard>

            <List>

                <ListItem>
                    <ListItemText
                        primary="No recent activity"
                    />
                </ListItem>

            </List>

        </AppCard>

    );

}