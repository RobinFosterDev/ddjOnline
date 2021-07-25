import "./App.css";
import reviewImageOne from "./Images/tactical-tokens-custom-token 0.png";
import reviewImageTwo from "./Images/tactical-tokens-custom-token 1.png";
import reviewImageThree from "./Images/tactical-tokens-custom-token 2.png";
import fiveStars from "./Images/free-review-stars-png-download-free-clip-art-free-clip-art-on-review-stars-png-3000_700.png";

function Header() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">DDJ Decoding</span>
      </div>
    </nav>
  );
}

function Main(props) {
  return (
    <div
      className="container-bg-image p-5 text-center mb-5 "
      // style="background-image: url('https://mdbootstrap.com/img/new/slides/003.jpg');"
    >
      <div className="row mb-5">
        <h1>DDJ Decoding</h1>
      </div>
      <div className="row-justify-content-md-center mb-5">
        <h2>You got an encoded manuscript? We have the transcript.</h2>
      </div>
      <div className="row-my-5 ">
        <div className="col">
          {/* <Button variant="primary">Get a quote today</Button> */}
          <button type="button" class="btn btn-primary">
            Get a quote today
          </button>
        </div>
      </div>
    </div>
  );
}

function Reviews(props) {
  return (
    <div className="container-mt-3">
      <div className="row align-items-center mb-5">
        {props.reviews.map((review) => (
          <div className="col d-flex justify-content-center" key={review.id}>
            {/* {review.title} */}
            <div className="card" style={{ width: "18rem" }}>
              <img src={review.imageURL} class="card-img-top" alt="Test" />
              <img src={fiveStars} class="card-img-top" alt="Test"></img>
              <div className="card-body">
                <p className="card-text">{review.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer(props) {
  return (
    <div className="container">
      <div className="row justify-content-end">
        <footer>
          <p>Copyright {props.year}</p>
        </footer>
      </div>
    </div>
  );
}

const reviews = [
  {
    review: '"This man decoded me so hard I had to quit encoding" - Susan',
    image: reviewImageOne,
  },
  {
    review:
      '"I found a secret note, this man shone the torch on some family secrets" - Jasmyne',
    image: reviewImageTwo,
  },
  {
    review: '"Chill dude, good tea" - Timothy',
    image: reviewImageThree,
  },
];

const reviewObjectifier = reviews.map((review, i) => ({
  id: i,
  title: review.review,
  imageURL: review.image,
}));

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Reviews reviews={reviewObjectifier} />
      <Footer year={new Date().getFullYear()} style={{ textAlign: "right" }} />
    </div>
  );
}

export default App;
