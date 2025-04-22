import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactEditor.module.css";
import { toast } from "react-hot-toast";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^(\+?\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,5}[-.\s]?\d{1,5}$/,
      "Invalid phone number format"
    )
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

export default function ContactEditor() {
  const dispatch = useDispatch();

  const handlSubmit = (values, form) => {
    dispatch(addContact(values))
    .unwrap()
    .then(() => {
      toast.success("Contact added successfully"); 
      form.resetForm();
    })
    .catch(() => {
      toast.error("Error adding contact");
    });
    form.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handlSubmit}
        validationSchema={FeedbackSchema}>
        <Form className={css.form}>
          <label htmlFor="name" className={css.label}>
            Name
          </label>
          <Field type="text" name="name" id="name" className={css.input} />
          <ErrorMessage name="name" component="span" />

          <label htmlFor="number" className={css.label}>
            Number
          </label>
          <Field type="text" name="number" id="number" className={css.input} />
          <ErrorMessage name="number" component="span" />

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}