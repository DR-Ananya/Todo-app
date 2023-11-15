// components/addtodo.tsx

import { FormEvent, useState } from 'react';
import { useTodos } from '../store/todos';

const AddToDo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { handleAddToDo } = useTodos();

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddToDo(title, description);
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddToDo;













