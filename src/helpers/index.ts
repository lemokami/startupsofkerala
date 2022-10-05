import logoList from '../constants/logoMap.json';
export const generateRoutename = (fname: string) => {
  return fname.split('/')[1].replace('.mdx', '');
};

export const getImagePath = (key: string) => {
  return logoList[key.toLowerCase()];
};
