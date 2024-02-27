import styled from 'styled-components';

const AppLayout = (props) => {
    return (
        <Centering>
            <FixedWidth>{props.children}</FixedWidth>
        </Centering>
    );
};

const Centering = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e0e0e0; 
  min-height: 100vh; /* Ensure it covers the full height of the viewport */
  min-height: 100vh; /* Ensure it covers the full height of the viewport */
  width: 100%; /* Cover full width of the viewport */

`;
const FixedWidth = styled.div`
  width: 500px;
  padding: 0 20px;
  max-width: 360px;
  margin: 0 auto; /* Center the content horizontally */
  background-color: #ffffff; /* White background for the content area */
  box-shadow: 0 0 10px rgba(0,0,0,0.1); /* Optional: adds a subtle shadow for depth */
  padding: 0 20px; 

  @media (max-width: 360px) { /* 화면 너비가 500px 이하가 되면 요소 너비를 100%로 고정*/
  padding: 0 10px;
  }
`;
export default AppLayout;