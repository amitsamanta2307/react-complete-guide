import React, { ReactNode } from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = (props: {
  id: string,
  children?: ReactNode,
  onDelete: (goalId: string) => void
}) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
