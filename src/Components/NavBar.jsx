// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<>
			<Navbar
				key={"lg"}
				expand={"lg"}
				className="bg-body-tertiary  navbar navBar"
			>
				<Container fluid>
					<Navbar.Brand href="#">
						{" "}
						<Link to='/'>
							<img className="nupsglogo" src="/nupsglogo.png" alt="" />
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-lg`}
						aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
						placement="end"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
								<img className="nupsglogo" src="/nupsglogo.png" alt="" />
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 pe-3">
								<NavDropdown
									title="Core Executives"
									id={`offcanvasNavbarDropdown-expand-lg`}
									className="navItem"
								>
									<NavDropdown.Item as={Link} to="/president">
										President
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to="/vice">
										Vice President
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to="/gsec">
										General Secretary
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to="/agsec">
										Vice General Secretary
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to="/advisor">
										Advisor
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to="/fina">
										Financial Secretary
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to="/treasurer">
										Treasurer
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to="/organa">
										Organizing Secretary
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to="/aorgana">
										Assitant Organizing Secretary
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to="/welfare">
										Welfare Secretary
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to="/awelfare">
										Assitant Welfare Secretary
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to="/cordi">
										Schools' Coordinator
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to="/alumni">
										Alumni Coordinator
									</NavDropdown.Item>
								</NavDropdown>

								<NavDropdown
									title="Subgroups"
									id={`offcanvasNavbarDropdown-expand-lg`}
									className="navItem"
								>
									<NavDropdown.Item as={Link} to={"/km"}>
										Kingdom Ministrels
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/joc"}>
										Jars of Clay
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/counselling"}>
										Counselling & Visitation
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/bible"}>
										Bible Study
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/transport"}>
										Transport Department
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/levites"}>
										Levites Choir
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/sb"}>
										Singing Band
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/prayer"}>
										Prayer & Deliverance
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/technical"}>
										Technical Team
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/ushering"}>
										Ushering Team
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/evangelism"}>
										Evangelism Team
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/pcc"}>
										Presbyterian Schools' Coordinators
									</NavDropdown.Item>
								</NavDropdown>

								<NavDropdown
									title="Halls & Hostels"
									id={`offcanvasNavbarDropdown-expand-lg`}
									className="navItem"
								>
									<NavDropdown.Item as={Link} to={"/nelson"}>
										Jean Aka Nelson
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/sey"}>
										Elizabeth Frances Sey
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/liman"}>
										Dr Hilla Liman
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/kwapong"}>
										Alexander Adum Kwapong
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/sarbah"}>
										Mensah Sarbah
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/vikings"}>
										Vikings Hostel
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/legon"}>
										Legon Hall
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/akuafo"}>
										Akuafo Hall
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/volta"}>
										Volta Hall
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/commonwealth"}>
										Commonwealth Hall
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/pent"}>
										African Union Hall
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/jubilee"}>
										Jubilee/ISH Hostel
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/tf"}>
										James Topp Yankah
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/bani"}>
										Bani Hostel
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={"/evandy"}>
										Evandy Hostel
									</NavDropdown.Item>
								</NavDropdown>

								<NavDropdown
									title="Wings"
									id={`offcanvasNavbarDropdown-expand-lg`}
									className="navItem"
								>
									<NavDropdown.Item as={Link} to={"/doz"}>
										Daughters of Zion
									</NavDropdown.Item>
								</NavDropdown>

								<Nav.Link className="navItem" href="#action2">
									Semester Outline
								</Nav.Link>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
}

export default NavBar;
