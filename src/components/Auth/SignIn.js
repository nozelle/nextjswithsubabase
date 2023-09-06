// @ts-nocheck
'use client';

import { useState } from 'react';
// eslint-disable-next-line import/no-duplicates
import React from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import 'src/styles/globals.css';
const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const SignIn = () => {
  const supabase = createClientComponentClient();
  const [errorMsg, setErrorMsg] = useState(null);

  async function signIn(formData) {
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setErrorMsg(error.message);
    }
  }

  return (
    <div className=" flex min-h-screen flex-col items-center justify-center py-2">
      <h2> NEXT JS WITH SUPABASE + TAILWIND Css </h2>
    <div className="card">
      <h2 className="w-full text-center">Sign In</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={signIn}
      >
        {({ errors, touched }) => (
          <Form className="column w-full">
            <label htmlFor="email">Email</label>
            <Field
              className={cn('input', errors.email && touched.email && 'bg-red-50')}
              id="email"
              name="email"
              placeholder="harenprabu@gmail.com"
              type="email"
            />
            {errors.email && touched.email ? (
              <div className="text-red-600">{errors.email}</div>
            ) : null}

            <label htmlFor="email">Password</label>
            <Field
              className={cn('input', errors.password && touched.password && 'bg-red-50')}
              id="password"
              name="password"
              type="password"
            />
            {errors.password && touched.password ? (
              <div className="text-red-600">{errors.password}</div>
            ) : null}

           {/* <Link href="/reset-password" className="link w-full">
              Forgot your password?
            </Link> */}

            <button className="button-inverse w-full" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {errorMsg && <div className="text-red-600">{errorMsg}</div>}
      <Link href="/sign-up" className="link w-full">
        Don&apos;t have an account? Sign Up.
      </Link>
    </div>
    </div>
  );
};

export default SignIn;
