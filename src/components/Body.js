import React from "react";
import styled from "styled-components";

const Body = () => {
	return (
		<BodyContainer>
			<GoogleLogoContainer src="https://dvg.co.il/wp-content/uploads/2019/12/google-logo-background.png" />
			<InputContainer></InputContainer>
		</BodyContainer>
	);
};

export default Body;

const BodyContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 600px;
	background-color: white;
	justify-content: center;
	align-items: center;
`;

const GoogleLogoContainer = styled.img`
	width: 400px;
`;

const InputContainer = styled.input`
	background-color: white;
	margin-top: 30px;
	width: 500px;
	height: 44px;
	border: 0.5px solid #5f6368;
	border-radius: 24px;
`;
