import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  Heading,
  SubHeading,
  Wrapper,
  Container,
  SubWrapper,
  Box,
  Section,
  Logo,
  MainButton,
  Text,
  HeaderWrapper,
} from "../style/style";

export const Header = () => {
  return (
    <Container>
      <Box>
        <Wrapper Display marg>
          <SubWrapper wid >
            <Section marg>
              <Text color marg font>
                <BsFillTelephoneFill className="me-2" />
              </Text>
              <Text color marg font>
                +9417999568
              </Text>
            </Section>
          </SubWrapper>
          <Section wid marg>
            <MainButton>
              <button>Login</button>
            </MainButton>
            <MainButton>
              <button>Register</button>
            </MainButton>
          </Section>
        </Wrapper>
      </Box>
      <Wrapper align>
        <HeaderWrapper wid>
          <Logo>
            <img src="img/istockphoto-1172387977-170667a.jpg" alt="" />
          </Logo>
        </HeaderWrapper>
        <HeaderWrapper>
          <Heading colss>
            Refigeration & Air-condition Servicing Sector Society
          </Heading>
          <SubHeading cols>Regtd.No.4367 of 2014 Chandigarh,india</SubHeading>
        </HeaderWrapper>
      </Wrapper>
    </Container>
  );
};
