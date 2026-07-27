import { ThemeProvider } from "@/providers/theme-provider";
import { LightboxProvider } from "@/context/LightboxContext";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LightboxProvider>{children}</LightboxProvider>
    </ThemeProvider>
  );
}
