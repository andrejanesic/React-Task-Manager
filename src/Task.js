import { useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const STATUSES = ['To do', 'In progress', 'Complete'];

function Task({ task, taskUpdate, taskRemove }) {
  const nameRef = useRef();
  const descRef = useRef();
  const statusRef = useRef();
  const cardRef = useRef();

  function setStatusColor() {
    if (STATUSES[statusRef.current.value] === 'To do') {
      statusRef.current.className = 'form-select';
      cardRef.current.className = cardRef.current.className.split(' ')
        .filter(i => i != 'bg-success' && i != 'bg-warning').join(' ')
    } else if (STATUSES[statusRef.current.value] === 'In progress') {
      statusRef.current.className = 'form-select bg-warning bg-opacity-75';
      cardRef.current.className = [...cardRef.current.className.split(' ')
        .filter(i => i != 'bg-success'), 'bg-warning'].join(' ')
    } else {
      statusRef.current.className = 'form-select bg-success text-white bg-opacity-75';
      cardRef.current.className = [...cardRef.current.className.split(' ')
        .filter(i => i != 'bg-warning'), 'bg-success'].join(' ')
    }
  }

  function styleNameBlur() {
    nameRef.current.className = nameRef.current.className + ' bg-transparent fw-bold';
  }

  function styleNameFocus() {
    nameRef.current.className = nameRef.current.className.split(' ')
      .filter(i => i != 'fw-bold' && i != 'bg-transparent').join(' ');
  }

  function styleDescBlur() {
    descRef.current.className = descRef.current.className + ' bg-transparent';
  }

  function styleDescFocus() {
    descRef.current.className = descRef.current.className.split(' ')
      .filter(i => i != 'bg-transparent').join(' ');
  }

  useEffect(() => {
    setStatusColor();
  }, [])

  function update(e) {
    // update bg
    setStatusColor();

    taskUpdate(task.id, {
      id: task.id,
      name: nameRef.current.value,
      description: descRef.current.value,
      status: statusRef.current.value,
    });
  }

  function remove(e) {
    taskRemove(task.id);
  }

  return (
    <div className="Task">
      <Card className='bg-opacity-10' ref={cardRef}>
        <Card.Body>
          <Row>
            <Col>
              <Form className="mb-3">
                <InputGroup>
                  <Form.Control
                    type="text"
                    ref={nameRef}
                    as='input'
                    value={task.name}
                    onChange={update}
                    onBlur={styleNameBlur}
                    onFocus={styleNameFocus}
                    className="bg-transparent fw-bold w-75" />
                  <Form.Select
                    ref={statusRef}
                    value={task.status}
                    onChange={update}
                    title={STATUSES[task.status ?? 0] + ' '}>
                    {STATUSES.map((val, index) => {
                      return <option key={index} value={index}>{val}</option>
                    })};
                  </Form.Select>
                </InputGroup>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form className={taskRemove ? 'mb-3' : ''}>
                <Form.Group>
                  <Form.Control
                    ref={descRef}
                    value={task.description}
                    onChange={update}
                    as='textarea'
                    onBlur={styleDescBlur}
                    onFocus={styleDescFocus}
                    className="bg-transparent"
                    rows={3} />
                </Form.Group>
              </Form>
              {taskRemove ?
                <Button variant="outline-danger" size="sm" onClick={remove}>&#x2715;</Button> : null }
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Task;