import React from 'react';
import PropTypes from 'prop-types';
import InputField from 'components/NotFound/form-controls/InputField';
import { useForm } from 'react-hook-form';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
    
};

function TodoForm(props) {
    const form = useForm({
        defaultValues:{
            title: '',
        }
    });

    const handleSubmit = (values) => {
        console.log('Todo Form: ', values)
    }

    return (
        <div>
            Todo Form
            <form onSubmit={handleSubmit}>
                <InputField name="title" label="Todo" form={form}/>
            </form>
        </div>
    );
}

export default TodoForm;