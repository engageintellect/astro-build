import { useState } from "react";

export default function React() {
  const [name, setName] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  return (
    <div className="bg-blue-200 shadow-md p-2 rounded-lg">
      <h1>Hello from {name || "React"}.</h1>
      <input
        placeholder="enter name"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
    </div>
  );
}
