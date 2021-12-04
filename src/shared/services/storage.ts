const storage = {
  read<T>(key: string): T | undefined {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : undefined;
  },
  write(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
};

export default storage;
