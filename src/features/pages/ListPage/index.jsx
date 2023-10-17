import React, { useState } from 'react';
import TodoList from '../../components/TodoList';
import { useLocation, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom';
import queryString from 'query-string';
import { useEffect } from 'react';
import TodoForm from '../../components/TodoForm';

ListPage.propTypes = {

};

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        }
    ];

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilteredStatus(params.status || 'all');
    }, [location.search])

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };

        setTodoList(newTodoList);

        console.log(todo, idx);
    };

    const handleShowAllClick = () => {
        // setFilteredStatus('all');
        const queryParams = { status: 'all' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        });
    };
    const handleShowCompletedClick = () => {
        const queryParams = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        });
    };
    const handleShowNewClick = () => {
        const queryParams = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        });
    };

    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || todo.status === filteredStatus)
    const handleTodoFormSubmit = (values) => {
        console.log('Form submit: ', values)
    }
    return (
        <div>
            <h3>What to do</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <h3>TODO LIST</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick}></TodoList>
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;