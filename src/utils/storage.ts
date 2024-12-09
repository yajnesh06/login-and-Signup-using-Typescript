export const saveEmailToStorage = (email: string): void => {
  localStorage.setItem('rememberedEmail', email);
};

export const getEmailFromStorage = (): string | null => {
  return localStorage.getItem('rememberedEmail');
};

export const clearEmailFromStorage = (): void => {
  localStorage.removeItem('rememberedEmail');
};