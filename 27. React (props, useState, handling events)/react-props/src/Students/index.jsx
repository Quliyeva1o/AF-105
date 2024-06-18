import { useState } from "react";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [searchedStudents, setSearchedStudents] = useState([]);
  const [student, setStudent] = useState({ name: "", grade: "" });
  return (
    <div>
      <h2>Students</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newStudent = {
            id: new Date().valueOf(),
            name: student.name,
            grade: student.grade,
          };
          setStudents([...students, newStudent]);
          setSearchedStudents([...searchedStudents, newStudent]);
          setStudent({ name: "", grade: "" });
        }}
      >
        <input
          value={student.name}
          onChange={(e) => {
            setStudent({ ...student, name: e.target.value });
          }}
          name="fullName"
          type="text"
          placeholder="student name"
        />
        <input
          value={student.grade}
          onChange={(e) => {
            setStudent({ ...student, grade: e.target.value });
          }}
          name="grade"
          type="number"
          min={0}
          step={5}
          placeholder="student grade"
        />
        <button type="submit">add student</button>
      </form>
      <hr />
      <h4>Students List</h4>
      <button
        onClick={() => {
          const sortedStudents = students.sort((x, y) => x.grade - y.grade);
          setSearchedStudents([...sortedStudents]);
        }}
      >
        sort by grade
      </button>
      <button
        onClick={() => {
          const sortedStudents = students.sort((x, y) =>
            x.name.localeCompare(y.name)
          );
          setSearchedStudents([...sortedStudents]);
        }}
      >
        sort by name
      </button>
      <input
        onKeyUp={(e) => {
         if (e.target.value.trim()=='') {
            setSearchedStudents([...students]);
         }
         else{
            setSearchedStudents([
                ...students.filter((x) =>
                  x.name
                    .toLowerCase()
                    .trim()
                    .includes(e.target.value.trim().toLowerCase())
                ),
              ]);
         }
        }}
        type="text"
        placeholder="search student"
      />
      <ul>
        {searchedStudents &&
          searchedStudents.map((stud) => {
            return (
              <li key={stud.id}>
                {stud.name} ({stud.grade})
                <button
                  onClick={() => {
                    if (window.confirm("are you sure to delete?")) {
                      setStudents(students.filter((x) => x.id != stud.id));
                      setSearchedStudents(
                        students.filter((x) => x.id != stud.id)
                      );
                    }
                  }}
                >
                  x
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Students;
