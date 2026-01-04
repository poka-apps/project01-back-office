import type { IHasId, IHasTitle, IHasType } from './has.interface';
import type { TNomenclatureType } from '@/types';

export interface INomenclature extends IHasTitle, IHasId, IHasType<TNomenclatureType> {
}

export interface IBrand extends IHasTitle, IHasId {
}
