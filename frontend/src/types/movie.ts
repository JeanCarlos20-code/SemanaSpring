export type Movie = {
    id: number;
    title: string;
    score: number;
    count: number;
    image: string;
}
//dados retirados da API do backend (postman)
export type MoviePage = {
    content: Movie[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}