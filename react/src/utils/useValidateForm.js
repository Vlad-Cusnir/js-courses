import { useState } from "react";import { toast } from "react-toastify";

function validateInput(values, schema) {
  try {
    schema.validateSync(values, { abortEarly: false });
    return null;
  } catch (e) {
    const res = {};
    for (const error of e.inner) {
      res[error.path] = error.message;
    }
    return res;
  }
}

export function useValidateForm(schema, initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(null);
  const [shouldValidateAsYouType, setShouldValidateAsYouType] = useState(false);

  function isValid() {
    const ret = validateInput(values, schema);
    if(ret === null) {
      setErrors(null);
      return true;
    }

    setErrors(ret);
    setShouldValidateAsYouType(true);
    return false;
  }

  function validateAsYouType(values) {
    if (shouldValidateAsYouType) {
      const errors = validateInput(values, schema);
      setErrors(errors);
    }
  }

  function handleSubmit(onSubmit) {
    return (e) => {
      e.preventDefault();
    
      if(!isValid(values)) {
        return;
      }

      onSubmit(values);
    }
  }

  function handleInputChange(e) {
      // const newValues = { ...values };
      // newValues[e.target.name] = e.target.value;
      // setValues(newValues);
      // setValues({ ...values, [e.target.name]: e.target.value })

      const newValues = { ...values, [e.target.name]: e.target.value };
      validateAsYouType(newValues);
      setValues(newValues);
      // values este inca valoarea veche de dinainte de set !!!!!!!!!!!!
  }

  return { errors, values, handleSubmit, handleInputChange };
}
