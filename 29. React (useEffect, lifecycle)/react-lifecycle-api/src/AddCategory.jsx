import { useEffect, useState } from "react";

const AddCategory = ({ setCategories }) => {
  const [newCategory, setNewCategory] = useState({ name: "", description: "" });
  const [nameError, setNameError] = useState(false);
  const [descError, setDescError] = useState(false);
  useEffect(() => {
    console.log("test: ");
  }, []);

  function checkValidation() {
    const valid = { name: false, description: false };
    if (newCategory.name.length == 0) {
      setNameError(true);
      valid.name = true;
    } else {
      setNameError(false);
      valid.name = false;
    }
    if (newCategory.description.length == 0) {
      valid.description = true;

      setDescError(true);
    } else {
      setDescError(false);
      valid.description = false;
    }

    if (valid.name || valid.description) {
      return false;
    } else {
      return true;
    }
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const valid = checkValidation();
        console.log("valid: ", valid);
        if (valid) {
          fetch("https://northwind.vercel.app/api/categories", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newCategory),
          })
            .then((res) => res.json())
            .then((data) => {
              setCategories((categories) => {
                return [...categories, data];
              });
            })
            .finally(() => {
              setNewCategory({ name: "", description: "" });
            });
        }
      }}
    >
      <input
        value={newCategory.name}
        onChange={(e) => {
          setNewCategory({ ...newCategory, name: e.target.value });
        }}
        style={{ display: "block" }}
        type="text"
        placeholder="enter category name"
      />
      {nameError && (
        <span style={{ color: "red" }}>category name is required</span>
      )}
      <input
        value={newCategory.description}
        onChange={(e) => {
          setNewCategory({ ...newCategory, description: e.target.value });
        }}
        style={{ display: "block" }}
        type="text"
        placeholder="enter category description"
      />
      {descError && (
        <span style={{ color: "red" }}>category description is required</span>
      )}
      <hr />
      <button type="submit">add</button>
    </form>
  );
};

export default AddCategory;
