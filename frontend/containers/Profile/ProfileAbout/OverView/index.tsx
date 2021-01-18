import CheckBox from "@Components/shareable/Checkbox";
import RadioButton from "@Components/shareable/RadioButton";
import { SEX } from "@Constants/consts";
import React, { useState } from "react";
import AddProperty from "../AddProperty";
import PropertyInfo from "../PropertyInfo";
import {
  Root,
  Form,
  FormGroup,
  Title,
  Input,
  TextArea,
  SaveForm,
  FormButton,
  Bottom,
} from "./style";

const OverView = () => {
  const [isCheck, setCheck] = useState(true);
  const [sex, setSex] = useState("male");

  return (
    <Root>
      <Form>
        <FormGroup>
          <Title>Default Name</Title>
          <Input />
        </FormGroup>
        <FormGroup>
          <Title>Default Name</Title>
          <Input />
        </FormGroup>
        <FormGroup>
          <Title>Default Name</Title>
          <TextArea name="description" cols="30" rows="3" />
        </FormGroup>
        <FormGroup>
          <Title>Checkbox Name</Title>
          <div style={{ margin: "8px 0" }}>
            <CheckBox
              label="Hello"
              checked={isCheck}
              onClick={() => setCheck(!isCheck)}
            />
          </div>
        </FormGroup>
        <FormGroup>
          <Title>Checkbox Name</Title>
          <div style={{ margin: "10px 0" }}>
            {SEX?.map((ss) => {
              return (
                <RadioButton
                  key={ss.id}
                  label={ss.label}
                  selected={ss.value === sex}
                  onClick={() => setSex(ss.value)}
                  style={{ marginRight: 12 }}
                />
              );
            })}
          </div>
        </FormGroup>
      </Form>
      <SaveForm>
        <FormButton>
          <i className="mdi mdi-earth" style={{ marginRight: 5 }} />
          Public
        </FormButton>
        <div style={{ display: "flex" }}>
          <FormButton>Cancel</FormButton>
          <FormButton isDefault style={{ marginLeft: 4 }}>
            Save
          </FormButton>
        </div>
      </SaveForm>
      <AddProperty style={{ marginBottom: 12 }}>Add a Property</AddProperty>
      <AddProperty style={{ marginBottom: 12 }}>Add a Property</AddProperty>
      <PropertyInfo
        title="+989190001125"
        subTitle="mobile"
        style={{ marginBottom: 12 }}
      >
        <i className="mdi mdi-phone" />
      </PropertyInfo>
      <Bottom>
        <PropertyInfo
          title="Live In Anime"
          subTitle="other Description"
          style={{ marginBottom: 12 }}
        >
          <i className="mdi mdi-home" />
        </PropertyInfo>
        <div style={{ display: "flex" }}>
          <FormButton circle>
            <i className="mdi mdi-earth" />
          </FormButton>
          <FormButton circle style={{ marginLeft: 4 }}>
            <i className="mdi mdi-dots-horizontal" />
          </FormButton>
        </div>
      </Bottom>
    </Root>
  );
};

export default OverView;
