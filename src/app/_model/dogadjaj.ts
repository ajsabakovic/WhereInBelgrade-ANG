import { Mesto } from './mesto';
import { Kategorija } from './kategorija';

export interface Dogadjaj {
    dogadjajID: number;
    naziv: string;
    opis?: string;
    zaKolikoDana?: number;
    datumPocetka?: Date;
    datumZavrsetka?: Date;
    lokacija?: Mesto;
    mainKategorija: Kategorija;
    kategorije?: Kategorija[];
    lajkovan?: boolean;
}
