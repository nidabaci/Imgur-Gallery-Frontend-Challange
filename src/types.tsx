export interface FiltersTypeInterface {
    section: string,
    sort: string,
    page: number,
    window: string,
    showViral: boolean
}

export interface InitialStateInterface {
    pageLoading: boolean,
    photos: Array<Object>,
    filters: FiltersTypeInterface
}

export interface FilterPayload  {
    key: string,
    value: any
}

export interface DropDownInterface {
    options: DropDownOptionType[],
    value: string,
    name: string,
    onChange: {
        (key: string, value: string): void
    }
}

export type DropDownOptionType = {
    value: string,
    label: string
}
