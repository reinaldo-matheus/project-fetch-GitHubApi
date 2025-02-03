import { baseUrl } from "../variables";

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${repositoriesQuantity}`);
    const eventsData = await response.json();
    return eventsData || [];
    
}

export { getEvents };