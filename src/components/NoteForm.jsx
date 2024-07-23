import { Formik, Field, Form } from "formik";
import ValidationFailed from "./ValidationFailed";
import * as Yup from "yup";
import { useSubmit } from "react-router-dom";

const NoteForm = ({ isCreate, oldData }) => {
  const submit = useSubmit();
  const initialValues = {
    title: oldData ? oldData.title : "",
    content: oldData ? oldData.content : "",
  };

  const NoteSchema = Yup.object({
    title: Yup.string()
      .min(10, "Title is too short.")
      .max(50, "Title is too long.")
      .required("Title is required."),
    content: Yup.string()
      .min(5, "Content is too short.")
      .required("Content is required."),
  });

  const submitHandler = (values) => {
    if (isCreate) {
      submit(values, { method: "POST" });
    } else {
      submit(values, { method: "PATCH" });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={NoteSchema}
      onSubmit={submitHandler}>
      {() => (
        <Form className='w-full h-[calc(100%-3.5rem)] p-3'>
          <div className='w-full h-14 flex items-center justify-between'>
            <p className='text-zinc-500 font-normal'>Characters - 0</p>
            <button
              type='submit'
              className='font-bold px-2 py-1 text-zinc-900 bg-amber-500 rounded-sm'>
              {isCreate ? "Save" : "Save Change"}
            </button>
          </div>
          <div className='w-full mb-2'>
            <label
              htmlFor='title'
              className='text-zinc-500 text-base font-semibold mb-2'>
              Title
            </label>
            <Field
              type='text'
              name='title'
              placeholder='Title'
              className='w-full h-full px-3 py-2 font-bold bg-transparent border-2 border-zinc-800 outline-none'
            />
            <ValidationFailed name='title' />
          </div>
          <div className='w-full'>
            <label
              htmlFor='content'
              className='text-zinc-500 text-base font-semibold mb-2'>
              Content
            </label>
            <Field
              as='textarea'
              name='content'
              rows={13}
              placeholder='What in your mind...'
              className='w-full h-full px-3 py-2 bg-transparent border-2 border-zinc-800 outline-none resize-none'></Field>
            <ValidationFailed name='content' />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NoteForm;
