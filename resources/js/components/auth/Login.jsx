import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import { Form, Button } from "react-bootstrap";

function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    function submit(e) {
        e.preventDefault();
        console.log(data);
        post("/login", data);
    }

    console.log(errors);
    return (
        <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                {errors?.email && <div>{errors?.email}</div>}
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                    }
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                    }
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    label="Check me out"
                    onChange={(e) =>
                        setData({ ...data, remember: e.target.value })
                    }
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Login;
