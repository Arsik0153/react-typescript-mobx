import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Button } from '../../../../components/Button';
import { BookT } from '../../../../types/Book';
import { useStore } from '../../../../store/RootStateContext';
import { Author, Book, Cover, Price, Title, Wrapper, bookCss } from './style';

type PropsT = {
    books: BookT[] | undefined;
}

const Grid: FC<PropsT> = observer((props) => {
    const { books } = props;
    const { cartStore } = useStore();

    const handleAddBookClick = (book: BookT): void => {
        if (!isBookInCart(book)) {
            cartStore.addToCart(book);
        }
    }

    const isBookInCart = (book: BookT): boolean => {
        return !!cartStore.cart.find((currentBook) => currentBook.id === book.id);
    }

    return (
        <Wrapper>
            {books && books.map(book => (
                <Book key={book.id}>
                    <Cover src={book.img} alt=""/>
                    <Title>{book.name}</Title>
                    <Author>{book.author}</Author>
                    <Price>{book.price} ₸</Price>
                    <Button
                        type="button"
                        css={bookCss}
                        onClick={() => handleAddBookClick(book)}
                    >
                        {isBookInCart(book) ? 'Добавлено' : 'Добавить в корзину'}
                    </Button>
                </Book>
            ))}
        </Wrapper>
    );
});

export default Grid;
