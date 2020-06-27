export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
    criteria: string;
}

export class PaginatedResult<T>{
    result: T;
    paginaton: Pagination;
}