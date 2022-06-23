import { css, CSSProp } from 'styled-components';
import Breakpoint from '../enums/Breakpoint';

const lower = (bp: Breakpoint): string => `@media (max-width: ${bp - 1}px)`;
const greater = (bp: Breakpoint): string => `@media (min-width: ${bp}px)`;
const between = (bpFrom: Breakpoint, bpTo: Breakpoint) =>
    `@media (min-width: ${bpFrom}px) and (max-width: ${bpTo - 1}px)`;

const mq = {
    lowerXs: lower(Breakpoint.Xs),
    lowerSm: lower(Breakpoint.Sm),
    lowerMd: lower(Breakpoint.Md),
    lowerLg: lower(Breakpoint.Lg),
    lowerXl: lower(Breakpoint.Xl),
    greaterXs: greater(Breakpoint.Xs),
    greaterSm: greater(Breakpoint.Sm),
    greaterMd: greater(Breakpoint.Md),
    greaterLg: greater(Breakpoint.Lg),
    greaterXl: greater(Breakpoint.Xl),
    betweenLgXl: between(Breakpoint.Lg, Breakpoint.Xl),
    betweenMdLg: between(Breakpoint.Md, Breakpoint.Lg),
    betweenSmMd: between(Breakpoint.Sm, Breakpoint.Md),
    betweenXsMd: between(Breakpoint.Xs, Breakpoint.Md),
    betweenXsSm: between(Breakpoint.Xs, Breakpoint.Sm),
};

type MqT = keyof typeof mq;

export const hidden = (Object.keys(mq) as MqT[]).reduce(
    (acc, bp) => ({
        ...acc,
        [bp]: css`
            ${mq[bp]} {
                display: none;
            }
        `,
    }),
    {} as Record<MqT, CSSProp>,
);

export default mq;
