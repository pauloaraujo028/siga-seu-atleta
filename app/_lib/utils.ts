import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatFollowersCount(count: number) {
  if (count < 1000) {
    return count;
  } else if (count < 10000) {
    return count.toString().slice(0, 1) + "," + count.toString().slice(1, 4);
  } else if (count < 1_000_000) {
    return `${count / 1000}K`;
  } else {
    return `${count / 1_000_000}M`;
  }
}

export function extractInstagramAccount(url: string) {
  const match = url.match(/instagram\.com\/([^/]+)/);

  return match ? match[1] : null;
}

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
