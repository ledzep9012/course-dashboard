import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Button({
  icon,
  onClick,
  label,
  type,
  iconAlign,
  buttonWidth,
  ...props
}) {
  return (
    <ButtonWrapper
      type="button"
      buttonType={type}
      iconAlign={iconAlign}
      onClick={onClick}
      buttonWidth={buttonWidth}
      {...props}
    >
      {label}
      {icon ? icon : null}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  onClick: () => {}
};

Button.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const ButtonWrapper = styled.button`
  cursor: pointer;
  transition: all 200ms ease-in-out;
  height: ${({ theme }) => theme.height[2] + "px"};
  font-weight: ${({ theme, buttonType }) =>
    buttonType === "empty"
      ? theme.fontWeights.bold
      : theme.fontWeights.bolder};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  ${({ buttonType, theme }) => {
    let background = theme.primary;
    let color = theme.colors.white;
    let border = "1px solid";
    switch (buttonType) {
      case "secondary":
        background = theme.primaryLight + "30";
        color = theme.primary;
        break;
      case "empty":
        background = "transparent";
        color = theme.primary;
        border = "none";
        break;
      default:
        break;
    }
    return `
    background: ${background};
    color: ${color};
    border: ${border};`;
  }}
  width: ${({ buttonWidth, theme }) => buttonWidth || theme.width[4]};
  flex-direction: ${({ alignRight }) => (alignRight ? "row" : "row-reverse")};
  svg {
    width: ${({ theme }) => theme.width[0] + "px"};
    margin: 4px;
    fill: ${({ theme }) => theme.primary};
  }
`;

export default Button;
