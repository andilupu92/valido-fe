import { Switch } from '@/components/ui/switch';
import { useTheme } from './theme-provider';

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      checked={theme === 'dark'}
      onCheckedChange={(checked: boolean) => setTheme(checked ? 'dark' : 'light')}
      aria-label="Toggle theme"
    />
  );
}
