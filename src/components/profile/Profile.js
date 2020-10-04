import React from "react";
import styled from "styled-components";
import FormInput from "../common/FormInput";
import Button from "../common/Button";
import Media from "../../Media";
import MobileProfile from "./Mobile.Profile";

import useForm from "../../hooks/useForm";

const initialValues = {
  firstName: "Jonathan",
  lastName: "Bolton",
  email: "jonathan.bolton@gmail.com",
  mobile: "887777777",
};

function Profile() {
  const { values, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit: (values) => console.log({ values }),
  });
  return (
    <>
      <Media pc>
        <ProfileFormContainer>
          <FormRow>
            <FormInput
              name="name"
              label="First Name"
              value={values.firstName}
              onChange={handleChange}
            />
            <FormInput
              name="lastname"
              label="Last Name"
              value={values.lastName}
              onChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <FormInput
              name="email"
              type="email"
              label="Email Address"
              value={values.email}
              onChange={handleChange}
            />
            <FormInput
              name="number"
              type="tel"
              label="Mobile Number"
              value={values.mobile}
              onChange={handleChange}
            />
          </FormRow>
          <ActionContainer>
            <Button
              label="Save"
              type="primary"
              buttonWidth="150px"
              onClick={handleSubmit}
            />
            <Button label="Update Password" type="empty" buttonWidth="200px" />
          </ActionContainer>
        </ProfileFormContainer>
      </Media>
      <Media mobile>
        <SettingLabel>Account Settings</SettingLabel>
        <MobileProfile />
      </Media>
    </>
  );
}

const ProfileFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5em;
  padding: 1em 6em;
`;
const ActionContainer = styled.div`
  display: flex;
`;
const SettingLabel = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.larger};
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
`;
const FormRow = styled.div`
  display: flex;
  margin-bottom: 2em;
  justify-content: space-between;
`;

export default Profile;
