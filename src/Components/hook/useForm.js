import { useState } from "react";

export const useFormzin = (initialState) => {
  const [form, setForm] = useState(initialState);
  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  return [form, onChange];
};
