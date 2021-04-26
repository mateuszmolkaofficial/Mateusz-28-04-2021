import { curry } from "lodash/fp"
import { ThemeType } from "./theme"

interface StyledComponentsProps {
  theme: ThemeType
}

/**
 * Color accessor
 */
export const color = curry(
  (key: keyof ThemeType["colors"], props: StyledComponentsProps): string => props.theme.colors[key],
)

/**
 * Border radius accessor
 */
export const borderRadius = curry(
  (key: keyof ThemeType["borderRadius"], props: StyledComponentsProps): string =>
    props.theme.borderRadius[key],
)

/**
 * Spacing accessor
 */
export const spacing = curry(
  (key: number, props: StyledComponentsProps): number => props.theme.spacing[key],
)
