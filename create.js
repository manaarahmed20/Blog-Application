import { useState } from 'react';
import styled from 'styled-components';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTitle('');
    setBody('');
  };

  return (
    <div>
      <h1>Create New Post</h1>
      {success && <p>Post created successfully!</p>}
      <Form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Body</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  button {
    align-self: flex-start;
  }
`;

export default CreatePost;
