import { ErrorMessage, Field, Form, Formik } from "formik";
import loginSchema from "../schemas/login.schema";

const Login = (props) => {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
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
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <Field
                className="form-control"
                type="text"
                id="email"
                name="email"
              />
              <div className="invalid-feedback d-block"> <ErrorMessage name="email" /></div>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <Field
                className="form-control"
                type="text"
                id="password"
                name="password"
              />
              <div className="invalid-feedback d-block"> <ErrorMessage name="password" /></div>
            </div>

            <button type="submit" className="btn btn-primary">Login</button>

          </Form>

        )} 
      </Formik>
      
    </>
  );
};

export default Login;
