import { CssBaseline } from "@mui/material";

import {
  ThemeProvider
} from "@mui/material/styles";

import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";

import App from "../App";

import { theme } from "./theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false
    }
  }
});

export function AppProviders() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  );
}