import react from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Outline of how it works
// https://react-bootstrap.netlify.app/docs/forms/overview/?

const UserSearch = ({setUser, onSubmit}) => {
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit();
    }

    function onUserInput(e) {
        console.log(e.target.value);
        setUser(e.target.value);
    }


    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Twitter Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Search..."
                        onChange={onUserInput}
                    />
                    <Button variant="primary" type="submit">Search</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default UserSearch;