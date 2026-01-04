import type { IHasCreatedAt, IHasId, IHasOptUpdatedAt, IHasTitle } from './has.interface';

export interface IBrand extends IHasCreatedAt, IHasOptUpdatedAt, IHasTitle, IHasId {
}
