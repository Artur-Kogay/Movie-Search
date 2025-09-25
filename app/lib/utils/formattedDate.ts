import { format } from "date-fns";

export const formattedDate = (date: Date | string): string => {

    return format(new Date(date), 'MMMM d, yyyy')
}