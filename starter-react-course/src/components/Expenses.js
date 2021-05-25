import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.props[0].title}
        amount={props.props[0].amount}
        date={props.props[0].date}
      />
      <ExpenseItem
        title={props.props[1].title}
        amount={props.props[1].amount}
        date={props.props[1].date}
      />
      <ExpenseItem
        title={props.props[2].title}
        amount={props.props[2].amount}
        date={props.props[2].date}
      />
      <ExpenseItem
        title={props.props[3].title}
        amount={props.props[3].amount}
        date={props.props[2].date}
      />
    </div>
  );
}

export default Expenses;
