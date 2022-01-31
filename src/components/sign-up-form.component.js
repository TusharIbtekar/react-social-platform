import { ErrorMessage, Field, Form, Formik } from "formik";
import DatePicker from "react-datepicker";
import loginSchema from "../schemas/login.schema";

const SignUp = (props) => {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          firstName:"",
          lastName:"",
          dateOfBirth: new Date(),
          gender:"",
        }}
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
        }}
      >
        {(formikProps) =>(
          <Form
            onSubmit={formikProps.handleSubmit}
          >
            <div className="form-group d-flex flex-row">
              <div>
                <label htmlFor="firstName" className="form-label"> First name </label>
                <Field
                    className="form-control" type="text" id="firstName" name="firstName"
                />
                <div className="invalid-feedback d-block"> <ErrorMessage name="firstName" /></div>
              </div>
              <div className="pl-5">
                <label htmlFor="lastName" className="form-label"> Last name </label>
                <Field
                    className="form-control" type="text" id="lastName" name="lastName"
                />
                <div className="invalid-feedback d-block"> <ErrorMessage name="lastName" /></div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label"> Email address </label>
              <Field
                className="form-control" type="text" id="email" name="email"
              />
              <div className="invalid-feedback d-block"> <ErrorMessage name="email" /></div>
            </div>

            <div className="form-group">
              <label htmlFor="dateOfBirth" className="form-label"> Date of Birth </label>
              {/* <Field
                className="form-control" type="text" id="dateOfBirth" name="dateOfBirth"
              /> */}
              <DatePicker 
                selected={formikProps.values.dateOfBirth}
                dateFormat="MMMM d, yyyy"
                className="form-control"
                name="dateOfBirth"
                onChange={date => formikProps.setFieldValue('dateOfBirth', date)}
                />
              <div className="invalid-feedback d-block"> <ErrorMessage name="dateOfBirth" /></div>
            </div>

            <div className="form-group">
              <label htmlFor="gender" className="form-label"> Gender </label>
              {/* <Field
                className="form-control" type="text" id="gender" name="gender"
              /> */}
              <select
                name="gender"
                value={formikProps.values.gender}
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                style={{ display: 'block' }}
              >
                <option value="" label="Select a gender" />
                <option value="male" label="Male" />
                <option value="female" label="Female" />
                <option value="others" label="Others" />
              </select>
              <div className="invalid-feedback d-block"> <ErrorMessage name="gender" /></div>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label"> Password </label>
              <Field
                className="form-control" type="text" id="password" name="password"
              />
              <div className="invalid-feedback d-block"> <ErrorMessage name="password" /></div>
            </div>

            <button type="submit" className="btn btn-primary">SignUp</button>

          </Form>

        )} 
      </Formik>
      
    </>
  );
};

export default SignUp;
