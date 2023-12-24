export type SwapiResponse<T> = {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

async function fetchSwapiData<T>(url: string): Promise<SwapiResponse<T>> {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function fetchPlanets(page: number): Promise<SwapiResponse<any>> {
    const url = `https://swapi.dev/api/planets/?page=${page + 1}`;
    return fetchSwapiData(url);
}

export async function fetchStarships(page: number): Promise<SwapiResponse<any>> {
    const url = `https://swapi.dev/api/starships/?page=${page + 1}`;
    return fetchSwapiData(url);
}