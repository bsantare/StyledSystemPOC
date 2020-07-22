export const KnewStyle = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#6200ee',
    secondary: '#03dac6',
    muted: '#f6f6f6',
    gray: '#555',
  },
  variants: {},
  buttons: {
    filled: {
      variant: 'text.caps',
      color: 'background',
      bg: 'primary',
      borderRadius: '8 px',
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 2px',
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary',
    },
  },
};

export default KnewStyle;
