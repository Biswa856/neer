import React from 'react'
import { Form,Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

export default function ArtistPost() {
    return (
        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body className="text-center">
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                </Form>
            </Card.Footer>
        </Card>
    )
}
