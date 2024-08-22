"use client";

import { useState } from "react";
import { User } from "../types/users";

type CounterProps = {
  users: User[];
};

const Counter = ({ users }: CounterProps) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>There are {users.length} users</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </div>
  );
};

export default Counter;
