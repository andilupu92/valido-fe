import { ThemeProvider } from './components/theme-provider';
import { ThemeSwitch } from './components/theme-switch';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="app-theme">
      <div className="min-h-screen p-4">
        <div className="flex justify-end mb-4">
          <ThemeSwitch />
        </div>
        <div className="container">
          <h1 className="text-2xl font-bold mb-4">Welcome to Your App</h1>
          <p className="text-muted-foreground">
            Your app is now set up with dark mode support. Click the sun/moon icon to change themes.
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
