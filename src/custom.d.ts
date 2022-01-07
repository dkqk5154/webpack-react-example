declare module "*.svg" {
    const content: any;
    export const ReactComponent: React.FunctionComponent<React.SVGProps<
        SVGSVGElement
    > & { title?: string }>;

    export default content;
    
}

declare module '*.gif' {
	const src: string;
	export default src;
}

declare module '*.jpg' {
	const src: string;
	export default src;
}

declare module '*.jpeg' {
	const src: string;
	export default src;
}

declare module '*.png' {
	const src: string;
	export default src;
}