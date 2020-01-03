export class Page<T> {
    content: T[];
    totalElements: number;
    number: number;
    size: number;
    totalPages: number;
    numberOfElements: number;
    first: boolean;
    last: boolean;
    empty: boolean;
    // tslint:disable-next-line:max-line-length
    constructor(data: {
        content?: T[], totalElements?: number, number?: number,
        size?: number, totalPages?: number, numberOfElements?: number,
        first?: boolean, last?: boolean, empty?: boolean }) {
        this.content = data.content;
        this.totalElements = data.totalElements;
        this.number = data.number;
        this.size = data.size;
        this.totalPages = data.totalPages;
        this.numberOfElements = data.numberOfElements;
        this.first = data.first;
        this.last = data.last;
        this.empty = data.empty;
    }
    // fonction utilitaire, genere une page vide du type voulu
    public static emptyPage<T>(): Page<T> {
        const data = {content: [], totalElements: 0, number: 0,
                    size: 5,  totalPages: 1, numberOfElements: 0,
                    first: true, last:  true,  empty: true};
        return new Page<T>(data);
    }
}
