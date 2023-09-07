import SingleBook from "./SingleBook";

const BookList = (props) => (
  <div className="container">
    <div className="row">
      {props.array.map((book) => (
        <SingleBook book={book} title={book.title} img={book.img} key={book.asin}></SingleBook>
      ))}
    </div>
  </div>
);
export default BookList;
