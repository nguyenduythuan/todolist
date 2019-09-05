const validate = values => {
  const err = {};
  const { title } = values;
  if (!title) {
    err.title = 'Vui long nhap title';
  } else if (title.trim() && title.length < 5) {
    err.title = 'Vui long nhap title nhieu hon 5 ki tu';
  }
  return err;
};

export default validate;
