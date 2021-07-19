import { Fragment,useEffect } from "react";
import { useParams, Route, Link } from "react-router-dom";

import HighlightedQuote from "../quotes/HighlightedQuote";

import { useRouteMatch } from "react-router";

import Comment from "../comments/Comments";

import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  const { quoteId } = params;
  const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  },[sendRequest, quoteId]);

  if (status === 'pending') {
    return <div className="centered">
      <LoadingSpinner />
    </div>
  };

  if (error) {
    return <p className="centered">{error}</p>
  }
  if (!loadedQuote.text) {
    return <p>No Quote Found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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
