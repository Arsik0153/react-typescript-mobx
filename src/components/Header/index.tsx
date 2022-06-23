import React, { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/RootStateContext';
import Container from '../Container/style';
import SwitcherIcon from '../../icons/switcher';
import CartIcon from '../../icons/cart';
import Tooltip from '../Tooltip';
import { Logo, Wrapper, SwitcherWrapper, LoveWords, cartIconCss, switcherIconCss } from './style';

const Header: FC = observer(() => {
    const { uiStore } = useStore();
    const [ switcherClicked, setSwitcherClicked] = useState(!!localStorage.getItem("theme"));

    const onSwitcherClick = (): void => {
        uiStore.toggleTheme();

        if (!switcherClicked) {
            setSwitcherClicked(true);
        }
    }

    return (
        <Container>
            <Wrapper>
                <Logo>
                    React books
                    <SwitcherWrapper type="button">
                        <SwitcherIcon onClick={onSwitcherClick} css={switcherIconCss}/>
                        <Tooltip show={!switcherClicked} text="Нажми на меня"/>
                    </SwitcherWrapper>
                    <LoveWords>made with ❤️ for somnium</LoveWords>
                </Logo>
                <CartIcon css={cartIconCss}/>
            </Wrapper>
        </Container>
    );
});

export default Header;
