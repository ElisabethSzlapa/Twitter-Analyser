import react from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Outline of how it works
// https://react-bootstrap.netlify.app/docs/forms/overview/?

const UserSearch = () => {
    const [user, setUser] = react.useState("");
    function handleSubmit(e) {
        e.preventDefault();
        console.log(user);
    }

    function onUserInput(e) {
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
                        value={user}
                        onChange={onUserInput}
                    />
                    <Button variant="primary" type="submit">Search</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default UserSearch;