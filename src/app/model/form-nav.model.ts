export interface IFromNavInfo {
    state:  'active' | 'inactive';
    level: number;
    title: string;
    parent: number;
    id: number;
    show: boolean;
}