import react from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Outline of how it works
// https://react-bootstrap.netlify.app/docs/forms/overview/?

const UserSearch = ({setUser, setPassToAI, setCount, onSubmit}) => {
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit();
    }

    function onUserInput(e) {
        console.log(e.target.value);
        setUser(e.target.value);
    }

    function onCountInput(e) {
        console.log(e.target.value);
        setCount(parseInt(e.target.value));
    }

    function onSwitch(e) {
        console.log(e.target.checked);
        setPassToAI(e.target.checked);
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
                    <Form.Control
                        type="number"
                        placeholder={"Enter a number..."}
                        onChange={onCountInput}
                        />
                    <Button variant="primary" type="submit">Search</Button>
                    <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        label="Analyse tweets"
                        onChange={onSwitch}
                    />
                </Form.Group>
            </Form>
        </div>
    )
}

export default UserSearch;