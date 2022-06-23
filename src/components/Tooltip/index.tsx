import React, { FC } from 'react';
import { Wrapper } from './style';

type Props = {
    show?: boolean;
    text: string;
}

const Tooltip: FC<Props> = (props) => {
    const { show = true, text } = props;

    if (!show) return null;

    return (
        <Wrapper>
            {text}
        </Wrapper>
    );
};

export default Tooltip;
