import React from "react";
import styled from "styled-components";
import AppsIcon from "@mui/icons-material/Apps";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<NavContainter>
			<LeftBar>
				<NavLink to={"/about"}>About</NavLink>
				<NavLink to={"/store"}>Store</NavLink>
			</LeftBar>

			<RightBar>
				<NavLink to={"/gmail"}>Gmail</NavLink>
				<NavLink to={"/images"}>Images</NavLink>
				<NavLink to={"/"} style={{ marginTop: 6, color: "gray" }}>
					<AppsIcon />
				</NavLink>
				<NavLink to={"/"} style={{ marginTop: 6, color: "gray" }}>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5VOlpbH2ioO8ZDv8vgKj3zvtmsGawgZ9k8g&usqp=CAU" />
				</NavLink>
			</RightBar>
		</NavContainter>
	);
};

export default Navbar;

const NavContainter = styled.div`
	min-height: 60px;
	background-color: white;
	display: flex;
	justify-content: space-between;
	//box-shadow: 0.5px 0.5px 5px rgba(0, 0, 0, 0.2);
`;

const LeftBar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 20px;
`;

const NavLink = styled(Link)`
	text-decoration: none;
	margin: 0 15px;
	font-weight: 400;
	color: black;
`;
const RightBar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 20px;

	img {
		height: 32px;
		width: 32px;
		border-radius: 50%;
		object-fit: cover;
	}
`;
