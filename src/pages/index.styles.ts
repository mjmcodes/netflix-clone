import styled from "styled-components";

export const Container = styled.div`
   max-width: 448px;
   margin: 0 auto;
   background: rgba(0, 0, 0, 0.75);
   padding: 68px;
   border-radius: 6px;

   h1 {
      font-size: 32px;
      font-weight: 600;
      font-weight: 500;
   }
`;

export const SignUpIntro = styled.div`
   margin-bottom: 32px;
   h1 {
      font-size: 28px;
   }
   p {
      color: ${(p) => p.theme.textGray};
   }
`;

export const FooterWrapper = styled.div`
   color: ${(p) => p.theme.textGray};
   margin-top: 42px;
   a {
      color: white;
   }
`;

export const AlertMessage = styled.div`
   background: ${(p) => p.theme.alert};
   padding: 12px;
   font-size: 14px;
   border-radius: 4px;
`;
