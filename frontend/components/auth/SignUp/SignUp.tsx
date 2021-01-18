import AuthInterface from "@Components/data/auth.d";
import { Button } from "@Components/shareable/ButtonsStyles";
import { CustomRadioGroup } from "@Components/shareable/RadioStyles";
import {
  CustomSelect,
  ErrorMessageValidation,
} from "@Components/shareable/styles";
import { SignForm } from "../styles";
import Link from "next/link";
import Cities from "public/citydata.json";
import { useState } from "react";
export default (form: AuthInterface.ISignUpProps) => {
  const [filterCities, setFilterCities] = useState<string[]>([]);

  const handleSelectCountry = (e) => {
    console.log(e.target.value);
    const { name, states } = Cities.find(
      (x) => x.name === e.target.value.toString(),
    );
    const ev = {
      target: {
        name: "country",
        value: name,
      },
    };
    form.handleChange(ev);
    setFilterCities(states);
  };
  return (
    <SignForm>
      <div className="sign-body">
        <div className="title">Sign Up</div>
        <div className="column-item">
          <div className="input-group required">
            <div className="icon">
              <i className="mdi mdi-account-outline"></i>
            </div>
            <input
              type="text"
              className="my-input"
              name="name"
              value={form.name}
              onChange={form.handleChange}
              placeholder="Name"
            />
            <ErrorMessageValidation
              display={form.validation.error === "name" ? true : false}
            >
              {form.validation.message}
            </ErrorMessageValidation>
          </div>
        </div>
        <div className="column-item">
          <div className="input-group required">
            <div className="icon">
              <i className="mdi mdi-account-outline"></i>
            </div>
            <input
              type="text"
              className="my-input"
              onChange={form.handleChange}
              value={form.lastName}
              name="lastName"
              placeholder="Last name"
            />
            <ErrorMessageValidation
              display={
                form.validation.error === AuthInterface.ErrorValidation.Lastname
                  ? true
                  : false
              }
            >
              {form.validation.message}
            </ErrorMessageValidation>
          </div>
        </div>
        <div className="column-item">
          <div className="input-group">
            <div className="icon">
              <i className="mdi mdi-email-outline"></i>
            </div>
            <input
              type="email"
              className="my-input"
              value={form.email}
              onChange={form.handleChange}
              name="email"
              placeholder="Email Address"
            />
            <ErrorMessageValidation
              display={
                form.validation.error === AuthInterface.ErrorValidation.Email
                  ? true
                  : false
              }
            >
              {form.validation.message}
            </ErrorMessageValidation>
          </div>
        </div>
        <div className="column-item">
          <div className="input-group">
            <div className="icon">
              <i className="mdi mdi-account-outline"></i>
            </div>
            <input
              type="text"
              className="my-input"
              value={form.username}
              onChange={form.handleChange}
              name="username"
              placeholder="User Name"
            />
            <ErrorMessageValidation
              display={
                form.validation.error === AuthInterface.ErrorValidation.Username
                  ? true
                  : false
              }
            >
              {form.validation.message}
            </ErrorMessageValidation>
          </div>
        </div>
        <div className="column-item">
          <div className="input-group">
            <CustomSelect defaultValue={0} onChange={handleSelectCountry}>
              <option value={0}>ُSelect Country</option>
              {Cities?.map((item, index) => {
                return (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </CustomSelect>
            <ErrorMessageValidation
              display={
                form.validation.error === AuthInterface.ErrorValidation.Country
                  ? true
                  : false
              }
            >
              {form.validation.message}
            </ErrorMessageValidation>
          </div>
        </div>
        <div className="column-item">
          <div className="input-group">
            <CustomSelect
              defaultValue={0}
              onChange={(e) => {
                const ev = {
                  target: {
                    name: "city",
                    value: e.target.value,
                  },
                };
                form.handleChange(ev);
              }}
            >
              <option value={0}>ُSelect City</option>
              {filterCities?.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </CustomSelect>
            <ErrorMessageValidation
              display={
                form.validation.error === AuthInterface.ErrorValidation.Country
                  ? true
                  : false
              }
            >
              {form.validation.message}
            </ErrorMessageValidation>
          </div>
        </div>
        <div className="column-item d-flex">
          <h6>Gender: </h6>
          <CustomRadioGroup>
            <label className="radio-label">
              Male
              <input
                type="radio"
                checked={form.gender === "Male"}
                name="radio"
                onChange={(e) => {
                  if (e.target.checked == true) {
                    const ev = {
                      target: {
                        name: "gender",
                        value: "Male",
                      },
                    };
                    form.handleChange(ev);
                  }
                }}
              />
              <span className="checkmark"></span>
            </label>
            <label className="radio-label">
              Female
              <input
                type="radio"
                checked={form.gender === "Female"}
                name="radio"
                onChange={(e) => {
                  if (e.target.checked == true) {
                    const ev = {
                      target: {
                        name: "gender",
                        value: "Female",
                      },
                    };
                    form.handleChange(ev);
                  }
                }}
              />
              <span className="checkmark"></span>
            </label>
          </CustomRadioGroup>
          <ErrorMessageValidation
            display={
              form.validation.error === AuthInterface.ErrorValidation.Gender
                ? true
                : false
            }
          >
            {form.validation.message}
          </ErrorMessageValidation>
        </div>
        <div className="column-item">
          <div className="input-group">
            <div className="icon">
              <i className="mdi mdi-lock-outline"></i>
            </div>
            <input
              type="password"
              value={form.password}
              name="password"
              onChange={form.handleChange}
              className="my-input"
              placeholder="Password"
            />
            <ErrorMessageValidation
              display={
                form.validation.error === AuthInterface.ErrorValidation.Password
                  ? true
                  : false
              }
            >
              {form.validation.message}
            </ErrorMessageValidation>
          </div>
        </div>
        <div className="column-item">
          <div className="input-group">
            <div className="icon">
              <i className="mdi mdi-lock-outline"></i>
            </div>
            <input
              type="password"
              name="rePassword"
              onChange={form.handleChange}
              value={form.rePassword}
              className="my-input"
              placeholder="Re-Enter Password"
            />
            <ErrorMessageValidation
              display={
                form.validation.error ===
                AuthInterface.ErrorValidation.RePassword
                  ? true
                  : false
              }
            >
              {form.validation.message}
            </ErrorMessageValidation>
          </div>
        </div>
        <div
          className="column-item mt-2"
          onClick={() => {
            const ev = {
              target: {
                name: "isAcceptILegal",
                value: !form.isAcceptILegal,
              },
            };
            form.handleChange(ev);
          }}
        >
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="isAcceptILegal"
              onChange={form.handleChange}
              checked={form.isAcceptILegal}
            />
            <span className="checkmark"></span>
          </label>
          <span className="term">
            Agree to <a href="#">terms and conditions</a>
          </span>
        </div>

        <div className="button-sign">
          <Button className="btn-default" onClick={form.handleSubmit}>
            Sign Up<i className="mdi mdi-chevron-right"></i>
          </Button>
        </div>
        <div className="login">
          <span className="text">
            Don't have an account?{" "}
            <Link shallow href="/auth/login">
              <a>Sign In</a>
            </Link>
          </span>
        </div>
      </div>
    </SignForm>
  );
};
