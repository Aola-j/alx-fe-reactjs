import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'password must be at least 6 characters long').required('password is required')
})

const formikForm = () => (
    <Formik
        initialValues={{ name: '', email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            console.log(values);
        }}
    >
        {() => (
            <Form>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" />
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password"  />
                <ErrorMessage name='password' component="div" />
                <button type="submit">Submit</button>
            </Form>
        )}
    </Formik>
);

export default formikForm;