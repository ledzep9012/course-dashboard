import React from "react";
import styled from "styled-components";
import orderIcon from "./orderIcon.png";
import Button from "../common/Button";
import { ReactComponent as Success } from "./done.svg";
import { ReactComponent as Info } from "./info.svg";
import { ReactComponent as Error } from "./error.svg";
import { ReactComponent as Arrow } from "../profile/arrow.svg";
import Media from "../../Media";
import { mediaQueries, mediaQueriesMax } from "../../mediaQueries";

function OrderCard({
  name,
  orderId,
  orderDate,
  originalPrice,
  currentPrice,
  status,
}) {
  return (
    <Wrapper>
      <Media pc>
        <OrderDetailsWrapper pc>
          <OrderIconWrapper>
            <Icon src={orderIcon} alt="order-icon" />
            <LeftSideDetails>
              <OrderTitle>{name}</OrderTitle>
              <OrderLabelHolder>
                <Label>{`Order Id: ${orderId}`}</Label>
                <Label>{`Order Date: ${orderDate}`}</Label>
              </OrderLabelHolder>
            </LeftSideDetails>
          </OrderIconWrapper>
          <RightSideDetails>
            <StrikeThroughPrice>{`Rs ${originalPrice}`}</StrikeThroughPrice>
            <Price>{`Rs ${currentPrice}`}</Price>
          </RightSideDetails>
        </OrderDetailsWrapper>
        <OrderActionsContainer>
          <ButtonContainer>
            <Button
              label="View Order Details"
              type="empty"
              buttonWidth="200px"
            />
            <Button label="Help" type="empty" buttonWidth="125px" />
            {status === "Failed" ? (
              <Button label="Reorder" type="empty" buttonWidth="125px" />
            ) : null}
          </ButtonContainer>
          <Status color={getColor(status)}>
            {getIconType(status)} &nbsp; {status}
          </Status>
        </OrderActionsContainer>
      </Media>
      <Media mobile>
        <OrderDetailsWrapper>
          <OrderIconWrapper>
            <Icon src={orderIcon} alt="order-icon" />
            <LeftSideDetails>
              <OrderTitle>{name}</OrderTitle>
            </LeftSideDetails>
            <RightSideDetails>
              <Arrow />
            </RightSideDetails>
          </OrderIconWrapper>
        </OrderDetailsWrapper>
        <OrderActionsContainer>
          <div>
            <StrikeThroughPrice
              mobile
            >{`Rs ${originalPrice}`}</StrikeThroughPrice>
            <Price mobile>{`Rs ${currentPrice}`}</Price>
          </div>
          <Status color={getColor(status)}>
            {getIconType(status)} &nbsp; {status}
          </Status>
        </OrderActionsContainer>
        <Border />
        <OrderActionsContainer noPadding>
          <MobileWrapper border>
            <Label>Order ID: </Label>
            <Label>{orderId}</Label>
          </MobileWrapper>
          <MobileWrapper>
            <Label>Purchase Date:</Label>
            <Label>{orderDate}</Label>
          </MobileWrapper>
        </OrderActionsContainer>
      </Media>
    </Wrapper>
  );
}

const getIconType = (type) => {
  switch (type) {
    case "Failed":
      return <Info />;
    case "Pending":
      return <Error />;
    default:
      return <Success />;
  }
};

const getColor = (type) => {
  switch (type) {
    case "Failed":
      return "red";
    case "Pending":
      return "#ffcc00";
    default:
      return "green";
  }
};

const Border = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors["light-gray"]};
`;

const Wrapper = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors["light-gray"]};
  :hover {
    background-color: #f5f4f9;
  }
`;

const Status = styled.div`
  display: flex;
  padding: 0.5em;
  color: ${({ color }) => color};
  svg {
    fill: ${({ color }) => color};
  }
`;
const OrderActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ noPadding }) => (noPadding ? 0 : "1em")};
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
`;
const OrderIconWrapper = styled.div`
  display: flex;
  align-items: center;
  ${mediaQueries("md")`
    padding: 2.5em;
  `};
  ${mediaQueriesMax("md")`
    padding: 1em;
    img {
      height: 50px;
    }
  `};
`;

const Icon = styled.img`
  border: 1px solid ${({ theme }) => theme.colors["light-gray"]};
`;

const StrikeThroughPrice = styled.span`
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme, mobile }) =>
    theme.fontSizes[mobile ? "medium" : "large"]};
  font-weight: ${({ theme, mobile }) =>
    theme.fontWeights[mobile ? "semi" : "bold"]};
`;

const Price = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme, mobile }) =>
    theme.fontSizes[mobile ? "large" : "larger"]};
  font-weight: ${({ theme, mobile }) =>
    theme.fontWeights[mobile ? "bold" : "heavy"]};
`;
const OrderDetailsWrapper = styled.div`
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex: 1;
  justify-content: space-between;
  border-bottom: 1px solid
    ${({ theme, pc }) => (pc ? theme.colors["light-gray"] : "transparent")};
`;

const LeftSideDetails = styled.div`
  display: flex;
  flex-direction: column;
  ${mediaQueries("md")`
    padding: 1em;
  `};
  ${mediaQueriesMax("md")`
    padding: 0.5em;
  `};
`;

const RightSideDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${mediaQueries("md")`
    padding: 3.5em;
  `};
  ${mediaQueriesMax("md")`
    padding: 0em;
    svg {
      fill: black
    }
  `};
`;

const OrderLabelHolder = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1em;
  color: black;
  border-right: ${({ theme, border }) =>
    border ? `1px solid ${theme.colors["light-gray"]}` : "none"};
`;
const OrderTitle = styled.span`
  ${mediaQueries("md")`
    font-size: 24px;
    font-weight: 700;
  `};
  ${mediaQueriesMax("md")`
    font-size: 16px;
    font-weight: 700;
  `};
`;

const Label = styled.span``;

export default OrderCard;
