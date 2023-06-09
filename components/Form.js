import { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { DataContext } from "./MyContext";

export default function Form() {
  const [data, setData] = useContext(DataContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (input) => {
    const id = nanoid();
    setData([...data, { id, name: input.name }]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
         <input type="text" autoComplete="off" {...register("name")} />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
