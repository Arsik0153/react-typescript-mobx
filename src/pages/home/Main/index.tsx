import React, { FC, useEffect, useState } from 'react';
import Container from '../../../components/Container/style';
import MagnifierIcon from '../../../icons/magnifier';
import Grid from './Grid';
import { BookT } from '../../../types/Book';
import { useStore } from '../../../store/RootStateContext';
import { Wrapper, Heading, Top, Input, InputBox, magnifierIconCss } from './style';

const Main: FC = () => {
    const { cartStore } = useStore();
    const [search, setSearch] = useState<string>("");
    const [result, setResult] = useState<BookT[]>(cartStore.getBooks());

    useEffect(() => {
        if (search !== "") {
            const filteredData = cartStore.getBooks().filter(element => {
                return element.name.toLowerCase().includes(search.toLowerCase());
            });
            setResult(filteredData);
        } else {
            setResult(cartStore.getBooks());
        }
    }, [search]);

    return (
        <Container>
            <Wrapper>
                <Top>
                    <Heading>Самые последние</Heading>
                    <InputBox>
                        <MagnifierIcon css={magnifierIconCss} />
                        <Input
                            type="text"
                            placeholder="Поиск по названию"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </InputBox>
                </Top>
                <Grid books={result}/>
            </Wrapper>
        </Container>
    );
};

export default Main;
