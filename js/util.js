const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
};

const findOutFieldStatus = (fields) => {
  const fieldStatus = {
    valid: true,
    fill: false,
  };

  fields.forEach(field => {
    if (field.validity.valid === false) {
      fieldStatus.valid = false;
    } else if (field.value !== '') {
      fieldStatus.fill = true;
    }
  });

  return fieldStatus;
};

export { formatNumber, findOutFieldStatus }
