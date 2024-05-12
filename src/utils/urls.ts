export const API_URL = process.env.BASE_URL || "http://localhost:3010/api";

export const fromImageToUrl = (image: any, path: string) => {
  if (!image) {
    return "/vercel.svg";
  }

  if (image.url?.indexOf("/") === 0) {
    return `${API_URL}${path}${image.url}`;
  }
  return image.url && `${API_URL}/${path}/${image.url}`;
};
