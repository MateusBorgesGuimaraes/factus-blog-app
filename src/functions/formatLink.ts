const formatLink = (path: string, image: string): string => {
  return `${process.env.NEXT_PUBLIC_API_URL}/${path}/${image}`;
};

export default formatLink;
