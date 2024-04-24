import { useEffect,useState } from 'react'
import axios from 'axios'
import { Spinner, Card, Button } from 'react-bootstrap'

const Review = () => {

    const[title,setTitle] = useState('Becoming')
    const[review,setReview] = useState({})
    const[loading,setLoading] = useState(true)

    const handleButtonClick = () => {
        setTitle(document.getElementById('bookInput').value);
    };

    const fetchDataFromAPI = () => {
        try{
          axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?title=${title}&api-key=uak3NkFGVEYRiY8vMZe3QI09uAQBYefi`)
          .then(response => {
              if (response !== undefined){
                  console.log(`response : ${JSON.stringify(response.data)}`)
                  setReview(response.data.results)
                  setLoading(false)
              }else{
                  console.log("No data received in response");
                  setLoading(false)
              }
          })
          .catch(err => {
              console.error(`Cannot connect to API due to error : ${err}`);
              setLoading(false)
          });
        }catch(error){
              console.error(`Error while fetching data from API: ${error}`);
              setLoading(false);
        }
      }

      useEffect( () => {
        console.log(`fetch data from API`);
        fetchDataFromAPI()}, [title]);

    return (
        <div className='review'>
        <h1>Review</h1>
        <h4>Enter the book name: </h4>
            <input type="text" defaultValue="Becoming" id="bookInput"/>
        <br />
        <Button variant="primary" onClick={handleButtonClick}>Search Review</Button>
            {loading  ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">loading...</span>
                </Spinner>
                ) : (
                    <div>
                    {review.length > 0 ? (
                        <div>
                            {review.map((review, index) => (
                                <Card key={index} style={{ margin: '3% 10%' }}>
                                    <Card.Body>
                                        <Card.Title>Title: {review.book_title}</Card.Title>
                                        <Card.Text><b>Author:</b> {review.book_author}</Card.Text>
                                        <Card.Text><b>Publication Date:</b> {review.publication_dt}</Card.Text>
                                        <Card.Text><b>Review:</b> {review.summary}</Card.Text>
                                        <Card.Text><b>Reviewer:</b> {review.byline}</Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <p>No reviews found for this book</p>
                    )}
                </div>
                )}
        </div>
    );
}

export default Review;