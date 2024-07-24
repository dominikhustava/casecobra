import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/*lib/utils.ts created by npx shadcn-ui@latest init. It helps merge tailwind classnames*/
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
