import { locationQueries } from "./location.queries";
export const locationResolver = {
    Query: {
        ...locationQueries
    }
};