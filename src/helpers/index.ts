export const generateRoutename = (fname: string) => {
  return fname.split('/')[1].replace('.mdx', '');
};
