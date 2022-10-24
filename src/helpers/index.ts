import logoList from '../constants/logoMap.json';
export const generateRoutename = (fname: string) => {
  return fname.split('/')[1].replace('.mdx', '');
};

export const getImagePath = (key: string) => {
  return logoList[key.toLowerCase()];
};

export function asciiSort(a: string, b: string) {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  } else if (a.toLowerCase() == b.toLowerCase()) {
    return 0;
  } else return 1;
}
