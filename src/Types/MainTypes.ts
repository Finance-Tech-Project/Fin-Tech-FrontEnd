
export interface MainButtonType {
    description: string,
    header: string,
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> & {
        title?: string | undefined
    }
}
