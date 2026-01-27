import { useBreakpoint, type Breakpoint } from "./useBreakpoint";

type ResponsiveValues<T> = {
    default: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
};

export function useResponsiveValue<T>(values: ResponsiveValues<T>): T {
    const breakpoint = useBreakpoint();

    // Order matters — fallback logic
    const order: Breakpoint[] = ["xl", "lg", "md", "sm", "default"];

    const index = order.indexOf(breakpoint);

    // Find the closest defined value going down
    for (let i = index; i < order.length; i++) {
        const key = order[i];
        if (values[key] !== undefined) {
            return values[key] as T;
        }
    }

    return values.default;
}
