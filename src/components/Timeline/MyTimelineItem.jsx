import React from "react";
import { deleteExpense } from "../../services/ApiManager";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyTimelineItem = (props) => {
  const { expense, handleGetExpenses } = props;
 
  const handleDelete = async function() {
    try {
      await deleteExpense(expense._id);
      handleGetExpenses();
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };
  return (
    <div>
      <Card style={{ width: '29em' }}>
      
      <Card.Body>
        <Card.Title>{expense.title}</Card.Title>
        <Card.Text>
        {expense.amount} NIS
        </Card.Text>
        <Button variant="warning" onClick={handleDelete}>delete</Button>
      </Card.Body>
    </Card>

    </div>
  );
};

export default MyTimelineItem;
