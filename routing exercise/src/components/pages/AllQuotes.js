import QuoteList from '../quotes/QuoteList';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: 'this is a quote! NOT!'},
    {id: 'q2', author: 'Foo', text: 'Learning React is GREAT! mnah...'},
];
const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />
};

export default AllQuotes;