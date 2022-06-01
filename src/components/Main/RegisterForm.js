import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Registerform = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      confirmemail: '',
      number:'',
      member:'',
      gender:''
    },
    onSubmit: async (values) => {

      try {
        await axios.post("https://recbots-tasks.herokuapp.com/details", values)
        navigate("/dashboard")
      } catch (error) {
        console.log(error)
      }
    }

  })

  return (
    <>
      <section className='userdata '>
        <div className='container '  >
          <div className='row tableform sticky-top text-center'>
            <div className='col-sm'>
              <h1>SUBSCRIPTION</h1>
            </div>
          </div>
          <div className='row mt-4   '>
            <div className="col-sm  my-3  fs-4 " >
              <form className="row g-3 "  onSubmit={formik.handleSubmit}>

                <div className="col-md-4">
                  <label for="validationCustom01" className="form-label">Name</label>
                  <input type="text" name='name' id="validationCustom01" className="form-control" onChange={formik.handleChange} value={formik.values.name} placeholder="Name" required />
                </div>

                <div className="col-md-4">
                  <label for="validationCustom02" className="form-label">Email</label>
                  <input type="email" name='email' id="validationCustom02" className="form-control" onChange={formik.handleChange} value={formik.values.email} placeholder="Email" required />

                </div>
                <div className="col-md-4">
                  <label for="validationCustom02" className="form-label">Confirm Email</label>
                  <input type="email" name='confirmemail' id="validationCustom02" className="form-control" onChange={formik.handleChange} value={formik.values.confirmemail} placeholder="Confirm Email" required />

                </div>
               
                <div className="col-md-6">
                  <label for="validationCustom03" className="form-label">Phone number</label>
                  <input type="number" name='number' id="validationCustom03" className="form-control" onChange={formik.handleChange} value={formik.values.number} placeholder="Phone Number" required />

                </div>
                <div className="col-md-3">
                  <label for="validationCustom04" className="form-label">plan</label>
                  <select className="form-select" name='member' id="validationCustom04" onChange={formik.handleChange} value={formik.values.member} required >
                    <option selected disabled value="">Choose...</option>
                    <option>Silver</option>
                    <option>Gold</option>
                    <option>Platinum</option>
                    <option>Diamond</option>
                  </select>

                </div>
                <div className="col-md-3">
                  <label for="validationCustom04" className="form-label">Gender</label>
                  <select className="form-select" name='gender' id="validationCustom04" onChange={formik.handleChange} value={formik.values.gender} required>
                    <option selected disabled value="">Choose...</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>

                </div>

                <div className="col-12 d-flex justify-conter-center">
                 <Link to="/dashboard"> <button className="subscribe-btn btn btn-primary" type="submit">Subscribe</button></Link>
                </div>
              </form>
            </div>
           

          </div>
        </div>
      </section>
    </>
  )
}

export default Registerform