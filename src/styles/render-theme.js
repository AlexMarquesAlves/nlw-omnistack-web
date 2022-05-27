import { render } from '@testing-library/react';

export const renderTheme = (children) => {
  return render(<MyThemeProvider>{children}</MyThemeProvider>);
};
