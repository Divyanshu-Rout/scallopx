import styled from "styled-components";
import {
  rem, xl, md, sm
} from "../../config/variables";

export const CompaniesLogoStyle = styled.section`
  width: 100%;
  padding: ${rem(60)} 0;
  ${xl(`
    padding: ${rem(50)} 0;
  `)}
  ${md(`
    padding: ${rem(40)} 0;
  `)}
  ${sm(`
    padding: ${rem(30)} 0;
  `)}
`;

export const ComapnyLogoList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SingleLogo = styled.div`
  margin-right: ${rem(50)};
  ${sm(`
    margin-right: ${rem(30)};
  `)}
`;