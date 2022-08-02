import React from 'react';
import { useRef } from 'react';
import { useForm } from "react-hook-form";
import "./styles.css";

const Validation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const password = useRef();
  password.current = watch("password");

  console.log(watch("email"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      {/* email 정규표현식 */}
      <input type="email" name="email" id="email"{...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
      {/** email error */}
      {errors.email && <p>this email field is required</p>}

      <label>Name</label>
      <input type="text" name="name" id="name"{...register('name', { required: true, maxLength: 10 })} />
      {/** name error */}
      {errors.name && errors.name.type === "required" && <p>this name field is required</p>}
      {errors.name && errors.name.type === "maxLength" && <p>this name maxlength over required</p>}

      <label>Password</label>
      <input type="password" name="password" id="password"{...register('password', { required: true, minLength: 8, maxLength: 256 })} />
      {/** password error */}
      {errors.password && errors.password.type === "required" && <p>this password field is required</p>}
      {errors.password && errors.password.type === "minLength" && <p>this password maxlength shut required</p>}
      {errors.password && errors.password.type === "maxLength" && <p>this password maxlength over required</p>}

      <label>Password confirm</label>
      <input type="password" name="password_confirm" id="password_confirm"{...register('password_confirm', { required: true, validate: (value) => value === password.current })} />
      {/** password_confirm error */}
      {/* {watch("password") !== watch("password_confirm") && <p>this password_confirm field check plz</p>} */}
      {errors.password_confirm && errors.password_confirm.type === "required" && <p>this password_confirm field is required</p>}
      {errors.password_confirm && errors.password_confirm.type === "validate" && <p>this password_confirm field check plz</p>}


      {/* <input defaultValue="test" {...register("example")} />
      <input {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <p>This field is required</p>} */}

      <input type="submit" />
    </form>
  );
};

export default Validation; 