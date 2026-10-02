import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import ProjectFiles from "@/pages/ProjectFiles";
import Whitepaper from "@/pages/Whitepaper";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

type Language = "en" | "pt";

function Router({ language, setLanguage }: { language: Language; setLanguage: (language: Language) => void }) {
  return (
    <Switch>
      <Route path="/" component={() => <Home language={language} setLanguage={setLanguage} />} />
      <Route path="/files" component={ProjectFiles} />
      <Route path="/whitepaper" component={Whitepaper} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router language={language} setLanguage={setLanguage} />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
