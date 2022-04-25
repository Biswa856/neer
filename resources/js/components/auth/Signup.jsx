import { Inertia } from "@inertiajs/inertia";
import { useForm, usePage } from "@inertiajs/inertia-react";
import React, { createRef } from "react";
import { Form, Button } from "react-bootstrap";

function Signup() {
    const { processing } = useForm({});
    const { errors,clearErrors } = usePage().props;
    const name = createRef("");
    const email = createRef("");
    const password = createRef("");
    const cnfPassword = createRef("");

    function handleSubmit(e) {
        e.preventDefault();
        var data = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
            confirm_password: cnfPassword.current.value,
        };
        console.log(data);

        Inertia.post("/register", data);
    }


    console.log(errors, processing);
    return (
        <Form onSubmit={handleSubmit}>
            {/* Name Input */}
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" ref={name} onChange={() => clearErrors()}/>
            </Form.Group>
            {errors?.name && <div>{errors?.name}</div>}

            {/* Email Input */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted" ref={email}>
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            {errors?.email && <div>{errors?.email}</div>}

            {/* Password Input */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    ref={password}
                />
            </Form.Group>
            {errors?.password && <div>{errors?.password}</div>}

            {/* Confirm Password */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    ref={cnfPassword}
                />
            </Form.Group>
            {errors?.confirm_password && <div>{errors?.confirm_password}</div>}

            {/* Remember Me Input */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            {/* Submit Data */}
            <Button variant="primary" type="submit" disabled={processing}>
                Submit
            </Button>
        </Form>
    );
}

export default Signup;
