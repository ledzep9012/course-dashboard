import React, { useState } from "react";
import styled from "styled-components";
import useForm from "../../hooks/useForm";
import Button from "../common/Button";
import FormInput from "../common/FormInput";
import { ReactComponent as Person } from "../dashboard/person.svg";
import { ReactComponent as Arrow } from "./arrow.svg";
import { ReactComponent as Close } from "./close.svg";

const initialValues = {
  firstName: "Jonathan",
  lastName: "Bolton",
  email: "jonathan.bolton@gmail.com",
  mobile: "887777777",
};

function Profile() {
  const [showModal, setShowModal] = useState(false);
  const { values, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit: (values) => console.log({ values }),
  });
  return (
    <>
      <PersonCard>
        <Person />
        <CardLabelsContainer onClick={() => setShowModal(true)}>
          <LabelContainer>
            <Label primary={true}>Profile Details</Label>
            <Label primary={false}>Personal Info, Change Password</Label>
          </LabelContainer>
        </CardLabelsContainer>
        <Arrow />
      </PersonCard>
      {showModal ? (
        <>
          <Backdrop onClick={() => setShowModal(false)} />
          <ProfileModal>
            <ProfileTitle>
              <span>Profile Details</span>
              <Close onClick={() => setShowModal(false)} />
            </ProfileTitle>
            <Form>
              <FormInput
                name="name"
                label="First Name"
                value={values.firstName}
                onChange={handleChange}
                width="100%"
              />
              <FormInput
                name="lastname"
                label="Last Name"
                value={values.lastName}
                onChange={handleChange}
                width="100%"
              />
              <FormInput
                name="email"
                type="email"
                label="Email Address"
                value={values.email}
                onChange={handleChange}
                width="100%"
              />
              <FormInput
                name="number"
                type="tel"
                label="Mobile Number"
                value={values.mobile}
                onChange={handleChange}
                width="100%"
              />
              <Button
                label="Update Password"
                type="empty"
                buttonWidth="200px"
              />
              <Button
                label="Save"
                type="primary"
                onClick={handleSubmit}
              />
            </Form>
          </ProfileModal>
        </>
      ) : null}
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const PersonCard = styled.div`
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors["gray-light"]};
`;

const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.black};
  span {
    font-size: ${({ theme }) => theme.fontSizes.larger};
  }
`;
const ProfileModal = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  top: unset;
  z-index: 1000;
  min-height: 200px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 12px;
`;
const CardLabelsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

const Label = styled.span`
  color: ${({ theme, primary }) =>
    theme.colors[`${primary ? "dark-gray" : "gray"}`]};
  font-size: ${({ theme, primary }) =>
    theme.fontSizes[`${primary ? "medium" : "small"}`]};
`;

const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0;
  background: #00000080;
`;
export default Profile;
