import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

interface formData {
    name : string,
}

const AddCategory = (props:any) => {
  const navigate = useNavigate()
    const { register, handleSubmit} = useForm<formData>()
    const OnHandSubmit:SubmitHandler<formData> =  (data:formData)  => {
        props.Onadd(data) 
        navigate("/Admin/show/category")
    }
  return (
    <div>
    <form onSubmit={handleSubmit(OnHandSubmit)}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Nhập Name</label>
    <input type="text" className="form-control"  {...register("name", {
      required : true
    })} id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <button type="submit" className="btn btn-primary">Thêm danh mục</button>
</form>

    </div>
  )
}

export default AddCategory