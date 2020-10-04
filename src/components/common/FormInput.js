import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function FormInput({ label, type, name, value, onChange, width }) {
  return (
    <FormItem width={width}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type || "text"}
        name={name}
        value={value}
        onChange={onChange}
      ></Input>
    </FormItem>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
};

const FormLabel = styled.label`
  max-width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: ${({ theme }) => theme.lineHeight.formItem};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 8px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
`;

const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
  value: props.value,
  name: props.name,
  onChange: props.onChange,
}))`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #e5e5e5;
  background-image: none;
  box-sizing: border-box;

  padding: 12px 24px;
  color: #2c2f42;
  box-shadow: none;
  border-radius: 4px;
  background-clip: padding-box;
  font-size: 15px;
  line-height: 1.2;
  width: 100%;
  transition: all 0.1s;
  :focus {
    outline: 0;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  }
`;

const FormItem = styled.div`
  width: ${(props) => props.width || "45%"};
  flex-direction: column;
  color: ${(props) => props.theme.colors.black};
`;

export default FormInput;
