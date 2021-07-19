import { Fragment } from "react";
import { useParams, Route, Link } from "react-router-dom";

import HighlightedQuote from "../quotes/HighlightedQuote";

import { useRouteMatch } from "react-router";

import Comment from "../comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "this is a quote! NOT!" },
  { id: "q2", author: "Foo", text: "Learning React is GREAT! mnah..." },
];

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  const quote = DUMMY_QUOTES.find((q) => q.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.autor} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comment />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
