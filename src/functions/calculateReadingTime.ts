const calculateReadingTime = (text: string): number => {
  const words = text.length / 5;
  return Math.ceil(words / 200);
};

export default calculateReadingTime;
