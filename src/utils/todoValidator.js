const todoValidator = ({ title, content }) => {
  let status = '';

  if (title.trim() === '' && content.trim() === '') {
    status = 'ALL_ALERT';
  } else if (title.trim() === '') {
    status = 'TITLE_ALERT';
  } else if (content.trim() === '') {
    status = 'CONTENT_ALERT';
  } else {
    status = 'CREATE_TODO';
  }

  return status;
};

export default todoValidator;
