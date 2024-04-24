import { Card, Button } from 'react-bootstrap';

const Books = (props) => {

    function addToCart(book, price) {
        props.setNewCart([...props.addCart, { title: book.title, price: price, quantity: 1 }]);
    }

    return (
        <div className='books'>
            <h1>Books</h1>
            <div>
                {props.allBook.results.lists ? (
                    props.allBook.results.lists.map((list, index) => (
                        list.books.map((book, idx) => (
                            <Card style={{ width: '18%', margin: '1%', height: '330px', float: 'left' }} key={book.title}>
                                <Card.Body>
                                    <Card.Img style={{ height: '120px', width: '80px' }} variant="top" src={book.book_image} />
                                    <Card.Title style={{paddingTop:5}}><b>{book.title}</b></Card.Title>
                                    <Card.Text><b>Author:</b> {book.author}</Card.Text>
                                    <Card.Text><b>Price:</b> {props.prices[index][idx]}</Card.Text>
                                    {props.addCart.some(item => item.title === book.title) ? (
                                        <Button disabled>Added</Button>
                                    ) : (
                                        <Button onClick={() => addToCart(book, props.prices[index][idx])}>Add to Cart</Button>
                                    )}
                                </Card.Body>
                            </Card>
                        ))
                    ))
                ) : (
                    <h2>No books available</h2>
                )}
            </div>
        </div>
    );
}

export default Books;