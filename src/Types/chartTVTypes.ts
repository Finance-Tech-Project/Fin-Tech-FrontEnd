
export interface ChartEvents {
    name: string,
    doxxed: boolean,
    audit: boolean,
    staySafuScan: boolean,
    reflections: boolean,
    socials: boolean,
    earlySaleDate: Date,
    liquidityDate: Date,
    taxCap: boolean,
    elevatedTax: boolean,
    lowTax: boolean,
    noTax: boolean
}

export interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }

